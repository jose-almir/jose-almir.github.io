---
title: "Deploy do Shortr: como hospedei Spring Boot, Redis e Postgres de graça no Railway"
date: "2026-03-18T00:00:00"
thumbnail: "/blog/deploy-spring-boot-railway/thumb.png"
desc: "Como tirar um projeto de portfólio do localhost sem gastar nada. Um guia prático usando a plataforma Railway."
tags: "tutorial"
category: "tutorial"
ref: "deploy-spring-boot-railway"
size: "large"
---
<section className="intro">
<h1>Deploy do Shortr: como hospedei Spring Boot, Redis e Postgres de graça no Railway</h1>
<i className="bi bi-calendar mr-xs"></i><span> 18 Mar, 2026</span>
<img src="/blog/deploy-spring-boot-railway/thumb.png" className="headline" alt="blog headline" title="Arquitetura do projeto">
</section>

> Encontrar uma hospedagem gratuita e viável para uma aplicação Java com banco de dados e cache sempre foi um desafio. Hoje, rodo o [Shortr](https://github.com/jose-almir/shortr) em um ambiente real de produção sem gastar nada.

## O problema do ambiente de produção

Quando você está desenvolvendo na sua máquina, um `docker compose up` resolve sua vida. Postgres na porta `5432`, Redis na `6379`, a aplicação na `8080`. Terminou o projeto, e agora? Para colocar isso em um portfólio público, onde qualquer recrutador ou usuário possa testar, a história muda. 

O mercado oferece opções como AWS e Heroku, mas em pouco tempo você percebe que manter três serviços separados rodando (uma aplicação Spring Boot, um banco de dados relacional e um servidor de cache) consome recursos rapidamente. A cota gratuita desaparece e o cartão de crédito agradece o estrago.

Eu queria um ambiente de demonstração para o **Shortr**, meu encurtador de URLs minimalista feito em Spring Boot 4 e Java 25. O objetivo era simples: um deploy real e funcional, arquitetura limpa, zero custo mensal e uma plataforma que não exigisse o cadastro prévio de um cartão de crédito. Foi assim que cheguei no Railway.

## Por que o Railway?

Muitas plataformas cobram por serviço ou exigem um plano pago para adicionar bancos de dados. O Railway trabalha com um modelo de provisionamento visual onde você adiciona blocos de infraestrutura ao seu projeto e paga (ou consome sua banda gratuita) pelo uso de RAM e CPU, não pela quantidade de serviços.

Isso significa que você pode ter 5 serviços minúsculos rodando e ainda ficar dentro do limite gratuito de 500 horas de uso e US$ 5 mensais em créditos da plataforma. Para um projeto focado apenas em demonstração e estudo, é um cenário ideal.

## Como o deploy funciona na prática

Meu projeto já possuía um `Dockerfile`. O interessante do Railway é que ele detecta esse arquivo e o utiliza para saber como compilar e rodar a aplicação principal, sem a necessidade de criar configurações específicas (YML) para a plataforma. Porém, a infraestrutura (banco de dados e cache) não é provisionada de forma automática por ele: ela precisa ser criada manualmente na interface como blocos separados. Tudo é feito visualmente.

### 1. Criando os serviços de infraestrutura
No painel do Railway, cliquei em **+ New**, e comecei construindo a infraestrutura com a interface visual de blocos (Building Blocks):
- Adicionei uma instância do **PostgreSQL**.
- Adicionei uma instância do **Redis**.

<img src="/blog/deploy-spring-boot-railway/railway-new-project.png" className="image" alt="Railway Novo Projeto"/>

Com isso, a plataforma já gerencia as instâncias e expõe variáveis de ambiente padrão para ambas (como `DATABASE_URL`, `REDIS_URL`, etc). 

### 2. Conectando a aplicação
Na mesma interface, adicionei um novo serviço escolhendo a opção de deploy via GitHub. Neste passo, precisei conectar a minha conta do GitHub ao Railway e conceder as permissões necessárias de acesso e edição ao repositório do [Shortr](https://github.com/jose-almir/shortr). Com a conexão estabelecida, o Railway detecta o `Dockerfile` presente no projeto, inicia o build pelo Maven e levanta o container da aplicação Java. Depois disso, você verá três blocos rodando no painel do seu projeto.

<img src="/blog/deploy-spring-boot-railway/thumb.png" className="image" alt="Railway Project Canvas"/>

### 3. O arquivo application-prod.properties

Esta é a parte onde eu perdi boas horas batendo a cabeça, mas que estou registrando aqui justamente para você não perder o seu tempo. No Spring Boot, meu `application-prod.properties` espera chaves específicas para conectar no banco e no cache:

```properties
# Prod Profile
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=none
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

spring.data.redis.host=${REDIS_HOST}
spring.data.redis.port=${REDIS_PORT}
spring.data.redis.password=${REDIS_PASSWORD}
```

O detalhe é: o Railway fornece as credenciais do banco com nomes de variáveis próprios (ex: `PGUSER`). Como o repositório do Shortr já possuía um arquivo `.env.example`, o Railway detectou essas variáveis automaticamente e as listou na aba *Variables* do painel, o que facilitou muito o preenchimento. Bastou fazer o mapeamento das variáveis conectando aos serviços criados.

<img src="/blog/deploy-spring-boot-railway/railway-raw-editor.png" className="image" alt="Railway Raw Editor"/>

Para configurar o banco:
- `DB_USER` recebe a referência para `${{Postgres.PGUSER}}`
- `DB_PASSWORD` recebe a referência para `${{Postgres.PGPASSWORD}}`
- `DB_URL` recebe a string de conexão JDBC contendo campos do Railway: `jdbc:postgresql://${{Postgres.PGHOST}}:${{Postgres.PGPORT}}/${{Postgres.PGDATABASE}}`

Para o Redis, usei a mesma tática:
- `REDIS_HOST` mapeado para `${{Redis.REDISHOST}}`
- `REDIS_PORT` recebe `${{Redis.REDISPORT}}`
- `REDIS_PASSWORD` recebe `${{Redis.REDISPASSWORD}}`

Um detalhe importante da arquitetura aqui é a [rede privada do Railway](https://docs.railway.com/networking/private-networking). Quando referenciamos variáveis como `PGHOST` e `REDISHOST`, a aplicação não sai para a internet pública para encontrar o banco de dados. Todos os serviços dentro do mesmo projeto no Railway se comunicam através de uma rede privada isolada (usando IPv6), o que significa que o banco de dados e o cache estão totalmente protegidos de acessos externos indesejados, sem a necessidade de configurar VPCs complexas na mão.

Isso isola a aplicação das regras abstratas da plataforma. Meu código não precisa saber que está rodando no Railway, ele apenas consome variáveis de ambiente genéricas. Quando preciso definir o perfil de execução do Spring, apenas crio a variável `SPRING_PROFILES_ACTIVE` com o valor `prod`.

## O Trade-off

Lembre-se: infraestrutura gratuita vem com regras. No Railway, os créditos não duram um mês inteiro se sua aplicação processar tráfego real e pesado. O limite de 500 horas de RAM e CPU por mês é calibrado para testes e apresentações. Se o limite exaurir, o projeto pausa até o início do próximo ciclo. Para um site em produção recebendo carga, isso é inaceitável. Para divulgar seus projetos e comprovar que sua arquitetura funciona, é mais que suficiente.

Comece agora: vá até o repositório do [Shortr](https://github.com/jose-almir/shortr), estude como o `Dockerfile` está estruturado, crie sua conta no [Railway](https://railway.com) e veja a mágica do deploy de verdade.

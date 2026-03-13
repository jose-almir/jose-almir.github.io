---
title: "Um CMS que usa o GitHub como banco de dados"
date: "2026-03-10T00:00:00"
thumbnail: "/blog/cms-portfolio/cms-portfolio-thumb.png"
desc: "A ideia de conteúdo gerenciado por arquivos não era nova pra mim, mas este portfólio foi a oportunidade de levar o conceito a outro nível: construir um CMS simples, usando o próprio repositório GitHub como banco de dados"
tags: "projetos, arquitetura"
categoria: "projetos"
size: "tall"
---
<section className="intro">
<h1>Um CMS que usa o GitHub como banco de dados</h1>
<i className="bi bi-calendar mr-xs"></i><span> 10 Mar, 2026</span>
<img src="/blog/cms-portfolio/cms-portfolio-thumb.png" className="headline" alt="blog headline" title="Powered by Lovart AI">
</section>

> A ideia de conteúdo gerenciado por arquivos não era nova pra mim, mas este portfólio foi a oportunidade de levar o conceito a outro nível: construir um CMS simples, usando o próprio repositório GitHub como banco de dados.

## A necessidade
Quando surgiu a necessidade de criar um portfólio para minha namorada, que é roteirista e quadrinista, a primeira pergunta foi: como ela vai atualizar o conteúdo sozinha, sem precisar de mim toda vez?

A ideia de conteúdo gerenciado por arquivos não era nova para mim. No código-fonte do meu próprio blog, já usava arquivos markdown como fonte para as minhas postagens, uma forma simples de ter conteúdo dinâmico sem um banco de dados. 

O portfólio da Arântia foi a oportunidade de levar esse conceito a outro nível: de convenção artesanal a um CMS simples, com interface de administração, autenticação e integração com a API do Github.

Mas logo veio a segunda questão: onde guardar os dados?

## O problema com as opções óbvias
CMS headless como **Contentful** e **Sanity** são ótimos, mas têm planos gratuitos limitados e adicionam dependências de serviços externos. Um banco de dados tradicional exigiria um servidor rodando, o que também tem custo.

Para um portfólio pessoal, isso é over-engineering. A solução foi usar o que já estava lá: o próprio repositório Github do portfólio.

## Dois repositórios , um sistema

<a href="https://arantia.art/pt" target="_blank">
    <img src="/blog/cms-portfolio/portfolio-print.png" className="image" alt="Print do portfólio"/>
</a>

O projeto é dividido em dois repositórios Next.js independentes:
- **Portfólio público:** hospedado no Github Pages como site estático. Sem servidor, sem custo. O conteúdo é lido de arquivos JSON que ficam dentro do próprio repositório e as páginas são geradas em tempo de build. Também tem suporte completo a três idiomas (PT, EN e ES) com detecção automática baseada no navegador do visitante, importante para alcançar mais públicos.
- **Painel de administração (CMS)**: um app privado, rodando localmente ou em qualquer servidor, com autenticação via conta GitHub. Somente e-mails autorizados conseguem acessar. É por aqui que ela adiciona, edita e remove HQs e ilustrações do portfólio.

## GitHub como banco de dados
A parte mais interessante da arquitetura: o CMS não tem banco de dados próprio. Ele se comunica diretamente com a API REST do GitHub para **ler e escrever no repositório do portfólio**.

Cada operação como adicionar, editar ou remover um item, gera um commit automático com uma mensagem descritiva. Esse commit aciona o GitHub Actions, que reconstrói e publica o site automaticamente, sem nenhuma ação manual. O histórico de commits funciona também como um log de auditoria de todo o conteúdo publicado.

<img src="/diagrams/cms-portfolio.md-0.svg" />
<br />
<br />
Também podemos ver um pouco de como é o CMS privado:
<img src="/blog/cms-portfolio/cms-print.png" className="image" alt="Print do CMS privado"/>

Assim fica o histórico de alterações:
<img src="/blog/cms-portfolio/cms-commits.png" className="image" alt="Print do commits do CMS"/>


## Por que isso funciona bem aqui
Essa solução não é para qualquer projeto. Ela faz sentido num contexto específico:
- **Volume baixo** de conteúdo e atualizações esparsas
- **Custo zero** é uma prioridade
- O conteúdo é essencialmente **estático** (não há interatividade de usuário final)
- O repositório já existe e é a fonte da verdade do projeto

Para um portfólio pessoal, o GitHub entrega autenticação, armazenamento de arquivos, API REST, controle de acesso e histórico de alterações, tudo gratuitamente e com infraestrutura confiável.

No fim, o que mais importa é que a tecnologia fica invisível para quem usa. Minha namorada adiciona uma nova HQ, o site atualiza, e ela não precisa saber nada sobre APIs ou commits para isso acontecer. Essa é a parte que mais me orgulha nesse projeto.
---
title: "SOL-e - Extrator Automatizado de Referências"
description: Ferramenta patenteada para extrair referências BibTeX em lote a partir da SBC Open Lib, reduzindo trabalho manual em pesquisa acadêmica.
image: /projects/sol-e/app-screenshot.jpg
isPrivate: false
url: https://github.com/jose-almir/sol-e
role: "Produto completo, do scraping à interface e ao formato final entregue ao usuário."
challenge: "Automatizar a coleta de metadados em uma fonte não pensada para processamento em lote, preservando consistência e velocidade."
outcome: "Pesquisadores passaram a gerar referências em massa em segundos, com menos erro manual e menos desgaste operacional."
proofPoints:
  - "A solução processa lotes com mais de 200 artigos em poucos segundos."
  - "Desenhei a interface para upload e acompanhamento do progresso de extração."
  - "Implementei scraping adaptado à estrutura dinâmica da SBC Open Lib."
  - "Normalizei os dados diretamente para o padrão BibTeX, prontos para uso em LaTeX."
tech:
  - Angular
  - Express.js
  - Web Scraping
  - BibTeX Automation
order: 4
---

Criei o SOL-e para resolver uma dor muito específica de pesquisa acadêmica: transformar a coleta manual de referências em um fluxo rápido, reproduzível e com menos chance de erro. O sistema foi reconhecido com patente por atacar um problema real de produtividade em contexto universitário.

## Contexto
Antes da ferramenta, pesquisadores precisavam copiar informações manualmente da SBC Open Lib para montar arquivos BibTeX. Esse processo era lento, cansativo e sujeito a inconsistências, especialmente em listas maiores.

## Meu papel
Desenvolvi o produto de ponta a ponta, incluindo interface, API, lógica de scraping e formatação final das referências. O trabalho envolveu tanto decisões de UX quanto engenharia de automação e tratamento de dados.

## Decisões técnicas
- **Interface simples para uso acadêmico:** priorizei um fluxo direto para upload de listas e acompanhamento do processamento.
- **Scraping resiliente:** adaptei a extração à estrutura dinâmica da biblioteca para manter confiabilidade.
- **Pipeline de transformação:** converti os dados extraídos diretamente para BibTeX, reduzindo retrabalho do usuário.
- **Processamento em lote:** desenhei a solução para lidar bem com conjuntos grandes de artigos.

## Resultado observado
O tempo gasto com referência bibliográfica caiu drasticamente em cenários de uso intensivo. Em vez de copiar item por item, o usuário passou a gerar arquivos prontos em segundos e direcionar energia para leitura e escrita científica.

## Referências visuais
![Interface de Extração](/projects/sol-e/app-screenshot.jpg)

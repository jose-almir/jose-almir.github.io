---
title: "Como aprender CSS"
date: "2023-05-07T00:00:00"
thumbnail: "/desola-lanre-ologun-USp4Gzr-Hdw-unsplash.jpg"
desc: "O CSS é uma linguagem de estilização crucial para um desenvolvedor front-end, sem ela o site não possui vida e nem personalidade."
tags: "css, design"
categoria: "css"
---


<section className="intro">
<h1>Como aprender CSS</h1>
<i className="bi bi-clock-fill mr-xs"></i><span> 5 min · </span><i className="bi bi-calendar mr-xs"></i><span> 07 Mai, 2023</span>

<img src="/desola-lanre-ologun-USp4Gzr-Hdw-unsplash.jpg" className="headline" alt="blog headline by desola lanre on unsplash" title="By Aaron Burden on Unsplash">

<blockquote>O CSS é uma linguagem de estilização crucial para um desenvolvedor front-end, sem ela o site não possui vida e nem personalidade.</blockquote>

</section>

## O quão complexo CSS pode ser?
Sempre quando estudamos algo novo, há tópicos do assunto em específico que somos capazes de entender e utilizar mais facilmente que outros. No caso do CSS há propriedades simples como `color`, `font-size`, `width` e `height`. Porém existem diversas outras propriedades que podem ser bastante complexas, tais como `display`, `position` e etc. 

A complexidade depende de alguns fatores, porém o principal é a robustez do design desejado. Quanto mais detalhado e vivo um design, mais complexo seu CSS se torna pois haverá a necessidade de utilizar várias propriedades em conjunto e gerenciá-las para que não conflituem.

## A base de conhecimento
Ter conhecimento em HTML de maneira bem detalhada é crucial para entender os seletores, ids e classes apresentados no CSS. Deixar de entender o que é uma tag, o que é um elemento HTML e o que são atributos pode fazer a diferença na hora de escrever seu próprio CSS. Portanto, certifique-se que o raciocínio estrutural e hierárquico do HTML estejam consolidados em sua mente.

Vamos a um exemplo bem óbvio, como podemos aplicar a cor vermelha no seguinte elemento da linha 4?

```html
<div class="card">
    <img src="..." width="200"/>
    <p class="card-text">Título do card</p>
    <span>#categoria</span>
</div>
```

Seu raciocínio inicial pode ser: basta criar uma nova class e aplicar ao span da linha 4. E isto está corretíssimo, porém é aí que entra o raciocínio citado anteriormente. Podemos imaginar que este HTML irá se repetir inúmeras vezes na página e toda a estrutura dele é padronizada conforme o código acima. Neste caso, faz mais sentido estilizar o elemento da seguinte maneira:
```css
.card span {
    color: red;
}
```

Entender a hierarquia dos elementos de uma página pode te ajudar a simplificar os seletores e evitar uma chuva de classes desnecessárias como na situação acima. O primeiro passo para ficar bom no CSS é entender como você pode selecionar elementos.

## Seletores

Existem diversas formas de selecionar elementos em uma página HTML desde usar seletores de elementos, a criar um seletor por id. Porém existem outras formas que podem ser úteis em situações específicas. Esta documentação do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Selectors) pode ser útil para você entender quais as possibilidades. Outra dica para praticar, é um jogo de navegador chamado [CSS Diner](https://flukeout.github.io/), ele me ajudou muito neste processo de pensar no melhor seletor e enxergar a hierarquia dos elementos de uma página.

<img src="/screenshot-css-diner.png" className="image" alt="CSS Diner"/>

## Um relato pessoal

<blockquote>
Quando entrei no mundo do desenvolvimento, eu comecei por lógica e outros assuntos menos visuais da programação. Porém houve a necessidade que eu aprendesse HTML e CSS para construir um pequeno site. Nesta situação eu gastei alguns dias vendo cursos grátis e anotando tudo em um caderno, naquela época eu não sabia muito bem como estudar algo relacionado ao desenvolvimento, principalmente algo que aparentava ser tão fácil como HTML e CSS.
No entanto, na hora de colocar para fora as ideias e tentar aplicar as propriedades eu não era capaz de sequer entender o que o código que meus instrutores estavam montando. A funcionalidade em questão era um botão dropdown, daqueles que ao passar o mouse, o mesmo se expande mostrando outras opções inicialmente ocultas.
Foi extremamente frustrante, pois eu havia passado vários dias de estudo focado e não conseguia sequer fazer algo simples.
</blockquote>

## Focando um assunto por vez
Você deve ter se identificado com o relato acima, e acredito que deva ser uma dor de todo iniciante, como usar bem cada propriedade para fazer o que se deseja. E isso eu só fui descobrir depois de muito tempo estudando. A minha dica fundamental é: **estude um tópico por vez separadamente.** 
Pode parecer contraintuitivo fazer isso, porém pense comigo: quando construímos uma casa, também vamos por etapa, ninguém faz o teto sem antes ter as paredes, bem como não fazemos as paredes sem ter os tijolos e assim por diante.

## Veja exemplos na internet
Não tenha medo de pesquisar implementações de outros desenvolvedores, aliás isso te ajuda a clarear as ideias de como organizar e pensar o seu código CSS. Vendo como as propriedades são utilizadas em conjunto para produzir algo visualmente elegante, você começa a alinhar seu raciocínio também, pois querendo ou não o CSS exige raciocínios elaborados.

## Pratique, pratique e pratique!
Cada assunto que for estudado deve ser praticado para que fique fixo em sua mente quando usar e o que pode ser feito com ele. Se você apenas acompanhar um instrutor fazendo o código, ou pega algum código da internet sem buscar entender profundamente, você dificilmente conseguirá criar seus próprios css customizados.

## Alguns links úteis

<ul>
    <li><a href="https://www.w3schools.com/css/default.asp">W3Schools</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">MDN Web Docs</a></li>
    <li><a href="https://cssreference.io">CSS Reference</a></li>
    <li><a href="https://css-tricks.com">CSS Tricks</a></li>
</ul>
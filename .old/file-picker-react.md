---
title: "Como criar um File Picker com React?"
date: "2023-05-12T00:00:00"
thumbnail: "/blog/file-picker.png"
desc: "Todos nós conhecemos o clássico input file, sua customização pode ser complicada caso queiramos uma estilização mais moderna. O componente que irei mostrar aqui pode ser facilmente aplicado ao seu projeto React, uma vez que só utiliza recursos da biblioteca padrão."
tags: "react, frontend"
categoria: "react"
---

<section className="intro">
<h1>Como criar um File Picker com React?</h1>
<i className="bi bi-clock-fill mr-xs"></i><span> 5 min · </span><i className="bi bi-calendar mr-xs"></i><span> 12 Mai, 2023</span>
</section>

## Componente File Picker

Todos nós conhecemos o clássico `<input type="file" />`, ele é um dos elementos HTML padrão, e sua customização pode ser complicada caso queiramos uma estilização mais moderna. O componente que irei mostrar aqui pode ser facilmente aplicado ao seu projeto React, uma vez que só utiliza recursos da **biblioteca padrão**.

A implementação completa está disponível no <a href="https://stackblitz.com/edit/react-wuolto" target="_blank">Stackblitz</a>.

<img src="/blog/screenshot-file-picker.png" className="image" alt="File Picker"/>

## Estilização base

No arquivo de **estilização global**, iremos aplicar os seguintes estilos:

```css
body {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
  margin: 0;
  background-color: #151718;
  color: whitesmoke;
}

.app-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
```

Até aqui apenas modificações visuais para deixar a página mais atrativa, a ideia é centralizar o componente na tela. Agora vamos criar a estilização para o nosso file picker, crie um arquivo: **FilePicker.css**.

```css
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

.wrapper {
  display: flex;
  flex-direction: column;
}

.button {
  width: auto;
  height: 33px;
  font-size: 16px;
  border: 1px solid;
  border-radius: 8px;
  background-color: cornflowerblue;
  color: whitesmoke;
  cursor: pointer;
  display: block;
}

.small {
  color: rgba(255, 255, 255, 0.66);
}
```

A estilização principal se centra no botão e outros elementos visuais que farão parte do componente conforme a imagem mostrada anteriormente.

## Princípios do FilePicker

Para que este componente funcione, alguns princípios devem ser levados em conta:

<ul>
    <li>O único elemento nativo capaz de selecionar arquivos é o input file;</li>
    <li>O botão descrito na imagem anterior será responsável por acionar o explorador de arquivos do sistema;</li>
    <li>O componente deve indicar um feedback que o arquivo foi selecionado com sucesso.</li>
</ul>

Primeiramente vejamos como montar a base do nosso componente:

```jsx
import React from "react";
import "./FilePicker.css";

export function FilePicker({ multiple, accept, onSelect }) {
  return (
    <div className="wrapper">
      <input
        hidden
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => onSelect(e.target.files)}
      />
    </div>
  );
}
```

Vamos entender parte por parte agora. Nosso componente irá envolver o `<input type="file" />`, de tal forma que para customizar as opções possíveis recebemos algumas props.

- `multiple`: É um atributo comum neste tipo de input e permite a seleção múltipla de arquivos;
- `accept`: É um atributo comum que permite que apenas determinados tipos sejam selecionados;
- `onSelect`: É o nome da função que irá enviar os arquivos para o componente-pai que estiver utilizando o FilePicker, tal como um formulário.

Observe na linha 9, é definido a seguinte arrow function: `(e) => onSelect(e.target.files)`. Toda vez que o input for alterado, a nossa callback `onSelect` será chamada passando os arquivos como parâmetro, para esta situação optei por utilizar o evento do input chamado de `onChange`. Porém, até este ponto nada aparece em nossa interface, pois por padrão ocultamos o input usando a propriedade `hidden`.

Para chamar este componente FilePicker, basta chamá-lo no **App.js** ou no local que desejar:

```jsx
<FilePicker
  accept=".csv, .xlsx"
  multiple
  onSelect={(files) => {
    console.log(files);
  }}
/>
```

Para que um botão acione o input oculto e abra o explorador de arquivos do dispositivo, será necessário "forçar" o clique no input mesmo ele estando oculto.

## useRef

O `useRef` é um hook padrão da biblioteca do React. A <a href="https://react.dev/reference/react/useRef" target="_blank">documentação oficial</a> define como "um hook que permite referenciar um valor que não é necessário para renderização". Resumidamente, ele é um valor que será preservado durante as renderizações dos componentes funcionais, e sua alteração não força uma re-renderização como o useState, por exemplo.

Uma das finalidades deste hook, é guardar referência de elementos da DOM, dessa forma podemos ler as informações de qualquer elemento desde que ele possua uma referência.

```jsx
import React, { useRef } from "react";
import "./FilePicker.css";

export function FilePicker({ multiple, accept, onSelect }) {
  const inputRef = useRef(null);

  return (
    <div className="wrapper">
      <input
        ref={inputRef}
        hidden
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => onSelect(e.target.files)}
      />
      <p>Selecione um arquivo de tipo: {accept}</p>
      <button className="button" onClick={() => inputRef.current.click()}>
        Selecionar
      </button>
    </div>
  );
}
```

O código acima já funcione perfeitamente, porém vamos entender parte por parte do processo:

- **Linha 5:** `const ref = useRef(null)`, esta linha determina uma referência no React, seu valor inicial é `null`;
- **Linha 10:** `ref={inputRef}`, esta linha determina que o input agora possui uma referência do elemento na DOM. Para acessar basta utilizar `inputRef.current`;
- **Linha 18:** `inputRef.current.click()`, ao clicarmos no botão invocamos um dos eventos de um input: `click`.

Dessa forma, é possível selecionar os arquivos mesmo que o input verdadeiro não esteja aparecendo na tela, pois nosso `inputRef` possui informação da DOM a respeito deste elemento.

## Toques finais

Com o FilePicker funcional, basta aplicar algumas melhorias visuais como um state para mostrar quantos arquivos foram selecionados e mudar a aparência do botão:

```jsx
import React, { useState, useRef } from "react";
import "./FilePicker.css";

export function FilePicker({ multiple, accept, onSelect }) {
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);

  return (
    <div className="wrapper">
      <input
        ref={inputRef}
        hidden
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => {
          onSelect(e.target.files);
          setSelected(e.target.files);
        }}
      />
      <p>Selecione um arquivo de tipo: {accept}</p>
      <button className="button" onClick={() => inputRef.current.click()}>
        {selected ? (
          <>
            <i className="bi bi-check2-circle" /> Selecionado
          </>
        ) : (
          <>
            <i className="bi bi-upload" /> Selecionar
          </>
        )}
      </button>
      {selected && (
        <small className="small">
          {selected.length} selecionado (s)
          <span
            onClick={() => {
              inputRef.current.value = "";
              setSelected(null);
              onSelect(null);
            }}
          >
            <i className="bi bi-x-circle" />
          </span>
        </small>
      )}
    </div>
  );
}
```

As melhorias foram realizadas na **linha 5**, com um state para saber quando os arquivos foram selecionados ou não. Nas **linhas 23-32** mostramos um ícone e texto diferentes de acordo com o state. E na **linha 33** adicionamos um elemento básico para mostrar quantos arquivos foram selecionados, bem como a possibilidade de "limpar". Para isso, na **linha 37**, o onClick reseta todos os valores, inclusive da callback `onSelect`.

<img src="/blog/screenshot-file-picker-2.png" className="image" alt="File Picker"/>

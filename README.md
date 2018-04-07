# Click Out

Função em jquery que detecta o clique fora de um elemento.

Com esta função pode-se:

1. remover um elemento quando o clique for fora, sendo ele o próprio elemento que se esta monitorando o clique fora ou outro qualquer;
2. Definir uma função para ser executada quando o clique for fora do elemento;
3. Definir uma para ser executada quando o clique for dentro do elemento;
4. Definir que o evento seja disparado uma unica vez (ideal no caso de um modal que será removido, após sua remoção todos os cliques serão fora, já que ele não esta mais na tela, então é melhor que o evento não seja monitorado) ou indefinidamente;
5. Definir se o clique fora não disparara o comportamento padrão (por exemplo o clique em um link não levara para a página de destino do link).

## Como usar?
### Mova o arquivo `jquery.click-out.js` para o projeto
### Adicione o script do jquery e do plugin
> Exemplo:
```
<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>
<script src="js/jquery.click-out.js"></script>
```
### Faça a chamada da função
> Exemplo:
```
<script>
  onClickOut($('#elemento'), $('#elemento'), clickOut, clickIn, true, true);
</script>
```

## Parâmetros
```
onClickOut($element, $removeElement, functionTrue, functionFalse, destroyEvent, preventDefault);
```

### $element
Elemento do qual será monitorado o clique fora
```
Tipo: elemento html
Obrigatório: sim
```
> Exemplo:
```
onClickOut($('#element'), $('#remove-element'));
```

### $removeElement
Elemento que será removido caso o clique seja fora de $element podendo ser o mesmo elemento ou não.
```
Tipo: elemento html
Obrigatório: não
```
> Exemplo:
```
onClickOut($('#element'), $('#remove-element'));

```

### functionTrue
Função executada caso o clique seja fora de $element.
```
Tipo: função
Obrigatório: não
```
> Exemplo:
```
function clickOut() {
  $('#remove-element').fadeOut();
}
onClickOut($('#elemento'), null, clickOut);

```

### functionFalse
Função executada caso o clique seja dentro de $element.
```
Tipo: função
Obrigatório: não
```
> Exemplo:
```
function clickIn() {
  alert('clicou dentro');
}
onClickOut($('#elemento'), $('#elemento'), null, clickIn);

```

### destroyEvent
Valor true ou false que define se o evento será execudo apenas uma vez.
```
Tipo: boolean
Padrão: true;
Obrigatório: não
```
> Exemplo:
```
function clickIn() {
  alert('clicou dentro');
}
function clickOut() {
  alert('clicou fora');
}
onClickOut($('#elemento'), $('#elemento'), null, null, true);

```

### preventDefault
Valor true ou false que define se o clique fora terá inibido o comportamento padrão do elemento (por exemplo o clique em um link não levara para a página de destino do link).
```
Tipo: boolean
Padrão: true;
Obrigatório: não
```
> Exemplo:
```
onClickOut($('#elemento'), $('#elemento'), null, null, true true);

```

## Licence

MIT License (MIT)

Copyright © 2018 Alex Fabiano Ricioli

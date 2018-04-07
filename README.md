# Click Out

Função em jquery que detecta o clique fora deste elemento.

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
```
Tipo: elemento html
Obrigatório: Sim
```
> Exemplo:
```
onClickOut($('#element'), $('#remove-element'));
```

## Licence

MIT License (MIT)

Copyright © 2018 Alex Fabiano Ricioli

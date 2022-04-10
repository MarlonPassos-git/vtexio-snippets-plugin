<p align="center">
  <a href="https://faststore.dev">
    <img alt="Faststore" src="./icon.png" width="60" />
  </a>
</p>

<h1 align="center">VTEX IO Tools 🛠</h1>

<img align="center" src="https://github.com/MarlonPassos-git/vtexio-snippets-plugin/raw/baseExtension/docs/img/auto-complete.gif"/>
<img src="https://github.com/MarlonPassos-git/vtexio-snippets-plugin/raw/baseExtension/docs/img/vtex%20snipets.gif"/>


## Objetivo


- Esse projeto tem como objetivo facilitar o desenvolvimento de projetos com VTEX IO na criação de novos blocos no JSON e estilizaçoes CSS. Esses snippets geram um auto complete inteligente dos blocos da VTEX IO com todas as propriedades disponiveis e seus argumentos validos. 
- Ter atalhos que vão ajudar no desenvolvimento projeto VTEX na estrutura JSON, SCSS e REACT
- Ser um plugin do VSCode

## Caracteristicas 
- snippets
  - CSS
  - JSON
- auto complete inteligente (mesmo em blocos com identificadores)
- Documentação VTEX inbutida 
- Mostra Valores que vem por padrao em cada propriedade
- Verifica erros na escrita dos blocos JSON



## Como usar

Todos os snippets começam do ``vtex.``, logo para usalos escreva ``vtex.nomedoblocovtex`` e aperte TAB no autocomplete do VSCode.<br/> Exemplo: Se eu quero os snippets do bloco flex-layout eu vou digitar ``vtex.flex-layout``

Como algumas propriedades geralmente são pouco usadas e o intuito dessa ferramenta é acelerar o desenvolvimento, na verção JSON existem dois tipos de prefixos de  snipets:

- vtex. -> Verção resumida com as propriedades mais usadas
- fvtex. -> Verção completa com todas as propriedades 

Alguns snippets CSS/SCSS devido a grande quantidade de classes existe uma versão com comentarios no topo para facilitar a localização no codigo para os iniciantes. Em vez de usar o prefixo <s>``vtex.``</s> use ``cvtex.``

## Como Instalar 

   [Instale a extensao no marketplace do VSCode ](https://marketplace.visualstudio.com/items?itemName=1marlonpassos.vtexio-snippets-plugin)
## Progresso 

[Veja como esta o progresso de desenvolvimento dessa extensao](./docs/progresso.md)

## Contribua
[Ajude-nos a melhorar a extensao](./docs/CONTRIBUTING.md), seja com sugestoes, novas features, apontamento de erros ou no proprio desenvolvimento dos blocos que ainda faltam.


## Licença
Licensed under the [MIT license](./LICENSE)

## Agradecimentos
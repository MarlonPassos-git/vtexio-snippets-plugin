
<h1 align="center"> Como contribuir </h1>


- Use o comando ``yarn dev`` para juntas todos os arquivos JSON
- Aperte F5 para abrir um VSCode para testar as suas modificações. Dentro dele aperte CTRL + R para atualizar com as ultima modificações

1. [Baixe a extensao Convert text/code to a snippet](https://marketplace.visualstudio.com/items?itemName=nsfilho.tosnippet). Ela vai ajudar no processo de criação de novos snippets.
2. Escolha em nossa lista de tarefas alguma propriedade faltando que você deseja contribuir.
3. Faça uma fork desse projeto
4. crie uma nova branch
5. Acesse o a documentação da VTEX no bloco que voce escolheu, e cole esse codigo no navegador:


```js
const $tabelas = document.querySelectorAll(".rdmd-table-inner");

for (let $tabela of $tabelas) {

    let propriedadesEstruturadas = "";
    console.log("Tabela:")
    
    const $linhas = Array.from($tabela.querySelectorAll("tbody tr"));
    for (let $linha of $linhas) {
        const $celulas = Array.from($linha.querySelectorAll("td"));
        const [nomeObjeto, tipo, descricao, valorPadrao] = $celulas.map($celula => {
            return $celula.innerText
        })
        const regrasValorPadrao = {
            '""': '""',
            "undefined": "",
            "false": "false",
            "true": "true",
        }
        const vaiTerVirgula = ($linha == $linhas.at(-1)) ? "":","
        const valor = regrasValorPadrao[`${valorPadrao}`]??`"${valorPadrao}"`;
        const linhaEstruturada = `"${nomeObjeto}": ${valor}${vaiTerVirgula}`
        propriedadesEstruturadas += linhaEstruturada + "\n"
        
    }
    console.log(propriedadesEstruturadas)
}

```
Este codigo vai gerar retorna no console um rascunho de todas as propriedades que esse bloco recebe diretas da tabela

1. Com isso monte um template de desse bloco em algum dos arquivos test.* (Deixei esses arquivos para testar tudo sem a necessidade de ficar criando arquivos avulsos)
2. Depois de criar o template ajuste esse codigo para o formato de snippet JSON.<br/> Você pode selecionar o seu codigo, apertar F1 e digitar ``>Convert to Snippet`` e aperte enter, assim retorar no seu terminal uma verção com o espaçamentos e tabulação ajustados.
3. Pedir um Pull Request 


## 🧐O que há dentro?


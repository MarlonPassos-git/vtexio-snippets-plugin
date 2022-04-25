export function getDataFromPage () {

  

  /* const $tables = document.querySelectorAll('table')
  const tables = {
    css: [],
    json: [],
  }

  for (const $table of $tables) {
    if (isCssTable($table)) {
      tables.css.push(getDataFromCssTable($table));
    }
  } */

  class DataPage {
  
    data () {
      const data = {
        title: this.#getTitle(),
        description: this.#getDescription(),
        cssProps: []
      }

      return data;
    }
  
    #getTitle() {
      return document.querySelector('h1').innerText
    }
  
    #getDescription() {
      const $description = document.querySelector('.markdown-body.ng-non-bindable p')
      const simple = $description.innerText;
      const markdown = this.#formateMarkdonw($description);
  
      return {
        simple,
        markdown
      }
    }
  
    #formateMarkdonw($p) {
      let text = $p.innerText;
      const $namesPropertyMarked = document.querySelectorAll('.markdown-body.ng-non-bindable p .cm-s-neo');
      console.log($namesPropertyMarked, $p)
      if ($namesPropertyMarked) {
        for (const $namePropertyMarked of $namesPropertyMarked) {
          const namePropertyMarked = $namePropertyMarked.innerText;
          text = text.replace(namePropertyMarked, `\`\`${namePropertyMarked}\`\``);
        }
      }
      return text;
    }
  
    
  }

  const dataPage = new DataPage();
  console.log("dataPage", dataPage.data());
  
}


const CSS_TABLE_HEADINGS = {
  QUANTITY: 1,
  NAME: 'CSS Handles'
} 


function isCssTable ($table) {
  const $ths = $table.tHead.querySelectorAll('th');

  if ($ths.length !== QUANTITY_OF_CSS_TABLE_HEADINGS) return false;

  const [$th] = $ths;
}


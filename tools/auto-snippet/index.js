import { readFile, writeFile } from 'fs';
import { SnippetCSS } from './tools/SnippetCSS.js';

const NAME = 'video';
const DESCRIPTION = '';
const MARKDOWN_DESCRIPTION = '' 
const PATH_FOLDER_SNIPPETS_CSS = "../../src/snippets/css";
const PATH_FOLDER_SNIPPETS_JSON = "";
const PATH_FOLDER_SCHEMA = "";

readFile('./css.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const snippet = new SnippetCSS({
    prefix: 'video',
    name: NAME,
    description: DESCRIPTION,
  });

  const classNamesFormatted = snippet.build(data);

  console.log(classNamesFormatted);
  writeFile(`${PATH_FOLDER_SNIPPETS_CSS}/vtex.${NAME}.json`, classNamesFormatted, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  // cria um arquivo com esse conteudo

  

  
})
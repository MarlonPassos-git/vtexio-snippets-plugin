import { readFile, writeFile } from 'fs';
import { SnippetCSS } from './tools/SnippetCSS.js';
import { CONFIG } from "./config.js";

const { NAME, PATH_FOLDER_SNIPPETS_CSS, DESCRIPTION} = CONFIG

readFile('./propsCSS.txt', 'utf8', (err, data) => {
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
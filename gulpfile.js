import gulp from "gulp";
import gulpMergeJson from 'gulp-merge-json';
const { src, dest, watch } = gulp;

function joinJSONs(extension) {
  const gulpMergeJsonConfig = {s
    fileName: `snippets.${extension}.code-snippets`,
  }

  return src([`src/snippets/${extension}/*.json`])
    .pipe(gulpMergeJson(gulpMergeJsonConfig))
    .pipe(dest("dist/snippets"));
}

function joinSchema() {
  const gulpMergeJsonConfig = {
    fileName: `schema.json`,
  }

  return src([`src/schema/*.json`])
    .pipe(gulpMergeJson(gulpMergeJsonConfig))
    .pipe(dest("dist/schema"));
}


function time () {
  const data = new Date();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundo = data.getSeconds();
  const horaFormatada = hora < 10 ? `0${hora}` : hora;
  const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;
  const segundoFormatado = segundo < 10 ? `0${segundo}` : segundo;

  return `[${horaFormatada}:${minutoFormatado}:${segundoFormatado}]`;
}


async function dev () {
  await joinJSONs('json');
  console.log(time() + ' JSON snippets generated');
  await joinJSONs('css');
  console.log(time() + ' CSS snippets generated');
  await joinSchema();
  console.log(time() + ' JSON schema generated');
}

const watchOptions = {
  delay: 150,
  ignoreInitial: false,
}

const _dev = dev;
export { _dev as dev };

watch('src/**/*.json',watchOptions, dev);
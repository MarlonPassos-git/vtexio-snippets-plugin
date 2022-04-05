const gulp = require('gulp');
const gulpMergeJson = require('gulp-merge-json');
const { watch } = require('gulp');

function joinJSONs(extension) {
  const gulpMergeJsonConfig = {
    fileName: `snippets.${extension}.code-snippets`,
  }

  return gulp.src([`src/snippets/${extension}/*.json`])
    .pipe(gulpMergeJson(gulpMergeJsonConfig))
    .pipe(gulp.dest("dist/snippets"));
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
}

const watchOptions = {
  delay: 150,
  ignoreInitial: false,
}

exports.dev = dev;

watch('src/snippets/**/*.json',watchOptions, dev);
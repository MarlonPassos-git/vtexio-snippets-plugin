import { EOL } from 'os';

export class SnippetCSS {
  constructor({ prefix, name, description }) {
    this.prefix = prefix;
    this.name = name;
    this.description = description;
  }

  formatCSS(classNamesData) {
    const classNamesFormatted = classNamesData
      .split(EOL)
      .map(line => {
        const newLine = `.${line.trim()}--$1 {${EOL}${EOL}}${EOL}`;

        return newLine;
      })
      .join(EOL);

    return classNamesFormatted;
  }

  AddQuotesEachLine(data) {
    const classNamesFormatted = data
      .split(EOL)
      .map((line, index) => {
        const isLastLine = index === data.split(EOL).length - 1;
        const comma = isLastLine ? '' : ',';
        const newLine = `\t\t\t"${line.trim()}"${comma}`;
        return newLine;
      })
      .join(EOL);

    return classNamesFormatted;
  }

  createArchive(body) {
    const archive = `{
  "vtex.${this.name}": {
    "description": "${this.description}",
    "prefix": "vtex.${this.prefix}",
    "body": [
${body}
    ]
  }
}`;
    return archive;
  }

  build(data) {
    const classWithShortcuts = this.formatCSS(data);
    const classNamesWithQuotes = this.AddQuotesEachLine(classWithShortcuts);
    const archive = this.createArchive(classNamesWithQuotes);

    return archive;
  }
}

const showdown = require('showdown')
const fs = require('fs')

let md = fs.readFileSync('roadmap.md').toString();

let converter = new showdown.Converter(),
    html = converter.makeHtml(md);

console.log(html);

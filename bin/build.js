#!/bin/env node

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const Renderer = marked.Renderer;
const highlightjs = require('highlight.js');
const ejs = require('ejs');

// Create your custom renderer.
const renderer = new Renderer();
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && highlightjs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

// Set the renderer to marked.
marked.setOptions({ renderer });

const docsPath = path.resolve(__dirname, '../site/docs.md');
const docsHTML = marked(fs.readFileSync(docsPath, 'utf-8'));

const siteIndexTemplatePath = path.resolve(__dirname, '../site/index.ejs');
const siteIndexTemplate = fs.readFileSync(siteIndexTemplatePath, 'utf-8');

const siteIndexHTML = ejs.render(siteIndexTemplate, {
  docs: docsHTML,
});

const siteIndexHTMLPath = path.resolve(__dirname, '../site/index.html');
fs.writeFileSync(siteIndexHTMLPath, siteIndexHTML, 'utf-8');

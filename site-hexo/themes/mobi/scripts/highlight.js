// /* global hexo */
// /* eslint strict:0, no-param-reassign:0 */
// 'use strict';
//
// const highlightjs = require('highlight.js');
//
// // Forked from https://github.com/chjj/marked/blob/master/lib/marked.js#L78
// const fences = /\s*(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/g;
//
// function backtickCodeBlock(data) {
//   const config = this.config.highlight_easy || {};
//   if (!config.enable) return;
//
//   data.content = data.content.replace(fences, (whole, graveAccent, language, content) => {
//     highlightjs.configure({
//       classPrefix: 'hljs-',
//     });
//
//     // Check whether the given language is valid for highlight.js.
//     let highlightedContent;
//     if (!language) {
//       const highlightAutoResult = highlightjs.highlightAuto(content);
//       highlightedContent = highlightAutoResult.value;
//       language = highlightAutoResult.language;
//     } else if (!highlightjs.getLanguage(language)) {
//       highlightedContent = content;
//     } else {
//       highlightedContent = highlightjs.highlight(language, content).value;
//     }
//
//     return `\n<pre><code class="hljs ${language}">${highlightedContent}</code></pre>\n`;
//   });
// }
//
// hexo.extend.filter.register('before_post_render', backtickCodeBlock);

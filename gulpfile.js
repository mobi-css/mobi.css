/* eslint no-use-before-define:0 */

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const highlightjs = require('highlight.js');
const ejs = require('ejs');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const rimraf = require('rimraf');
const runSequence = require('run-sequence');
const ecstatic = require('ecstatic');
const http = require('http');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const mkdirp = require('mkdirp');

const postcssConfig = [autoprefixer({ browsers: [
  'last 5 iOS versions',
  'last 5 Android versions',
  'last 5 ExplorerMobile versions',
  'last 5 ChromeAndroid versions',
  'last 5 UCAndroid versions',
  'last 5 FirefoxAndroid versions',
  'last 5 OperaMobile versions',
  'last 5 OperaMini versions',
  'last 5 Samsung versions',

  'last 3 Chrome versions',
  'last 3 Firefox versions',
  'last 3 Safari versions',
  'last 3 Edge versions',
] })];

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const SITE_DIR = path.resolve(__dirname, 'site');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const PORT = 8000;

setupMarked();

gulp.task('default', ['serve', 'build'], () => {
  gulp.watch([
    `${SRC_DIR}/**/*`,
    `${SITE_DIR}/**/*`,
  ], ['build']);
});

gulp.task('build', (done) => {
  runSequence('build:mobi', 'build:site', done);
});

gulp.task('build:mobi', [
  'clean:dist',
  'build:mobi:sourcemaps',
  'build:mobi:compressed',
]);

gulp.task('build:site', [
  'clean:public',
  'build:index',
  'build:static',
]);

gulp.task('clean:dist', () => {
  rimraf.sync(DIST_DIR);
  mkdirp.sync(DIST_DIR);
});

gulp.task('clean:public', () => {
  rimraf.sync(PUBLIC_DIR);
  mkdirp.sync(PUBLIC_DIR);
});

gulp.task('build:mobi:compressed', ['build:mobi:sourcemaps'], () => gulp.src(`${DIST_DIR}/mobi.css`)
  .pipe(cleanCSS())
  .pipe(rename('mobi.min.css'))
  .pipe(gulp.dest(DIST_DIR)));

gulp.task('build:mobi:sourcemaps', () => gulp.src(`${SRC_DIR}/mobi.scss`)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(postcssConfig))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(DIST_DIR)));

gulp.task('build:index', (done) => {
  const docsPath = path.resolve(SITE_DIR, 'docs.md');
  const docsHTML = marked(fs.readFileSync(docsPath, 'utf-8'));

  const siteIndexTemplatePath = path.resolve(SITE_DIR, 'index.ejs');
  ejs.renderFile(siteIndexTemplatePath, {
    docs: docsHTML,
  }, (err, str) => {
    if (err) throw err;
    const siteIndexHTML = str;
    const publicIndexPath = path.resolve(PUBLIC_DIR, 'index.html');
    fs.writeFileSync(publicIndexPath, siteIndexHTML, 'utf-8');
    done();
  });
});

gulp.task('build:static', ['build:static:mobi'], () => gulp.src([
  `${SITE_DIR}/css/**/*`,
  `${SITE_DIR}/img/**/*`,
  `${SITE_DIR}/CNAME`,
], { base: SITE_DIR })
  .pipe(gulp.dest(PUBLIC_DIR)));

gulp.task('build:static:mobi', () => gulp.src(`${DIST_DIR}/*`)
  .pipe(gulp.dest(`${PUBLIC_DIR}/css`)));

function setupMarked() {
  const Renderer = marked.Renderer;
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
}

gulp.task('serve', () => {
  http.createServer(
    ecstatic({ root: PUBLIC_DIR })
  ).listen(PORT);

  console.log(`Listening on :${PORT}`);
});

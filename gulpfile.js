const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const rimraf = require('rimraf');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const insert = require('gulp-insert');
const http = require('http');
const ecstatic = require('ecstatic');
const runSequence = require('run-sequence');
const Pagic = require('pagic');
const debounce = require('debounce');
const pkg = require('./package.json');

const DEBOUNCE_DELAY = 300;
const PORT = 8000;

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
const SITE_CSS_DIR = path.resolve(__dirname, 'site/css');
const PUBLIC_DIR = path.resolve(__dirname, 'docs');

gulp.task('default', () => {
  runSequence('build', 'serve', () => {
    gulp.watch([
      `${SRC_DIR}/**/*`,
    ], debounce(() => {
      runSequence('build:src', 'clean:site_css', 'copy:css_to_site');
    }, DEBOUNCE_DELAY));
    gulp.watch([
      `${SITE_DIR}/**/*`,
    ], debounce(() => {
      runSequence('pagic');
    }, DEBOUNCE_DELAY));
  });
});

gulp.task('build', (callback) => {
  runSequence('build:src', 'build:site', callback);
});

gulp.task('build:src', (callback) => {
  runSequence('clean:dist', 'build:css', 'build:css:min', callback);
});

gulp.task('build:site', (callback) => {
  runSequence('clean:site_css', 'copy:css_to_site', 'pagic', callback);
});

gulp.task('clean:dist', () => {
  rimraf.sync(`${DIST_DIR}/*`);
});

gulp.task('build:css', (callback) => {
  gulp.src(`${SRC_DIR}/mobi.scss`)
    .pipe(sass({
      includePaths: 'node_modules',
    }).on('error', sass.logError))
    .pipe(postcss(postcssConfig))
    .pipe(insert.prepend(`/*! Mobi.css v${pkg.version} ${pkg.homepage} */\n`))
    .pipe(gulp.dest(DIST_DIR))
    .on('end', callback);
});

gulp.task('build:css:min', (callback) => {
  gulp.src(`${DIST_DIR}/mobi.css`)
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename('mobi.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DIST_DIR))
    .on('end', callback);
});

gulp.task('clean:site_css', () => {
  rimraf.sync(`${SITE_CSS_DIR}/*`);
});

gulp.task('copy:css_to_site', (callback) => {
  gulp.src(`${DIST_DIR}/**/*`)
    .pipe(gulp.dest(SITE_CSS_DIR))
    .on('end', callback);
});

gulp.task('pagic', () => {
  const pagic = new Pagic();
  pagic.build();
});

gulp.task('serve', () => {
  http.createServer(
    ecstatic({ root: PUBLIC_DIR })
  ).listen(PORT);

  console.log(`ecstatic serving ${PUBLIC_DIR} at http://0.0.0.0:${PORT}`);
});

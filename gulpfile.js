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
const pkg = require('./package.json');
const tap = require('gulp-tap');
const http = require('http');
const ecstatic = require('ecstatic');
const md = require('markdown-it')({
  html: true,
}).use(require('markdown-it-anchor'));
const gutil = require('gulp-util');

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
const TEST_PUBLIC_DIR = path.resolve(__dirname, 'test/public');

gulp.task('default', ['build', 'test:build_html', 'test:serve'], () => {
  gulp.watch([
    `${SRC_DIR}/**/*`,
  ], ['build']);
  gulp.watch([
    `${TEST_PUBLIC_DIR}/**/*`,
    `!${TEST_PUBLIC_DIR}/**/*.html`,
  ], ['test:build_html']);
});

gulp.task('build', [
  'clean:dist',
  'build:mobi',
  'build:mobi:min',
]);

gulp.task('clean:dist', () => {
  rimraf.sync(`${DIST_DIR}/*`);
});

gulp.task('build:mobi:min', ['build:mobi'], () => gulp.src(`${DIST_DIR}/mobi.css`)
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(insert.prepend(`/* Mobi.css v${pkg.version} ${pkg.homepage} */\n`))
  .pipe(rename('mobi.min.css'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(DIST_DIR)));

gulp.task('build:mobi', () => gulp.src(`${SRC_DIR}/mobi.scss`)
  .pipe(sourcemaps.init())
  .pipe(sass({
//    includePaths: 'node_modules'
  }).on('error', sass.logError))
  .pipe(postcss(postcssConfig))
  .pipe(insert.prepend(`/* Mobi.css v${pkg.version} ${pkg.homepage} */\n`))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(DIST_DIR)));

gulp.task('test:build_html', () => gulp.src(`${TEST_PUBLIC_DIR}/**/*.md`)
  .pipe(tap(file => {
    /* eslint no-param-reassign:0 */
    const relativeToPublicDir = path.relative(
      path.resolve(file.path, '..'),
      path.resolve(TEST_PUBLIC_DIR)
    );
    const mobicssPath = path.join(relativeToPublicDir, 'assets/css/mobi.min.css');
    file.contents = new Buffer(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0,
            maximum-scale=1.0, user-scalable=no"/>

          <link rel="stylesheet" href="${mobicssPath}" />
          <style>
            .site-box {
              background-color: hsla(120, 50%, 50%, 0.15);
              border: 1px solid hsla(120, 50%, 50%, 0.2);
            }
          </style>
        </head>
        <body>
          <div class="flex-center">
            <div class="container">
              ${md.render(file.contents.toString())}
            </div>
          </div>
        </body>
      </html>
    `);
    file.path = gutil.replaceExtension(file.path, '.html');
  }))
  .pipe(gulp.dest(TEST_PUBLIC_DIR)));

gulp.task('test:serve', () => {
  http.createServer(
    ecstatic({ root: TEST_PUBLIC_DIR })
  ).listen(8000);

  console.log(`ecstatic serving ${TEST_PUBLIC_DIR} at http://0.0.0.0:8000`);
});

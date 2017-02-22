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
const md = require('markdown-it')().use(require('markdown-it-anchor'));

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
const DEMO_SRC_DIR = path.resolve(__dirname, 'public');
const DEMO_DIST_DIR = path.resolve(__dirname, 'public');

gulp.task('default', ['build'], () => {
  gulp.watch([
    `${SRC_DIR}/**/*`,
  ], ['build']);
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

gulp.task('build:demo', () => gulp.src(`${DEMO_SRC_DIR}/**/*.md`)
  .pipe(tap(file => {
    /* eslint no-param-reassign:0 */
    file.contents = Buffer.concat([
      new Buffer(`
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0,
              maximum-scale=1.0, user-scalable=no"/>

            <link rel="stylesheet" href="css/mobi.min.css" />
          </head>
          <body>
      `),
      new Buffer(md.render(file.contents.toString())),
      new Buffer(`
        </body>
          </html>
      `),
    ]);
  }))
  .pipe(gulp.dest(DEMO_DIST_DIR)));

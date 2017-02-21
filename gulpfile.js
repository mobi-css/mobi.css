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

gulp.task('build:mobi', () => gulp.src(`${SRC_DIR}/mobi.css`)
  .pipe(postcss(postcssConfig))
  .pipe(insert.prepend(`/* Mobi.css v${pkg.version} ${pkg.homepage} */\n`))
  .pipe(gulp.dest(DIST_DIR)));

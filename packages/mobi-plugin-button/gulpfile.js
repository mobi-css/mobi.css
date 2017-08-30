const path = require('path');

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const cssNext = require('postcss-cssnext');
const cssnano = require('cssnano');
const insert = require('gulp-insert');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const rimraf = require('rimraf');

const pkg = require('./package.json');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const prependContent = `/*! ${pkg.name} v${pkg.version} ${pkg.homepage} */\n`;

gulp.task('default', ['build'], () => {
    gulp.watch([
        `${SRC_DIR}/**/*`
    ], ['build']);
});

gulp.task('build', ['clean:dist', 'build:css', 'build:css:min']);

gulp.task('clean:dist', () => {
    rimraf.sync(`${DIST_DIR}/*`);
});

gulp.task('build:css', (callback) => {
    const plugins = [
        atImport(),
        cssNext()
    ];
    gulp.src(`${SRC_DIR}/${pkg.name}.css`)
        .pipe(sourcemaps.init())
        .pipe(insert.prepend(prependContent))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(DIST_DIR))
        .on('end', callback);
});

gulp.task('build:css:min', (callback) => {
    const plugins = [
        atImport(),
        cssNext(),
        cssnano()
    ];
    gulp.src(`${SRC_DIR}/${pkg.name}.css`)
        .pipe(sourcemaps.init())
        .pipe(insert.prepend(prependContent))
        .pipe(postcss(plugins))
        .pipe(rename(`${pkg.name}.min.css`))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(DIST_DIR))
        .on('end', callback);
});

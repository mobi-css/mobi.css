const path = require('path');

const gulp = require('gulp');
const { clean, buildCss } = require('mobi-util-build-css');

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
    clean(DIST_DIR);
});

gulp.task('build:css', (callback) => {
    buildCss({
        src: `${SRC_DIR}/mobi.css`,
        dist: `${DIST_DIR}/mobi.css`,
        enablePxtorem: true,
        prependContent,
        callback
    });
});

gulp.task('build:css:min', (callback) => {
    buildCss({
        src: `${SRC_DIR}/mobi.css`,
        dist: `${DIST_DIR}/mobi.min.css`,
        enableCompress: true,
        enablePxtorem: true,
        prependContent,
        callback
    });
});

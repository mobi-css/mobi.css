const path = require('path');

const rimraf = require('rimraf');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const cssNext = require('postcss-cssnext');
const pxtorem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const stylefmt = require('stylefmt');
const insert = require('gulp-insert');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function clean(targetPath) {
    rimraf.sync(targetPath);
}

function buildCss({
    src,
    dist,
    minify = false,
    prependContent = '',
    callback = () => {}
}) {
    const plugins = [
        atImport(),
        cssNext(),
        pxtorem({
            propList: [
                'font', 'font-size', 'line-height', 'letter-spacing',
                'margin*', 'padding*'
            ],
            selectorBlackList: [
                /^html$/
            ]
        }),
        cssnano()
    ];
    if (!minify) {
        plugins.push(stylefmt());
    }

    const distDir = path.dirname(dist);
    const distBasename = path.basename(dist);

    gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(insert.prepend(prependContent))
        .pipe(postcss(plugins))
        .pipe(rename(distBasename))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(distDir))
        .on('end', callback);
}

module.exports = {
    clean,
    buildCss
};

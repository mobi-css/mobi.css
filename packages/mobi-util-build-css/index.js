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

const browserlist = [
    'last 5 iOS versions',
    'last 5 Android versions',
    'last 5 ChromeAndroid versions',
    'last 5 UCAndroid versions',
    'last 5 FirefoxAndroid versions',
    'last 5 OperaMini versions',
    'last 5 OperaMobile versions',
    'last 5 Samsung versions',

    'last 3 Chrome versions',
    'last 3 Firefox versions',
    'last 3 Edge versions',
    'last 3 Opera versions'
];

function clean(targetPath) {
    rimraf.sync(targetPath);
}

function buildCss({
    src,
    dist,
    compress = false,
    prepend = '',
    callback = () => {}
}) {
    const plugins = [
        atImport(),
        cssNext({
            browsers: browserlist
        }),
        pxtorem({
            propList: [
                'font', 'font-size', 'line-height', 'letter-spacing',
                'margin*', 'padding*', 'border-radius'
            ]
        }),
        cssnano()
    ];
    if (!compress) {
        plugins.push(stylefmt());
    }

    const distDir = path.dirname(dist);
    const distBasename = path.basename(dist);

    gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(insert.prepend(prepend))
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

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
    'iOS >= 8',
    'Android >= 4',
    'last 10 ChromeAndroid versions',
    'last 10 UCAndroid versions',
    'last 10 Samsung versions',
    'last 10 FirefoxAndroid versions',
    'last 10 OperaMini versions',
    'last 10 OperaMobile versions',

    'last 10 Chrome versions',
    'last 10 Firefox versions',
    'last 10 Edge versions',
    'last 10 Opera versions',
    'ie >= 10'
];

function clean(targetPath) {
    rimraf.sync(targetPath);
}

function buildCss({
    src,
    dist,
    enableCompress = false,
    enablePxtorem = false,
    prependContent = '',
    callback = () => {}
}) {
    const plugins = [
        atImport(),
        cssNext({
            browsers: browserlist
        })
    ];

    if (enablePxtorem) {
        plugins.push(pxtorem({
            propList: [
                'font', 'font-size', 'line-height', 'letter-spacing',
                'width', 'max-width', 'min-width',
                'height', 'max-height', 'min-height',
                'margin*', 'padding*', 'border-radius'
            ]
        }));
    }

    plugins.push(cssnano());

    if (!enableCompress) {
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

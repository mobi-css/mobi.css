<p align="center">
  <a href="http://getmobicss.com/">
    <img width="256" alt="Mobi.css Logo" src="site/source/img/mobi-logo-512.png"/>
  </a>
</p>

<h1>
  <a href="http://getmobicss.com/">Mobi.css</a>
  <a href="https://travis-ci.org/xcatliu/mobi.css">
    <img src="https://img.shields.io/travis/xcatliu/mobi.css.svg?style=flat-square" alt="Build Status"/>
  </a>
  <a href="https://www.npmjs.org/package/mobi.css">
    <img src="https://img.shields.io/npm/v/mobi.css.svg?style=flat-square" alt="npm package"/>
  </a>
  <a href="https://www.npmjs.org/package/mobi.css">
    <img src="http://img.shields.io/npm/dm/mobi.css.svg?style=flat-square" alt="npm downloads"/>
  </a>
</h1>

> A lightweight, flexible css framework that focus on mobile.

## Introduction

- Only 3.6kb after gzipped, less than Skeleton, Pure.css and Bootstrap v4, etc.
- Heavy use of flexbox, super flexible, less than 10 lines of custom style in the [Homepage].
- Focus on mobile, show mobile pages in desktop with a sidebar on the left or right.

## Getting started

You can download Mobi.css in [this page](https://github.com/xcatliu/mobi.css/releases), then use `dist/mobi.min.css` for the compressed version.

Or use npm to install:

```shell
npm install --save mobi.css
```

You can also build Mobi.css to your project if you are using Sass.

```scss
@import 'mobi.css/src/mobi';
```

Be sure you have added `node-modules` to your Sass's [load_paths](http://stackoverflow.com/questions/6502313/sass-import-a-file-from-a-different-directory).

## Browser Support

<table>
  <thead>
    <tr>
      <th>iOS</th>
      <th>Android</th>
      <th>Others</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top"><strong>[√]</strong> Last 5 iOS versions</td>
      <td valign="top">
        <strong>[√]</strong> Last 5 Android versions<br/>
        <strong>[√]</strong> Last 5 ChromeAndroid versions<br/>
        <strong>[√]</strong> Last 5 UCAndroid versions (*)<br/>
        <strong>[√]</strong> Last 5 FirefoxAndroid versions (*)<br/>
        <strong>[√]</strong> Last 5 OperaMobile versions (*)<br/>
        <strong>[√]</strong> Last 5 OperaMini versions (*)<br/>
        <strong>[√]</strong> Last 5 Samsung versions (*)
      </td>
      <td valign="top">
        <strong>[√]</strong> Last 3 Chrome versions<br/>
        <strong>[√]</strong> Last 3 Firefox versions<br/>
        <strong>[√]</strong> Last 3 Safari versions<br/>
        <strong>[√]</strong> Last 3 Edge versions<br/>
        <strong>[√]</strong> Last 5 ExplorerMobile versions (*)
      </td>
    </tr>
  </tbody>
</table>

- Use [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure Mobi.css works on all major mobile devices
- Browsers query comes from [Browserslist](https://github.com/ai/browserslist)
- Browsers marked as (*) were not well tested, but they should work fine

## Contributing

Before contributing, please ensure you have `sass` and `scss-lint` installed. You can install them by running this:

```shell
gem install sass
gem install scss_lint
```

### Getting started

```shell
npm install
npm start
```

Open http://localhost:8000/

### Testing

```shell
npm test
```

### Travis CI

We use [Travis CI](https://travis-ci.org/xcatliu/mobi.css) as our continuous integration system.

- The [Homepage] will be generated automatically when new commits are pushed to master branch
- Pull request cannot be merged when Travis CI not pass

## License

All parts of Mobi.css are free to use and abuse under the [open-source MIT license](https://github.com/xcatliu/mobi.css/blob/master/LICENSE).

[Homepage]: http://getmobicss.com

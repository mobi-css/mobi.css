# Mobi.css

> A lightweight, flexible css framework that focus on mobile.

## Languages

English | [简体中文](zh-cn)

## Introduction

- Only 3.6kb after gzipped, less than Skeleton, Pure.css and Bootstrap v4, etc
- Heavy use of flexbox, super flexible, less than 10 lines of custom style in the official site
- Focus on mobile, show mobile pages in desktop with a sidebar on the left or right

## Getting started

You can download Mobi.css in [this page](https://github.com/xcatliu/mobi.css/releases), then use `dist/mobi.min.css` for the compressed version.

Or use [cdnjs](https://cdnjs.com/libraries/mobi.css):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mobi.css/1.1.0/mobi.min.css" />
```

Or use npm to install:

```shell
npm install --save mobi.css
```

You can also build Mobi.css to your project if you are using Sass:

```scss
@import 'mobi.css/src/mobi';
```

Be sure you have added `node_modules` to your Sass's [load_paths](http://stackoverflow.com/questions/6502313/sass-import-a-file-from-a-different-directory).

## Browser Support

### iOS

- [x] Last 5 iOS versions

### Android

- [x] Last 5 Android versions
- [x] Last 5 ChromeAndroid versions
- [x] Last 5 UCAndroid versions (\*)
- [x] Last 5 FirefoxAndroid versions (\*)
- [x] Last 5 OperaMobile versions (\*)
- [x] Last 5 OperaMini versions (\*)
- [x] Last 5 Samsung versions (\*)

### Others

- [x] Last 3 Chrome versions
- [x] Last 3 Firefox versions
- [x] Last 3 Safari versions
- [x] Last 3 Edge versions
- [x] Last 5 ExplorerMobile versions (\*)

### Note

- Use [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure Mobi.css works on all major mobile devices
- Browsers query comes from [Browserslist](https://github.com/ai/browserslist)
- Browsers marked as (\*) were not well tested, but they should work fine

## Who's using Mobi.css?

- [Hexo Theme Mobi.css](https://github.com/xcatliu/hexo-theme-mobi.css) | [Demo](http://blog.xcatliu.com/)
- [Hexo Theme mbxo](https://github.com/Alleysakura/hexo-theme-mbxo) | [Demo](https://alleysakura.github.io/hexo-theme-mbxo/)
- [solovyov.net: Alexander Solovyov](https://solovyov.net/)
- [note-md](https://github.com/hanxi/note-md) 一个专注浏览的个人笔记

[Tell me](https://github.com/xcatliu/mobi.css/issues/72) if you are using Mobi.css!

## [Buy me a coffee](https://github.com/xcatliu/buy-me-a-coffee)

## What's next

- [Documentations](docs): Design philosophy and tutorial
- [Reference](reference): All the Mobi.css styles in one page
- [Extensions](extensions): Plugins, themes, etc
- [GitHub](https://github.com/xcatliu/mobi.css): Open an issue, contributing to Mobi.css

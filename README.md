<p align="center">
  <a href="http://getmobicss.com/">
    <img width="256" alt="Mobi.css Logo" src="http://getmobicss.com/assets/img/mobi-logo-512.png"/>
  </a>
</p>

[![Build Status](https://img.shields.io/travis/mobi-css/mobi.css.svg?style=flat-square)](https://travis-ci.org/mobi-css/mobi.css) [![npm package](https://img.shields.io/npm/v/mobi.css.svg?style=flat-square)](https://www.npmjs.org/package/mobi.css) [![npm downloads](http://img.shields.io/npm/dm/mobi.css.svg?style=flat-square)](https://www.npmjs.org/package/mobi.css)

# [Mobi.css](http://getmobicss.com)

> A themeable, pluginable, mobile-first css framework

## Introduction

- Easy to create a theme with a set of global definitions
- Make css scalable with the plugin system
- Designed for mobile, also works awesome on other devices

## Getting Started

The easiest way to import Mobi.css is to use the CDN, just simply insert this to your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css" />
```

Also you can download Mobi.css in [this page](https://github.com/mobi-css/mobi.css/releases), then use `dist/mobi.min.css` for the compressed version.

Read our [docs](http://getmobicss.com) for information on the framework usage.

## Themes and Plugins

Themes and plugins are the core concepts in Mobi.css

To understand them, let me first introduce 3 design principles for themes and plugins:

1. Themes should be easy to create. Most of variables should be caculated by a few basic variables
2. A plugin should be compatible with any themes, that's say, a theme should works together with any plugins, even plugins that doesn't exist yet
3. Both themes and plugins should be easy to imported. It should be able to simply use standalone compressed css, or `@import` them in your project with sass preprocessor

To achieve such goals, we need to first define a super-complete and backward-compatible variables set. It should satisfy most scenario's requirements.

This is truly a difficult and challenging work. Lucky, on the restriction of some [design specification], we finally completed it, the [base theme](https://github.com/mobi-css/mobi-theme-base).

Now everything get's clear.

### Using a Theme

A theme should provide a standalone css for the lazy users who don't want to run any sass build script.

Let's see the [dark theme](https://github.com/mobi-css/mobi-theme-dark), you can simply insert this to your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi-theme-dark/dist/mobi-theme-dark.min.css" />
```

That's it, you can then use all of the features that Mobi.css provided.

Please note that the standalone version is a complete css framework, that's say, you DON'T need to insert both `mobi.min.css` and `mobi-theme-dark.min.css` to your `<head>`.

Also you can download the standalone version and use the downloaded css resource.

What about build your own themed Mobi.css? Please read [build your own] section.

### Using a Plugin

Using a plugin is as easy as using a theme.

Let's see the [tooltip plugin](https://github.com/mobi-css/mobi-plugin-tooltip), it's useless on mobile so we didn't put it in the [default plugins preset]. But you can simply insert this to your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi-plugin-tooltip/dist/mobi-plugin-tooltip.min.css" />
```

After inserted, please read the [docs for tooltip plugin](https://github.com/mobi-css/mobi-plugin-tooltip) to see usage.

Also you can download the standalone version and use the downloaded css resource.

**WARNING: The standalone version of plugins depend on the base theme, if you want to use other theme with plugins, you need to build your own. This issue will be resolved on Mobi.css v3, which contains css-variables feature**

## Build Your Own

Mobi.css use sass as the preprocessor, it's easy to build your own.

If you just want to do a little change, you can install Mobi.css via npm:

```shell
npm install mobi.css
```

Then in your scss file, you can prepend a variables scss file to override the variables in Mobi.css

```scss
@import 'variables_override';
@import 'mobi.css/src/mobi';
```

With our themes and plugins system, it's also super flexible to build a hole new Mobi.css

First install themes and plugins via npm:

```shell
npm install mobi-theme-dark
npm install mobi-plugin-reset
npm install mobi-plugin-layout
npm install mobi-plugin-tooltip
```

As an appointment, all the themes and plugins need to export their importable scss as `index.scss` in their root directory, so we can import them like this:

```scss
@import "mobi-theme-dark/index.scss";

@import "mobi-plugin-reset/index.scss";
@import "mobi-plugin-layout/index.scss";
@import "mobi-plugin-tooltip/index.scss";
```

Please be sure you have added `node_modules` to your Sass's [load_paths](http://stackoverflow.com/questions/6502313/sass-import-a-file-from-a-different-directory).

### Create a Theme

TBD

### Create a Plugin

TBD

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

- We use [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure Mobi.css works on all major devices
- Browsers query comes from [Browserslist](https://github.com/ai/browserslist)
- Browsers marked as (\*) were not well tested, but they should work fine

## Contributing

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

## Who's using Mobi.css?

- [Hexo Theme Mobi.css](https://github.com/xcatliu/hexo-theme-mobi.css)
- [Hexo Theme mbxo](https://github.com/Alleysakura/hexo-theme-mbxo)
- [solovyov.net: Alexander Solovyov](https://solovyov.net/)
- [About Me](https://github.com/xcatliu/xcatliu.github.io)
- [码字 md](https://github.com/xcatliu/mazimd)
- [simplemde-theme-base](https://github.com/xcatliu/simplemde-theme-base)
- [simplemde-theme-dark](https://github.com/xcatliu/simplemde-theme-dark)

[Tell me](https://github.com/mobi-css/mobi.css/issues/72) if you are using Mobi.css!

## Contributors

- Thanks [xueliang huang](https://github.com/hxlniada) for debugging and fixing macOS issues
- Thanks [Xuehua Cai](https://github.com/pixcai) for fixing deploy issues
- Thanks [Matt Bailey](https://github.com/breeze4) for fixing grammar issues
- Thanks [Eric Nolte](https://github.com/ETNOL) for fixing grammar issues
- Thanks [Robert Chang](https://github.com/cht8687) for fixing typo
- Thanks [David Kane](https://github.com/dkanejs) for fixing typo

## License

[MIT](https://github.com/mobi-css/mobi.css/blob/master/LICENSE)

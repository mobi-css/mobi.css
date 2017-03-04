<p align="center">
  <a href="http://getmobicss.com/">
    <img width="256" alt="Mobi.css Logo" src="http://getmobicss.com/assets/img/mobi-logo-512.png"/>
  </a>
</p>

[English](#en) | [简体中文](#zh-cn)

[![Build Status](https://img.shields.io/travis/mobi-css/mobi.css.svg?style=flat-square)](https://travis-ci.org/mobi-css/mobi.css) [![npm package](https://img.shields.io/npm/v/mobi.css.svg?style=flat-square)](https://www.npmjs.org/package/mobi.css) [![npm downloads](http://img.shields.io/npm/dm/mobi.css.svg?style=flat-square)](https://www.npmjs.org/package/mobi.css)

<a id="en"></a>

# [Mobi.css](http://getmobicss.com)

> A lightweight, flexible css framework that focus on mobile.

## Introduction

- Only 2.8kb after minified and gzipped, less than Skeleton, Pure.css and Bootstrap v4, etc
- Heavy use of flexbox, super flexible, less than 10 lines of custom style in the official site
- Focus on mobile, show mobile pages in desktop with a sidebar on the left or right

## Getting started

You can download Mobi.css in [this page](https://github.com/mobi-css/mobi.css/releases), then use `dist/mobi.min.css` for the compressed version.

Or simply insert this to your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi.css@1.2.0/dist/mobi.min.css" />
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

## Contributing

### Getting started

1. Clone the repo with `git clone https://github.com/xcatliu/mobi.css.git`

2. Run `npm install` in the root `mobi.css` folder

3. Run `npm start` to start the project

4. Open http://localhost:8000/

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

<a id="zh-cn"></a>

# [Mobi.css](http://getmobicss.com/zh-cn/)

> 轻量灵活的移动端 CSS 框架。

## 介绍

- 压缩后只有 4.6kb，比 Skeleton、Pure.css、Bootstrap 等所有 CSS 库都小
- 大量使用 Flexbox ，非常灵活，官方网站只有不到 10 行的自定义样式
- 专注于移动端，桌面端端相当于展示的还是移动端的页面，不过可以在左侧或右侧加上侧边栏

## 开始使用

你可以在[这个页面](https://github.com/mobi-css/mobi.css/releases)下载 Mobi.css，然后使用压缩后的版本：`dist/mobi.min.css`。

或者简单的将以下代码插入到 `<head>` 中：

```html
<link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css" />
```

或者使用 npm 安装：

```shell
npm install --save mobi.css
```

如果你用的是 Sass，那么也可以在自己的项目中构建 Mobi.css：

```scss
@import 'mobi.css/src/mobi';
```

注意你需要将 `node_modules` 添加到 Sass 的 [load_paths](http://stackoverflow.com/questions/6502313/sass-import-a-file-from-a-different-directory) 中。

## 支持的浏览器

### iOS

- [x] Last 5 iOS versions

### 安卓

- [x] Last 5 Android versions
- [x] Last 5 ChromeAndroid versions
- [x] Last 5 UCAndroid versions (\*)
- [x] Last 5 FirefoxAndroid versions (\*)
- [x] Last 5 OperaMobile versions (\*)
- [x] Last 5 OperaMini versions (\*)
- [x] Last 5 Samsung versions (\*)

### 其他浏览器

- [x] Last 3 Chrome versions
- [x] Last 3 Firefox versions
- [x] Last 3 Safari versions
- [x] Last 3 Edge versions
- [x] Last 5 ExplorerMobile versions (\*)

### 备注

- Mobi.css 使用 [Autoprefixer](https://github.com/postcss/autoprefixer) 来保证能兼容主流的移动端浏览器
- 浏览器查询语句来自于 [Browserslist](https://github.com/ai/browserslist)
- 标注为 (\*) 的浏览器可能没有很好的测试，但是应该能够正常工作

## 参与贡献

### 如何开始

```shell
npm install
npm start
```

打开 http://localhost:8000/

### 测试

```shell
npm test
```

## 谁在用 Mobi.css?

- [Hexo Theme Mobi.css](https://github.com/xcatliu/hexo-theme-mobi.css)
- [Hexo Theme mbxo](https://github.com/Alleysakura/hexo-theme-mbxo)
- [solovyov.net: Alexander Solovyov](https://solovyov.net/)
- [About Me](https://github.com/xcatliu/xcatliu.github.io)
- [码字 md](https://github.com/xcatliu/mazimd)
- [simplemde-theme-base](https://github.com/xcatliu/simplemde-theme-base)
- [simplemde-theme-dark](https://github.com/xcatliu/simplemde-theme-dark)

[告诉我](https://github.com/mobi-css/mobi.css/issues/72)你也在用 Mobi.css！

## 贡献者

- 感谢 [xueliang huang](https://github.com/hxlniada) 调试和修复 macOS 上的问题
- 感谢 [Xuehua Cai](https://github.com/pixcai) 修复部署的问题
- 感谢 [Matt Bailey](https://github.com/breeze4) 修复语法问题
- 感谢 [Eric Nolte](https://github.com/ETNOL) 修复语法问题
- 感谢 [Robert Chang](https://github.com/cht8687) 修复拼写错误
- 感谢 [David Kane](https://github.com/dkanejs) 修复拼写错误

## 开源协议

[MIT](https://github.com/mobi-css/mobi.css/blob/master/LICENSE)

# Mobi.css

> 轻量灵活的移动端 CSS 框架。

## 选择语言

[English](..) | 简体中文

## 介绍

- 压缩后只有 4.6kb，比 Skeleton、Pure.css、Bootstrap 等所有 CSS 库都小
- 大量使用 Flexbox ，非常灵活，官方网站只有不到 10 行的自定义样式
- 专注于移动端，桌面端端相当于展示的还是移动端的页面，不过可以在左侧或右侧加上侧边栏

## 开始使用

你可以在[这个页面](https://github.com/xcatliu/mobi.css/releases)下载 Mobi.css，然后使用压缩后的版本：`dist/mobi.min.css`。

或者使用 [cdnjs](https://cdnjs.com/libraries/mobi.css):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mobi.css/1.1.0/mobi.min.css" />
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

## 谁在用 Mobi.css?

- [Hexo Theme Mobi.css](https://github.com/xcatliu/hexo-theme-mobi.css) | [Demo](http://blog.xcatliu.com/)
- [Hexo Theme mbxo](https://github.com/Alleysakura/hexo-theme-mbxo) | [Demo](https://alleysakura.github.io/hexo-theme-mbxo/)
- [solovyov.net: Alexander Solovyov](https://solovyov.net/)
- [note-md](https://github.com/hanxi/note-md) 一个专注浏览的个人笔记

[告诉我](https://github.com/xcatliu/mobi.css/issues/72)你也在用 Mobi.css！

## [请我喝杯咖啡](https://github.com/xcatliu/buy-me-a-coffee)

## 下一步

- [文档](docs)：设计理念、使用教程
- [参考](reference)：一个页面展示所有 Mobi.css 的样式
- [扩展](extensions)：插件、主题和其他
- [GitHub](https://github.com/xcatliu/mobi.css)：反馈问题，参与贡献

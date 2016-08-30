# Mobi.css

> Mobi.css is a lightweight, flexible css library that focus on mobile.

- Homepage: http://getmobicss.com/

## Introduction

- Only 2.8kb after gzip, less than Skeleton, Pure.css and Bootstrap v4, etc.
- Heavy use of flexbox, super flexible, less than 10 lines of custom style in the [Homepage](http://getmobicss.com/).
- Focus on mobile, show mobile pages in desktop with a sidebar on the left or right.

## Documentation

- [Layout](http://getmobicss.com/#layout)
- [Grid System](http://getmobicss.com/#grid-system)
- [Typography](http://getmobicss.com/#typography)
- [Tables](http://getmobicss.com/#tables)
- [Forms](http://getmobicss.com/#forms)
- [Utilities](http://getmobicss.com/#utilities)
- [Indexes](http://getmobicss.com/#indexes)

Please checkout the [Homepage](http://getmobicss.com/) for more details.

## Downloads

You can download Mobi.css in [this page](https://github.com/xcatliu/mobi.css/releases).

Or use npm to install:

```shell
npm install --save mobi.css
```

You can also build Mobi.css to your project if you are using sass.

```scss
@import 'mobi.css/src/mobi';
```

Be sure you have added `node-modules` to your sass's [load_paths](http://stackoverflow.com/questions/6502313/sass-import-a-file-from-a-different-directory).

## Logo

Inspired by the logo of CSS 3.

![Mobi.css Logo](site/img/mobi-logo-512.png)

## Contribution

### Getting Started

```shell
npm install
npm start
```

Open http://localhost:8000/

### Testing

```shell
npm test
```

Be sure you have `scss-lint` installed. You can use `gem install scss-lint` to install it.

### License

MIT

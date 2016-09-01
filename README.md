<p style="text-align:center;">
  <a href="http://getmobicss.com/">
    <img alt="Mobi.css Logo" src="site/img/mobi-logo-512.png" style="width:256px;"/>
  </a>
</p>

# Mobi.css [![](https://img.shields.io/travis/xcatliu/mobi.css.svg?style=flat-square)](https://travis-ci.org/xcatliu/mobi.css) [![npm package](https://img.shields.io/npm/v/mobi.css.svg?style=flat-square)](https://www.npmjs.org/package/mobi.css) [![NPM downloads](http://img.shields.io/npm/dm/mobi.css.svg?style=flat-square)](https://npmjs.org/package/mobi.css)

> A lightweight, flexible css library that focus on mobile.

- Homepage: http://getmobicss.com/

## Introduction

- Only 2.8kb after gzipped, less than Skeleton, Pure.css and Bootstrap v4, etc.
- Heavy use of flexbox, super flexible, less than 10 lines of custom style in the [Homepage].
- Focus on mobile, show mobile pages in desktop with a sidebar on the left or right.

## Documentation

- [Layout](http://getmobicss.com/#layout)
- [Grid System](http://getmobicss.com/#grid-system)
- [Typography](http://getmobicss.com/#typography)
- [Tables](http://getmobicss.com/#tables)
- [Forms](http://getmobicss.com/#forms)
- [Utilities](http://getmobicss.com/#utilities)

Please checkout the [Homepage] for more details.

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

## Contributing

Before contributing, please ensure you have `sass` and `scss-lint` installed. You can install them by running this:

```shell
gem install sass
gem install scss-lint
```

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

### Travis CI

We use [Travis CI](https://travis-ci.org/xcatliu/mobi.css) as our continuous integration system.

- The [Homepage] will be generated automatically when new commits are pushed to master branch
- Pull request cannot be merged when Travis CI not pass

## License

MIT

[Homepage]: http://getmobicss.com

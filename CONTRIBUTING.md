# Contributing

## Developing

With the awesome [PostCSS](http://postcss.org/) and [cssnext](http://cssnext.io/), we can write code in the future's CSS syntax.

Because Mobi.css is made of plugins, we use [Lerna](https://github.com/lerna/lerna) to manage mulitple packages.

### Setup

```sh
git clone https://github.com/mobi-css/mobi.css
cd mobi.css
npm install
npm run bootstrap
```

### Build

```sh
npm run build
```

### Test

```sh
npm test
```

### Publish

First please install lerna globally.

```sh
npm install --global lerna
```

To publish a new version is a little complicated. We need to prepend the version metadata to each generated dist file before adding a git tag and publishing to npm.

```sh
# Update all packages's version without execute any git or npm command
lerna publish --repo-version=<version> --skip-git --skip-npm
# Next do a full build
npm run build
git add :/
# The final step is to publish all packages via lerna publish command
lerna publish --repo-version=<version>
```

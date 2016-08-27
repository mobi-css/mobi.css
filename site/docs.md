# Mobi.css

> Mobi.css is a lightweight, flexible css library that focus on mobile.

<div class="row section site-principles">
  <div class="col text-center">
    <i class="fa fa-leaf" aria-hidden="true"></i>
  </div>
  <div class="col text-center">
    <i class="fa fa-cogs" aria-hidden="true"></i>
  </div>
  <div class="col text-center">
    <i class="fa fa-mobile" aria-hidden="true"></i>
  </div>
</div>

## Layout

Mobi.css provides two kinds of containers, `container` and `container-side`, as well as a simple but flexible grid system.

### `container`

A `container` contains all of your content, one page should have only one `container`. In most cases, `container` is the child of `body`.

On a mobile device (with width less than 768px), `container` will fill entire width of screen.

Otherwise, `container` will have a static width and aligned to the center of the screen. So it won't break your design for mobile, Looks like you are viewing mobile pages on desktop.

<div class="paragraph site-example">
  <img alt="layout" src="img/layout.jpg"/>
</div>

```html
<body>
  <div class="container">
    <h1>Mobi.css</h1>
  </div>
</body>
```

### `container-side`

`container-side` is designed for additional messages which are not valuable or useful on mobile, such as *Scan to view on mobile* or *Go to top*.

So `container-side` **will never be seen** on a mobile device.

Otherwise, `container-side` will land beside the `container`, left or right depends on you.

Of course, you should use only one `container-side`, and use it before or after a `container`.

<div class="paragraph site-example">
  <img alt="layout-with-side" src="img/layout-with-side.jpg"/>
</div>

```html
<body>
  <div class="container">
    <h1>Mobi.css</h1>
  </div>
  <div class="container-side">
    <p>Scan to view on mobile</p>
    <img src="path/to/qrcode.png"/>
  </div>
</body>
```

### Grid System

Mobile doesn't need such a complicate 12# grid system, Mobi.css provides a simpler but flexible grid system.

First of all, you can create a `row` which contain several `col`s, in this cases, `row`'s width is divided equally between `col`s.

<div class="paragraph site-example site-row-example">
  <div class="row">
    <div class="col">Lightweight</div>
    <div class="col">Flexible</div>
    <div class="col">Focus on Mobile</div>
  </div>
  <div class="row">
    <div class="col">青龙</div>
    <div class="col">白虎</div>
    <div class="col">朱雀</div>
    <div class="col">玄武</div>
  </div>
</div>

```html
<div class="row">
  <div class="col">Lightweight</div>
  <div class="col">Flexible</div>
  <div class="col">Focus on Mobile</div>
</div>
<div class="row">
  <div class="col">青龙</div>
  <div class="col">白虎</div>
  <div class="col">朱雀</div>
  <div class="col">玄武</div>
</div>
```

Secondly, you can use `rol-half`, `rol-third`, `rol-quarter` or `rol-remain` to achieve a maximum 4# grid.

<div class="paragraph site-example site-row-example">
  <div class="row">
    <div class="col-half">.col-half</div>
    <div class="col-remain">.col-remain</div>
  </div>
  <div class="row">
    <div class="col-third">.col-third</div>
    <div class="col-remain">.col-remain</div>
  </div>
  <div class="row">
    <div class="col-quarter">.col-quarter</div>
    <div class="col-remain">.col-remain</div>
  </div>
  <div class="row">
    <div class="col-remain">.col-remain</div>
    <div class="col-third">.col-third</div>
  </div>
  <div class="row">
    <div class="col-quarter">.col-quarter</div>
    <div class="col-half">.col-half</div>
    <div class="col-quarter">.col-quarter</div>
  </div>
</div>

```html
<div class="row">
  <div class="col-half">.col-half</div>
  <div class="col-remain">.col-remain</div>
</div>
<div class="row">
  <div class="col-third">.col-third</div>
  <div class="col-remain">.col-remain</div>
</div>
<div class="row">
  <div class="col-quarter">.col-quarter</div>
  <div class="col-remain">.col-remain</div>
</div>
<div class="row">
  <div class="col-remain">.col-remain</div>
  <div class="col-third">.col-third</div>
</div>
<div class="row">
  <div class="col-quarter">.col-quarter</div>
  <div class="col-half">.col-half</div>
  <div class="col-remain">.col-remain</div>
</div>
```

### Margin Top Only

Nearly all margins in Mobi.css have a `0` value for `margin-bottom`. Instead, Mobi.css use `margin-top` to make contents flow clearly.

That do make sense, since it's each section's responsibility to determine how long should it margin to top.

For example, `h1` ~ `h6` have a length of `32px` margin to top, in the meantime, `p`, `ul`, `form` have a length of `16px` margin to top.

Mobi.css also provides three classes for easily manually override the length to margin to top, they are `section`, `paragraph` and `no-margin-top`, the length of `margin-top` are `32px`, `16px` and `0`.

<div class="paragraph site-example">
  <p class="no-margin-top">.no-margin-top</p>
  <section class="section">.section</section>
  <div class="paragraph">.paragraph</div>
</div>

```html
<p class="no-margin-top">.no-margin-top</p>
<section class="section">.section</section>
<div class="paragraph">.paragraph</div>
```

## Typography

Mobi.css is designed for content based website. It has a pure but pleasant experience for reading.

Most of styles for Typography are reset and do not need any classnames.

This site itself is a real example. You guys are smart, so for this part it's not necessary to write examples anymore.

## Tables

Although it's not a good idea to show a table to your customers, sometimes we do need it.

However, tables always renders out of screen, especially in small mobiles. So you should probably need a `scrollable` area to place your table.

<div class="paragraph site-example">
  <div class="scrollable">
    <table class="no-margin-top">
      <thead>
        <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="http://getmobicss.com/">Mobi.css</a></td>
          <td><a href="https://github.com/xcatliu">xcatliu</a></td>
          <td>Sass</td>
          <td>?</td>
          <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
          <td><a href="https://github.com/xcatliu/mobi.css">Mobi.css GitHub</a></td>
        </tr>
        <tr>
          <td><a href="http://getskeleton.com/">Skeleton</a></td>
          <td><a href="https://github.com/dhg">Dave Gamache</a></td>
          <td>Css</td>
          <td>3.2kb</td>
          <td><i class="fa fa-star" aria-hidden="true"></i></td>
          <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
        </tr>
        <tr>
          <td><a href="http://purecss.io/">Pure.css</a></td>
          <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
          <td>Css</td>
          <td>4.6kb</td>
          <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
          <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
        </tr>
        <tr>
          <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
          <td><a href="https://github.com/twbs">Twitter</a></td>
          <td>Sass, JavaScript</td>
          <td>20.1kb</td>
          <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
          <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
        </tr>
        <tr>
          <td><s>Ratchet</s></td>
          <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>This project is dying.</s></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="scrollable">
  <table class="no-margin-top">
    <thead>
      <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="http://getmobicss.com/">Mobi.css</a></td>
        <td><a href="https://github.com/xcatliu">xcatliu</a></td>
        <td>Sass</td>
        <td>?</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
        <td><a href="https://github.com/xcatliu/mobi.css">Mobi.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://getskeleton.com/">Skeleton</a></td>
        <td><a href="https://github.com/dhg">Dave Gamache</a></td>
        <td>Css</td>
        <td>3.2kb</td>
        <td><i class="fa fa-star" aria-hidden="true"></i></td>
        <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://purecss.io/">Pure.css</a></td>
        <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
        <td>Css</td>
        <td>4.6kb</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
        <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
        <td><a href="https://github.com/twbs">Twitter</a></td>
        <td>Sass, JavaScript</td>
        <td>20.1kb</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
        <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
      </tr>
      <tr>
        <td><s>Ratchet</s></td>
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>This project is dying.</s></a></td>
      </tr>
    </tbody>
  </table>
</div>
```

## Forms

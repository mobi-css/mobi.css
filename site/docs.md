## Layout

Mobi.css provides two kinds of containers, `container` and `container-side`.

### `container`

A `container` contains all of your content, one page should have only one `container`, usually is the child of `body`.

On a mobile device (with width less than 768px), `container` will fill entire width of screen.

Otherwise, `container` will have a static width and aligned to the center of the screen. So it won't break your design for mobile, just like you are viewing mobile pages on desktop.

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

Mobile doesn't need such a complicated 12# grid system, Mobi.css provides only two classes for grid, `row` and `col`.

A `row` contain several `col`s, in most cases, `row`'s width is divided equally between `col`s.

<div class="paragraph site-example site-row-example">
  <div class="row">
    <div class="col">
      <p class="no-margin-top">Light</p>
    </div>
    <div class="col">
      <p class="no-margin-top">Pluginable</p>
    </div>
    <div class="col">
      <p class="no-margin-top">Focus on Mobile</p>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col">
    <p class="no-margin-top">Light</p>
  </div>
  <div class="col">
    <p class="no-margin-top">Pluginable</p>
  </div>
  <div class="col">
    <p class="no-margin-top">Focus on Mobile</p>
  </div>
</div>
```

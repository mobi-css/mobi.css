<h1 class="row mt-15" id="mobi-css">
  <div class="col-custom" style="padding-right:0">
    <img width="32px" src="img/mobi-logo-512.png" alt="mobi-logo-32" style="position:relative; top:6px;"/>
  </div>
  <div class="col">Mobi.css</div>
  <div class="col-custom">
    <a href="https://github.com/xcatliu/mobi.css/" style="color:#333">
      <i class="fa fa-github"></i>
    </a>
  </div>
</h1>

> A lightweight, flexible css library that focus on mobile.

<div class="row mt-30">
  <div class="col text-center">
    <i class="fa fa-leaf" style="font-size:6rem"></i>
  </div>
  <div class="col text-center">
    <i class="fa fa-cogs" style="font-size:6rem"></i>
  </div>
  <div class="col text-center">
    <i class="fa fa-mobile" style="font-size:6rem; transform:scale(1.35);"></i>
  </div>
</div>

## Introduction

- Only 2.8kb after gzip, less than Skeleton, Pure.css and Bootstrap v4, etc.
- Heavy use of flexbox, super flexible, less than 10 lines of custom style in the [Homepage](http://getmobicss.com/).
- Focus on mobile, show mobile pages in desktop with a sidebar on the left or right.

## Download

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

## Table of Content

- [Layout](#layout)
- [Grid System](#grid-system)
- [Typography](#typography)
- [Tables](#tables)
- [Forms](#forms)
- [Utilities](#utilities)
- [Indexes](#indexes)

## Layout

Mobi.css provides two kinds of containers, `container` and `container-side`, as well as a simple but flexible grid system.

### `container`

A `container` contains all of your contents, one page should have only one `container`. In most cases, `container` is the child of `body`.

On a mobile device (with width less than 768px), `container` will fill entire width of screen.

Otherwise, `container` will have a fixed width and aligned to the center of the screen. So it won't break your design for mobile. Looks like you are viewing mobile pages on desktop.

![layout](img/layout.jpg)

```html
<body>
  <div class="container">
    <h1>Mobi.css</h1>
  </div>
</body>
```

### `container-side`

`container-side` is designed for additional messages which are not valuable or useful for mobile, such as *Scan to view on mobile* or *Go to top*.

So `container-side` **will never be seen** on a mobile device.

Otherwise, `container-side` will land beside the `container`, left or right depends on you.

Of course, you should use only one `container-side`, and use it before or after a `container`.

![layout-with-side](img/layout-with-side.jpg)

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

First of all, you can create a `row` which contain several `col`s, in this case, `row`'s width is divided equally between `col`s.

<div class="row mt-15">
  <div class="col alert-success">Lightweight</div>
  <div class="col alert-success">Flexible</div>
  <div class="col alert-success">Focus on Mobile</div>
</div>
<div class="row">
  <div class="col alert-success">青龙</div>
  <div class="col alert-success">白虎</div>
  <div class="col alert-success">朱雀</div>
  <div class="col alert-success">玄武</div>
</div>

```html
<div class="row mt-15">
  <div class="col alert-success">Lightweight</div>
  <div class="col alert-success">Flexible</div>
  <div class="col alert-success">Focus on Mobile</div>
</div>
<div class="row">
  <div class="col alert-success">青龙</div>
  <div class="col alert-success">白虎</div>
  <div class="col alert-success">朱雀</div>
  <div class="col alert-success">玄武</div>
</div>
```

Secondly, you can use `col-1-2`, `col-1-3` and `col-1-4` to achieve a maximum 4# grid.

<div class="row mt-15">
  <div class="col-1-2 alert-success">.col-1-2</div>
  <div class="col alert-success">.col</div>
</div>
<div class="row">
  <div class="col-1-3 alert-success">.col-1-3</div>
  <div class="col alert-success">.col</div>
</div>
<div class="row">
  <div class="col-1-4 alert-success">.col-1-4</div>
  <div class="col alert-success">.col</div>
</div>
<div class="row">
  <div class="col alert-success">.col</div>
  <div class="col-1-3 alert-success">.col-1-3</div>
</div>
<div class="row">
  <div class="col-1-4 alert-success">.col-1-4</div>
  <div class="col-1-2 alert-success">.col-1-2</div>
  <div class="col-1-4 alert-success">.col-1-4</div>
</div>

```html
<div class="row mt-15">
  <div class="col-1-2 alert-success">.col-1-2</div>
  <div class="col alert-success">.col</div>
</div>
<div class="row">
  <div class="col-1-3 alert-success">.col-1-3</div>
  <div class="col alert-success">.col</div>
</div>
<div class="row">
  <div class="col-1-4 alert-success">.col-1-4</div>
  <div class="col alert-success">.col</div>
</div>
<div class="row">
  <div class="col alert-success">.col</div>
  <div class="col-1-3 alert-success">.col-1-3</div>
</div>
<div class="row">
  <div class="col-1-4 alert-success">.col-1-4</div>
  <div class="col-1-2 alert-success">.col-1-2</div>
  <div class="col-1-4 alert-success">.col-1-4</div>
</div>
```

### Use Flexbox for Layout

You probably know Mobi.css can use flexbox for layout, and so should you! [Now it's safe to use flexbox on all mobile browsers](http://caniuse.com/#feat=flexbox).

Here is an example for how you can use `col-custom` and flexbox for a typical fixed-fluid layout.

<div class="row mt-15">
  <div class="col-custom" style="flex-basis:70px"><i class="fa fa-github" style="font-size:56px"></i></div>
  <div class="col alert-success">Hi, xcatliu, do you know what is Mobi.css?</div>
  <div class="col-custom" style="flex-basis:30px"></div>
</div>
<div class="row mt-15">
  <div class="col-custom" style="flex-basis:30px"></div>
  <div class="col alert-success text-right">Sure I know, Mobi.css is a lightweight, flexible css library that focus on mobile.</div>
  <div class="col-custom" style="flex-basis:70px"><img alt="xcatliu" width="48px" src="img/xcatliu.png"/></div>
</div>

```html
<div class="row mt-15">
  <div class="col-custom" style="flex-basis:70px"><i class="fa fa-github" style="font-size:56px"></i></div>
  <div class="col alert-success">Hi, xcatliu, do you know what is Mobi.css?</div>
  <div class="col-custom" style="flex-basis:30px"></div>
</div>
<div class="row mt-15">
  <div class="col-custom" style="flex-basis:30px"></div>
  <div class="col alert-success text-right">Sure I know, Mobi.css is a lightweight, flexible css library that focus on mobile.</div>
  <div class="col-custom" style="flex-basis:70px"><img alt="xcatliu" width="48px" src="img/xcatliu.png"/></div>
</div>
```

### Margin Top Only

Nearly all margins in Mobi.css have a `0` value for `margin-bottom`. Instead, Mobi.css use `margin-top` to make contents flow clearly.

That do make sense, since it's each section's responsibility to determine the length it should margin to top.

For example, `h1` ~ `h6` have a length of `30px` margin to top, in the meantime, `p`, `ul`, `input` have a length of `15px` margin to top.

Mobi.css also provides three classes for easily manually override the length to margin to top, they are `mt-30`, `mt-15` and `mt-0`, the length of `margin-top` are `30px`, `15px` and `0`.

<section class="mt-15 alert-success">section.mt-15</section>
<p class="mt-0 alert-success">p.mt-0</p>
<section class="mt-30 alert-success">section.mt-30</section>

```html
<section class="mt-15 alert-success">section.mt-15</section>
<p class="mt-0 alert-success">p.mt-0</p>
<section class="mt-30 alert-success">section.mt-30</section>
```

## Typography

Mobi.css is designed for content based website. It has a pure but pleasant experience for reading.

Most of styles for typography are reset and do not need any classes more.

This site itself is a real example. You guys are smart, so for this part it's not necessary to write examples anymore.

## Tables

Although tables is not widely used in mobile, sometimes you may need it.

However, tables always renders out of screen, especially in small mobiles. So you should probably need a `scroll-view` area to place your table.

<div class="scroll-view">
  <table>
    <thead>
      <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="http://getmobicss.com/">Mobi.css</a></td>
        <td><a href="https://github.com/xcatliu">xcatliu</a></td>
        <td>Sass</td>
        <td>2.8kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/xcatliu/mobi.css">Mobi.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://getskeleton.com/">Skeleton</a></td>
        <td><a href="https://github.com/dhg">Dave Gamache</a></td>
        <td>Css</td>
        <td>3.2kb</td>
        <td><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://purecss.io/">Pure.css</a></td>
        <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
        <td>Css</td>
        <td>4.6kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
        <td><a href="https://github.com/twbs">Twitter</a></td>
        <td>Sass, JavaScript</td>
        <td>20.1kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://goratchet.com/"><s>Ratchet</s></a></td>
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>This project is dying.</s></a></td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="scroll-view">
  <table>
    <thead>
      <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="http://getmobicss.com/">Mobi.css</a></td>
        <td><a href="https://github.com/xcatliu">xcatliu</a></td>
        <td>Sass</td>
        <td>2.8kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/xcatliu/mobi.css">Mobi.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://getskeleton.com/">Skeleton</a></td>
        <td><a href="https://github.com/dhg">Dave Gamache</a></td>
        <td>Css</td>
        <td>3.2kb</td>
        <td><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://purecss.io/">Pure.css</a></td>
        <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
        <td>Css</td>
        <td>4.6kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
        <td><a href="https://github.com/twbs">Twitter</a></td>
        <td>Sass, JavaScript</td>
        <td>20.1kb</td>
        <td><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></td>
        <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://goratchet.com/"><s>Ratchet</s></a></td>
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>This project is dying.</s></a></td>
      </tr>
    </tbody>
  </table>
</div>
```

## Forms

Mobi.css believes that on mobile devices, **each row should have only one input**.

### Basic Forms

<form action="#basic-forms">
  <input type="text" placeholder="Name"/>
  <input type="password" placeholder="Password"/>
  <label><input type="checkbox"/>I agree to terms.</label>
  <input type="submit" value="Sign Up Now"/>
</form>

```html
<form action="#basic-forms">
  <input type="text" placeholder="Name"/>
  <input type="email" placeholder="Email"/>
  <label><input type="checkbox"/>I agree to terms.</label>
  <input type="submit" value="Sign Up Now"/>
</form>
```

### Complicate Forms

If you want to have multiple inputs in one row, you should use grid system.

<form action="#complicate-forms">
  <div class="row">
    <label class="col-custom label text-right" for="multiple-inputs-name" style="flex-basis:90px">Name: </label>
    <div class="col"><input type="text" id="multiple-inputs-name" placeholder="xcatliu"/></div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" style="flex-basis:90px">Gender: </label>
    <div class="col"><label>
      <input type="radio" name="multiple-inputs-gender" value="Male"/>Male
    </label></div>
    <div class="col"><label>
      <input type="radio" name="multiple-inputs-gender" value="Female"/>Female
    </label></div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" style="flex-basis:90px">Country: </label>
    <div class="col">
      <select>
        <option disabled selected value> -- select -- </option>
        <option>China</option>
        <option>USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" style="flex-basis:90px">Avatar:</label>
    <div class="col">
      <input type="file"/>
    </div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" for="multiple-inputs-bio" style="flex-basis:90px">Bio: </label>
    <div class="col">
      <textarea id="multiple-inputs-bio" placeholder="Who are you?"></textarea>
    </div>
  </div>
  <div class="row">
    <label class="col-custom" style="flex-basis:90px"></label>
    <div class="col-custom" style="flex-basis:90px">
      <button type="reset" class="btn-danger">Reset</button>
    </div>
    <div class="col"></div>
    <div class="col-custom" style="flex-basis:100px">
      <button type="submit" class="btn-primary">Submit</button>
    </div>
  </div>
</form>

```html
<form action="#complicate-forms">
  <div class="row">
    <label class="col-custom label text-right" for="multiple-inputs-name" style="flex-basis:90px">Name: </label>
    <div class="col"><input type="text" id="multiple-inputs-name" placeholder="xcatliu"/></div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" style="flex-basis:90px">Gender: </label>
    <div class="col"><label>
      <input type="radio" name="multiple-inputs-gender" value="Male"/>Male
    </label></div>
    <div class="col"><label>
      <input type="radio" name="multiple-inputs-gender" value="Female"/>Female
    </label></div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" style="flex-basis:90px">Country: </label>
    <div class="col">
      <select>
        <option disabled selected value> -- select -- </option>
        <option>China</option>
        <option>USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" style="flex-basis:90px">Avatar:</label>
    <div class="col">
      <input type="file"/>
    </div>
  </div>
  <div class="row">
    <label class="col-custom label text-right" for="multiple-inputs-bio" style="flex-basis:90px">Bio: </label>
    <div class="col">
      <textarea id="multiple-inputs-bio" placeholder="Who are you?"></textarea>
    </div>
  </div>
  <div class="row">
    <label class="col-custom" style="flex-basis:90px"></label>
    <div class="col-custom" style="flex-basis:90px">
      <button type="reset" class="btn-danger">Reset</button>
    </div>
    <div class="col"></div>
    <div class="col-custom" style="flex-basis:100px">
      <button type="submit" class="btn-primary">Submit</button>
    </div>
  </div>
</form>
```

A warn tip, when you are using `<label>` element, you can add `class="label"` if it's a text label, but don't add the class if it's the parent of `checkbox` or `radio`.

### Disabled Forms

<form action="#disabled-forms">
  <input type="text" placeholder="Disabled Input" disabled/>
  <div class="row">
    <div class="col"><input type="button" value="Disabled" disabled/></div>
    <div class="col"><input type="button" class="btn-primary" value="Disabled" disabled/></div>
    <div class="col"><input type="button" class="btn-danger" value="Disabled" disabled/></div>
  </div>
</form>

```html
<form action="#disabled-forms">
  <input type="text" placeholder="Disabled Input" disabled/>
  <div class="row">
    <div class="col"><input type="button" value="Disabled" disabled/></div>
    <div class="col"><input type="button" class="btn-primary" value="Disabled" disabled/></div>
    <div class="col"><input type="button" class="btn-danger" value="Disabled" disabled/></div>
  </div>
</form>
```

## Utilities

Mobi.css also provides some useful utilities, like layout `mt-30`, `text-left`, `scroll-view`, etc.

### Layout Utilities

As mentioned in [Margin Top Only](#margin-top-only) section, Mobi.css provides three classes for override the length to margin to top, they are `mt-30`, `mt-15` and `mt-0`.

For more details, please read [Margin Top Only](#margin-top-only) section.

### Align Utilities

You can use Mobi.css to easily align contents.

#### Align Inline Contents

<div class="text-left alert-success mt-15">Mobi.css is awesome!</div>
<div class="text-center alert-success">Awesome!</div>
<div class="text-right alert-success">Some!</div>

```html
<div class="text-left alert-success mt-15">Mobi.css is awesome!</div>
<div class="text-center alert-success">Awesome!</div>
<div class="text-right alert-success">Some!</div>
```

### `scroll-view`

Mobile devices usually have small width, so it's very useful to use a `scroll-view` class.

Mobi.css optimize `scroll-view` to make it smoothly to scroll.

#### Scroll Horizontal

<div class="mt-15 scroll-view">
  <div style="width:1024px">
    <i class="fa fa-adjust" style="font-size:6rem"></i>
    <i class="fa fa-anchor" style="font-size:6rem"></i>
    <i class="fa fa-archive" style="font-size:6rem"></i>
    <i class="fa fa-area-chart" style="font-size:6rem"></i>
    <i class="fa fa-arrows" style="font-size:6rem"></i>
    <i class="fa fa-asterisk" style="font-size:6rem"></i>
    <i class="fa fa-at" style="font-size:6rem"></i>
    <i class="fa fa-automobile" style="font-size:6rem"></i>
    <i class="fa fa-ban" style="font-size:6rem"></i>
    <i class="fa fa-bank" style="font-size:6rem"></i>
    <i class="fa fa-bar-chart" style="font-size:6rem"></i>
    <i class="fa fa-battery-0" style="font-size:6rem"></i>
    <i class="fa fa-beer" style="font-size:6rem"></i>
    <i class="fa fa-bell" style="font-size:6rem"></i>
    <i class="fa fa-bicycle" style="font-size:6rem"></i>
  </div>
</div>

```html
<div class="mt-15 scroll-view">
  <div style="width:1024px">
    <i class="fa fa-adjust" style="font-size:6rem"></i>
    <i class="fa fa-anchor" style="font-size:6rem"></i>
    <i class="fa fa-archive" style="font-size:6rem"></i>
    <i class="fa fa-area-chart" style="font-size:6rem"></i>
    <i class="fa fa-arrows" style="font-size:6rem"></i>
    <i class="fa fa-asterisk" style="font-size:6rem"></i>
    <i class="fa fa-at" style="font-size:6rem"></i>
    <i class="fa fa-automobile" style="font-size:6rem"></i>
    <i class="fa fa-ban" style="font-size:6rem"></i>
    <i class="fa fa-bank" style="font-size:6rem"></i>
    <i class="fa fa-bar-chart" style="font-size:6rem"></i>
    <i class="fa fa-battery-0" style="font-size:6rem"></i>
    <i class="fa fa-beer" style="font-size:6rem"></i>
    <i class="fa fa-bell" style="font-size:6rem"></i>
    <i class="fa fa-bicycle" style="font-size:6rem"></i>
  </div>
</div>
```

#### Scroll Vertical

This is pretty easy, just set the `max-width` of `scroll-view`.

<div class="mt-15 scroll-view" style="max-height:300px">
  <h2>狂人日记</h2>
  <h3>一</h3>
  <p>今天晚上，很好的月光。</p>
  <p>我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？</p>
  <p>我怕得有理。</p>
  <h3>二</h3>
  <p>今天全没月光，我知道不妙。早上小心出门，赵贵翁的眼色便怪：似乎怕我，似乎想害我。还有七八个人，交头接耳的议论我，张着嘴，对我笑了一笑；我便从头直冷到脚根，晓得他们布置，都已妥当了。</p>
  <p>我可不怕，仍旧走我的路。前面一伙小孩子，也在那里议论我；眼色也同赵贵翁一样，脸色也铁青。我想我同小孩子有什么仇，他也这样。忍不住大声说，“你告诉我！”他们可就跑了。</p>
  <p>我想：我同赵贵翁有什么仇，同路上的人又有什么仇；只有廿年以前，把古久先生的陈年流水簿子，踹了一脚，古久先生很不高兴。赵贵翁虽然不认识他，一定也听到风声，代抱不平；约定路上的人，同我作冤对。但是小孩子呢？那时候，他们还没有出世，何以今天也睁着怪眼睛，似乎怕我，似乎想害我。这真教我怕，教我纳罕而且伤心。</p>
  <p>我明白了。这是他们娘老子教的！</p>
</div>

```html
<div class="mt-15 scroll-view" style="max-height:300px">
  <h2>狂人日记</h2>
  <h3>一</h3>
  <p>今天晚上，很好的月光。</p>
  <p>我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？</p>
  <p>我怕得有理。</p>
  <h3>二</h3>
  <p>今天全没月光，我知道不妙。早上小心出门，赵贵翁的眼色便怪：似乎怕我，似乎想害我。还有七八个人，交头接耳的议论我，张着嘴，对我笑了一笑；我便从头直冷到脚根，晓得他们布置，都已妥当了。</p>
  <p>我可不怕，仍旧走我的路。前面一伙小孩子，也在那里议论我；眼色也同赵贵翁一样，脸色也铁青。我想我同小孩子有什么仇，他也这样。忍不住大声说，“你告诉我！”他们可就跑了。</p>
  <p>我想：我同赵贵翁有什么仇，同路上的人又有什么仇；只有廿年以前，把古久先生的陈年流水簿子⑶，踹了一脚，古久先生很不高兴。赵贵翁虽然不认识他，一定也听到风声，代抱不平；约定路上的人，同我作冤对。但是小孩子呢？那时候，他们还没有出世，何以今天也睁着怪眼睛，似乎怕我，似乎想害我。这真教我怕，教我纳罕而且伤心。</p>
  <p>我明白了。这是他们娘老子教的！</p>
</div>
```

## Indexes

The indexes of all available classes.

- [`btn-danger`](#complicate-forms)
- [`btn-primary`](#complicate-forms)
- [`col`](#grid-system)
- [`col-custom`](#use-flexbox-for-layout)
- [`col-1-2`](#grid-system)
- [`col-1-4`](#grid-system)
- [`col-1-3`](#grid-system)
- [`container`](#-container)
- [`container-side`](#-container-side)
- [`label`](#complicate-forms)
- [`mt-0`](#margin-top-only)
- [`mt-15`](#margin-top-only)
- [`mt-30`](#margin-top-only)
- [`row`](#grid-system)
- [`scroll-view`](#-scroll-view-)
- [`text-center`](#align-inline-contents)
- [`text-left`](#align-inline-contents)
- [`text-right`](#align-inline-contents)

---

<p style="color:#777;font-size:1.4rem">Designed and built with <i class="fa fa-heart"></i> by <a href="https://github.com/xcatliu/">@xcatliu</a>.</p>

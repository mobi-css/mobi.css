<style>
  .site-alert-success {
    background-color: hsla(120, 50%, 50%, .15);
    border: 1px solid hsla(120, 50%, 50%, .2);
    padding: 15px;
  }
</style>

# Documentations

- [Layout](#Layout)
- [Grid system](#Grid-system)
- [Typography](#Typography)
- [Tables](#Tables)
- [Forms](#Forms)
- [Utilities](#Utilities)

## Layout

Mobi.css includes a simple but flexible system for laying out your project, including `container`, grid system, flex utilities, etc.

### `container`

A `container` contains all of your contents. One page should have only one `container`.

On a mobile device (with width less than 768px), `container` will fill the entire width of the screen.

Otherwise, `container` will have a fixed width and align to the center of the screen. It won't break your design for mobile. Instead, it looks like you are viewing mobile pages on desktop.

![layout](../img/layout.jpg)

```html
<body>
  <div class="flex-center">
    <div class="container">
      <h1>Mobi.css</h1>
    </div>
  </div>
</body>
```

You may want to say "Oh that's too complicated! Why should I need to add two `<div>`s to achieve a simple `container`?"

Actually, `flex-center` is used as a wrapper to ensure `container` aligns to the center of the screen. So if you don't add this wrapper, mobile users will not feel any difference.

Also, you can add `flex-center` to `<body>` and it will work, too. However, that is not recommended. Even though you don't append any other elements to `<body>`, third-party libraries may do so. It might be hard for them to set their position in a flexbox.

What if we want to add a sidebar for the desktop version of your website, useful to show some additional, non-mobile messages, such as *Scan to view on mobile* or *Go to top*)? Here is a solution:

![layout-with-side](../img/layout-with-side.jpg)

```html
<body>
  <div class="flex-center">
    <div class="container">
      <h1>Mobi.css</h1>
    </div>
    <div class="hide-on-mobile" style="padding:0 30px;">
      <p>Scan to view on mobile</p>
      <img src="path/to/qrcode.png"/>
    </div>
  </div>
</body>
```

As you can see, `hide-on-mobile` **will never be seen** on a mobile device.

### Grid system

Mobile doesn't need a complex 12# grid system. So Mobi.css provides a simple but flexible grid system.

First of all, you can create a `row` which contains several `col`s. In this case, `row`'s width is divided equally between `col`s.

{% raw %}
<div class="row mt-15">
  <div class="col site-alert-success">Lightweight</div>
  <div class="col site-alert-success">Flexible</div>
  <div class="col site-alert-success">Focus on Mobile</div>
</div>
<div class="row">
  <div class="col site-alert-success">青龙</div>
  <div class="col site-alert-success">白虎</div>
  <div class="col site-alert-success">朱雀</div>
  <div class="col site-alert-success">玄武</div>
</div>
{% endraw %}

```html
<div class="row mt-15">
  <div class="col site-alert-success">Lightweight</div>
  <div class="col site-alert-success">Flexible</div>
  <div class="col site-alert-success">Focus on Mobile</div>
</div>
<div class="row">
  <div class="col site-alert-success">青龙</div>
  <div class="col site-alert-success">白虎</div>
  <div class="col site-alert-success">朱雀</div>
  <div class="col site-alert-success">玄武</div>
</div>
```

Secondly, you can use `col-1-2`, `col-1-3`, `col-2-3`, `col-1-4` and `col-3-4` to achieve a maximum 4# grid.

{% raw %}
<div class="row mt-15">
  <div class="col-1-2 site-alert-success">.col-1-2</div>
  <div class="col-1-2 site-alert-success">.col-1-2</div>
</div>
<div class="row">
  <div class="col-1-3 site-alert-success">.col-1-3</div>
  <div class="col-2-3 site-alert-success">.col-2-3</div>
</div>
<div class="row">
  <div class="col-1-4 site-alert-success">.col-1-4</div>
  <div class="col-3-4 site-alert-success">.col-3-4</div>
</div>
<div class="row">
  <div class="col-1-4 site-alert-success">.col-1-4</div>
  <div class="col-1-2 site-alert-success">.col-1-2</div>
  <div class="col-1-4 site-alert-success">.col-1-4</div>
</div>
{% endraw %}

```html
<div class="row mt-15">
  <div class="col-1-2 site-alert-success">.col-1-2</div>
  <div class="col-1-2 site-alert-success">.col-1-2</div>
</div>
<div class="row">
  <div class="col-1-3 site-alert-success">.col-1-3</div>
  <div class="col-2-3 site-alert-success">.col-2-3</div>
</div>
<div class="row">
  <div class="col-1-4 site-alert-success">.col-1-4</div>
  <div class="col-3-4 site-alert-success">.col-3-4</div>
</div>
<div class="row">
  <div class="col-1-4 site-alert-success">.col-1-4</div>
  <div class="col-1-2 site-alert-success">.col-1-2</div>
  <div class="col-1-4 site-alert-success">.col-1-4</div>
</div>
```

### Use flexbox for layout

You probably know Mobi.css can use flexbox for layout, and so should you! [Now it's safe to use flexbox on all mobile browsers](http://caniuse.com/#feat=flexbox).

Here is an example for how you can use `col` to achieve a typical fixed-fluid layout.

{% raw %}
<div class="row mt-15">
  <div style="width:70px; padding:0 7px 0 15px;"><i class="fa fa-github" style="font-size:56px;"></i></div>
  <div class="col site-alert-success" style="margin-right:30px;">Hi, xcatliu, do you know about Mobi.css?</div>
</div>
<div class="row mt-15">
  <div class="col site-alert-success text-right" style="margin-left:30px;">I sure do! Mobi.css is a lightweight, flexible css framework that focuses on mobile.</div>
  <div style="width:70px; padding:0 15px 0 7px;"><img alt="xcatliu" src="img/xcatliu.png"/></div>
</div>
{% endraw %}

```html
<div class="row mt-15">
  <div style="width:70px; padding:0 7px 0 15px;"><i class="fa fa-github" style="font-size:56px;"></i></div>
  <div class="col site-alert-success" style="margin-right:30px;">Hi, xcatliu, do you know about Mobi.css?</div>
</div>
<div class="row mt-15">
  <div class="col site-alert-success text-right" style="margin-left:30px;">I sure do! Mobi.css is a lightweight, flexible css framework that focuses on mobile.</div>
  <div style="width:70px; padding:0 15px 0 7px;"><img alt="xcatliu" src="img/xcatliu.png"/></div>
</div>
```

### Use flexbox for aligning

Forget `margin:0 auto;` and `top:50%; margin-top:-100px;`. You can align easily using flexbox!

{% raw %}
<div class="flex-left site-alert-success mt-15">
  <div class="site-alert-success">Mobi.css</div>
</div>
<div class="flex-center site-alert-success">
  <div class="site-alert-success">Is</div>
</div>
<div class="flex-right site-alert-success">
  <div class="site-alert-success">Awesome!</div>
</div>
<div class="flex-top site-alert-success" style="height:150px;">
  <div class="site-alert-success">Mobi.css</div>
</div>
<div class="flex-middle site-alert-success" style="height:150px;">
  <div class="site-alert-success">Is</div>
</div>
<div class="flex-bottom site-alert-success" style="height:150px;">
  <div class="site-alert-success">Awesome!</div>
</div>
<div class="flex-center flex-middle site-alert-success" style="height:150px;">
  <div class="site-alert-success">Mobi.css is awesome!</div>
</div>
{% endraw %}

```html
<div class="flex-left site-alert-success mt-15">
  <div class="site-alert-success">Mobi.css</div>
</div>
<div class="flex-center site-alert-success">
  <div class="site-alert-success">Is</div>
</div>
<div class="flex-right site-alert-success">
  <div class="site-alert-success">Awesome!</div>
</div>
<div class="flex-top site-alert-success" style="height:150px;">
  <div class="site-alert-success">Mobi.css</div>
</div>
<div class="flex-middle site-alert-success" style="height:150px;">
  <div class="site-alert-success">Is</div>
</div>
<div class="flex-bottom site-alert-success" style="height:150px;">
  <div class="site-alert-success">Awesome!</div>
</div>
<div class="flex-center flex-middle site-alert-success" style="height:150px;">
  <div class="site-alert-success">Mobi.css is awesome!</div>
</div>
```

Also, you can use `flex-xxx` together with `row`.

{% raw %}
<div class="row mt-15">
  <div class="col-1-3 site-alert-success">col-1-3 in row</div>
</div>
<div class="row flex-right">
  <div class="col-1-3 site-alert-success">col-1-3 in row flex-right</div>
</div>
{% endraw %}

```html
<div class="row mt-15">
  <div class="col-1-3 site-alert-success">col-1-3 in row</div>
</div>
<div class="row flex-right">
  <div class="col-1-3 site-alert-success">col-1-3 in row flex-right</div>
</div>
```

### Margin top only

Nearly all margins in Mobi.css have a `0` value for `margin-bottom`. For vertical spacing, Mobi.css use `margin-top` to make content flow clearly.

This technique allows each section to determine the spacing it needs from the element above it.

For example, `<h1>` ~ `<h6>` has `30px` of vertical spacing between them . In the meantime, `<p>`, `<ul>`, `<table>` have only `15px` of vertical spacing.

Mobi.css also provides three classes, `mt-30`, `mt-15` and `mt-0`, to easily override the top margin. These set `margin-top` to `30px`, `15px` and `0`, respectively.

{% raw %}
<section class="mt-15 site-alert-success">section.mt-15</section>
<p class="mt-0 site-alert-success">p.mt-0</p>
<section class="mt-30 site-alert-success">section.mt-30</section>
{% endraw %}

```html
<section class="mt-15 site-alert-success">section.mt-15</section>
<p class="mt-0 site-alert-success">p.mt-0</p>
<section class="mt-30 site-alert-success">section.mt-30</section>
```

## Typography

Mobi.css is designed for content-based websites. It has a pure but pleasant experience for reading.

Most typography styles are reset to not need additional classes.

This site itself is a real example. If you've been reading this, you can just inspect using your browser to see how it's done.

## Tables

Although tables are not widely used in mobile, sometimes they are necessary.

However, tables typically render out of the viewable area on small mobile devices. If so, use the `scroll-view` wrapper to make your table scrollable.

And don't forget to add `class="table"` to your `<table>` element!

Why doesn't Mobi.css reset the `<table>` element so you don't need to add the `table` class?

Because once the `<table>` element is reset, it's hard to set it back. It's more friendly to third party libraries if we don't reset `<table>` element. The same reason applies to `<form>`.

{% raw %}
<div class="scroll-view">
  <table class="table">
    <thead>
      <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="http://getmobicss.com/">Mobi.css</a></td>
        <td><a href="https://github.com/xcatliu">xcatliu</a></td>
        <td>Sass</td>
        <td>3.6kb</td>
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
{% endraw %}

```html
<div class="scroll-view">
  <table class="table">
    <thead>
      <tr><th>Name</th><th>Author</th><th>Language</th><th>Size</th><th>Features</th><th>GitHub</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="http://getmobicss.com/">Mobi.css</a></td>
        <td><a href="https://github.com/xcatliu">xcatliu</a></td>
        <td>Sass</td>
        <td>3.6kb</td>
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

You need add `class="form"` to a `<form>` element.

### Basic forms

{% raw %}
<form class="form" action="#Basic-forms">
  <input type="text" placeholder="Name"/>
  <input type="password" placeholder="Password"/>
  <label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
  <input type="submit" value="Sign Up Now"/>
</form>
{% endraw %}

```html
<form class="form" action="#Basic-forms">
  <input type="text" placeholder="Name"/>
  <input type="email" placeholder="Email"/>
  <label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
  <input type="submit" value="Sign Up Now"/>
</form>
```

### Complicated forms

If you want to have multiple inputs in one row, you should use the grid system.

{% raw %}
<form class="form" action="#Complicated-forms">
  <div class="row">
    <label class="col text-right" for="multiple-inputs-name" style="max-width:90px;">Name: </label>
    <div class="col"><input type="text" id="multiple-inputs-name" placeholder="xcatliu"/></div>
  </div>
  <div class="row">
    <label class="col text-right" style="max-width:90px;">Gender: </label>
    <div class="col"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="Male"/>Male
    </label></div>
    <div class="col"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="Female"/>Female
    </label></div>
  </div>
  <div class="row">
    <label class="col text-right" style="max-width:90px;">Country: </label>
    <div class="col">
      <select>
        <option disabled selected value> -- select -- </option>
        <option>China</option>
        <option>USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <label class="col text-right" style="max-width:90px;">Avatar:</label>
    <div class="col">
      <input type="file"/>
    </div>
  </div>
  <div class="row">
    <label class="col text-right" for="multiple-inputs-bio" style="max-width:90px;">Bio: </label>
    <div class="col">
      <textarea id="multiple-inputs-bio" placeholder="Who are you?"></textarea>
    </div>
  </div>
  <div class="row">
    <div style="width:90px;"></div>
    <div class="col">
      <button type="reset" class="btn-danger">Reset</button>
    </div>
    <div class="col">
      <button type="submit" class="btn-primary">Submit</button>
    </div>
  </div>
</form>
{% endraw %}

```html
<form class="form" action="#Complicated-forms">
  <div class="row">
    <label class="col text-right" for="multiple-inputs-name" style="max-width:90px;">Name: </label>
    <div class="col"><input type="text" id="multiple-inputs-name" placeholder="xcatliu"/></div>
  </div>
  <div class="row">
    <label class="col text-right" style="max-width:90px;">Gender: </label>
    <div class="col"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="Male"/>Male
    </label></div>
    <div class="col"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="Female"/>Female
    </label></div>
  </div>
  <div class="row">
    <label class="col text-right" style="max-width:90px;">Country: </label>
    <div class="col">
      <select>
        <option disabled selected value> -- select -- </option>
        <option>China</option>
        <option>USA</option>
      </select>
    </div>
  </div>
  <div class="row">
    <label class="col text-right" style="max-width:90px;">Avatar:</label>
    <div class="col">
      <input type="file"/>
    </div>
  </div>
  <div class="row">
    <label class="col text-right" for="multiple-inputs-bio" style="max-width:90px;">Bio: </label>
    <div class="col">
      <textarea id="multiple-inputs-bio" placeholder="Who are you?"></textarea>
    </div>
  </div>
  <div class="row">
    <div style="width:90px;"></div>
    <div class="col">
      <button type="reset" class="btn-danger">Reset</button>
    </div>
    <div class="col">
      <button type="submit" class="btn-primary">Submit</button>
    </div>
  </div>
</form>
```

**Warning** when you are using `<label>` element, you can add `class="flex-middle"` if it's the parent of `radio` or `checkbox` label, this makes the radio button aligned middle vertically.

### `disabled` and `readonly`

{% raw %}
<form class="form" action="#disabled-and-readonly">
  <input type="text" placeholder="Disabled Input" disabled/>
  <input type="text" value="Readonly Input Value" readonly/>
  <div class="row">
  <div class="col"><input type="button" value="Set" disabled/></div>
  <div class="col"><button type="button" class="btn-primary" disabled>Button</button></div>
  <div class="col"><input type="button" class="btn-danger" value="Disabled" disabled/></div>
  </div>
</form>
{% endraw %}

```html
<form class="form" action="#disabled-and-readonly">
  <input type="text" placeholder="Disabled Input" disabled/>
  <input type="text" value="Readonly Input Value" readonly/>
  <div class="row">
    <div class="col"><input type="button" value="Set" disabled/></div>
    <div class="col"><button type="button" class="btn-primary" disabled>Button</button></div>
    <div class="col"><input type="button" class="btn btn-danger" value="Disabled" disabled/></div>
  </div>
</form>
```

### `btn`

You can also use `btn` to make an `<a>` to a button.

{% raw %}
<a href="javascript:void(0);" class="btn">a.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">a.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">a.btn.btn-danger</a>
{% endraw %}

```html
<a href="javascript:void(0);" class="btn">a.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">a.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">a.btn.btn-danger</a>
```

`<button>`'s inside `<form>` elements don't need a `btn` class. But when you create a `<button>` outside `<form>`, you should always add `btn` class.

{% raw %}
<button class="mt-15">A Button Without `btn`</button>
<button class="btn">A Button With `btn`</button>
{% endraw %}

```html
<button class="mt-15">A Button Without `btn`</button>
<button class="btn">A Button With `btn`</button>
```

That is because Mobi.css doesn't want to reset the default styles of `button`. This make it easy for third party libraries to override the styles of `button`.

## Utilities

Mobi.css also provides some useful utilities, like layout `mt-30`, `text-left`, `scroll-view`, etc.

### Layout utilities

As mentioned in [Margin Top Only](#Margin-top-only) section, Mobi.css provides three classes, `mt-30`, `mt-15` and `mt-0`, for overriding an element's top margin.

For more details, please read [Margin Top Only](#Margin-top-only) section.

### Text aligning

You can use Mobi.css to easily align text.

{% raw %}
<div class="text-left site-alert-success mt-15">Mobi.css is awesome!</div>
<div class="text-center site-alert-success">Awesome!</div>
<div class="text-right site-alert-success">Some!</div>
{% endraw %}

```html
<div class="text-left site-alert-success mt-15">Mobi.css is awesome!</div>
<div class="text-center site-alert-success">Awesome!</div>
<div class="text-right site-alert-success">Some!</div>
```

### `scroll-view`

Mobile devices usually have small width, so it's very useful to use a `scroll-view` class.

Mobi.css optimizes `scroll-view` to make it scroll smoothly.

#### Scroll horizontal

{% raw %}
<div class="mt-15 scroll-view">
  <div style="width:1024px;">
    <i class="fa fa-adjust" style="font-size:6rem;"></i>
    <i class="fa fa-anchor" style="font-size:6rem;"></i>
    <i class="fa fa-archive" style="font-size:6rem;"></i>
    <i class="fa fa-area-chart" style="font-size:6rem;"></i>
    <i class="fa fa-arrows" style="font-size:6rem;"></i>
    <i class="fa fa-asterisk" style="font-size:6rem;"></i>
    <i class="fa fa-at" style="font-size:6rem;"></i>
    <i class="fa fa-automobile" style="font-size:6rem;"></i>
    <i class="fa fa-ban" style="font-size:6rem;"></i>
    <i class="fa fa-bank" style="font-size:6rem;"></i>
    <i class="fa fa-bar-chart" style="font-size:6rem;"></i>
    <i class="fa fa-battery-0" style="font-size:6rem;"></i>
    <i class="fa fa-beer" style="font-size:6rem;"></i>
    <i class="fa fa-bell" style="font-size:6rem;"></i>
    <i class="fa fa-bicycle" style="font-size:6rem;"></i>
  </div>
</div>
{% endraw %}

```html
<div class="mt-15 scroll-view">
  <div style="width:1024px;">
    <i class="fa fa-adjust" style="font-size:6rem;"></i>
    <i class="fa fa-anchor" style="font-size:6rem;"></i>
    <i class="fa fa-archive" style="font-size:6rem;"></i>
    <i class="fa fa-area-chart" style="font-size:6rem;"></i>
    <i class="fa fa-arrows" style="font-size:6rem;"></i>
    <i class="fa fa-asterisk" style="font-size:6rem;"></i>
    <i class="fa fa-at" style="font-size:6rem;"></i>
    <i class="fa fa-automobile" style="font-size:6rem;"></i>
    <i class="fa fa-ban" style="font-size:6rem;"></i>
    <i class="fa fa-bank" style="font-size:6rem;"></i>
    <i class="fa fa-bar-chart" style="font-size:6rem;"></i>
    <i class="fa fa-battery-0" style="font-size:6rem;"></i>
    <i class="fa fa-beer" style="font-size:6rem;"></i>
    <i class="fa fa-bell" style="font-size:6rem;"></i>
    <i class="fa fa-bicycle" style="font-size:6rem;"></i>
  </div>
</div>
```

#### Scroll vertical

This is pretty easy. Just set the `max-height` of `scroll-view`. If not set, the default `max-height` is `300px`.

{% raw %}
<div class="mt-15 scroll-view" style="max-height:400px;">
  <h2>琵琶行</h2>
  <address>作者：白居易</address>
  <p>
    浔阳江头夜送客，枫叶荻花秋瑟瑟。<br/>
    主人下马客在船，举酒欲饮无管弦。<br/>
    醉不成欢惨将别，别时茫茫江浸月。<br/>
    忽闻水上琵琶声，主人忘归客不发。<br/>
    寻声暗问弹者谁？琵琶声停欲语迟。<br/>
    移船相近邀相见，添酒回灯重开宴。<br/>
    千呼万唤始出来，犹抱琵琶半遮面。<br/>
    转轴拨弦三两声，未成曲调先有情。<br/>
    弦弦掩抑声声思，似诉平生不得志。<br/>
    低眉信手续续弹，说尽心中无限事。<br/>
    轻拢慢捻抹复挑，初为霓裳后六幺。<br/>
    大弦嘈嘈如急雨，小弦切切如私语。<br/>
    嘈嘈切切错杂弹，大珠小珠落玉盘。<br/>
    间关莺语花底滑，幽咽泉流冰下难。<br/>
    冰泉冷涩弦凝绝，凝绝不通声暂歇。<br/>
    别有幽愁暗恨生，此时无声胜有声。<br/>
    银瓶乍破水浆迸，铁骑突出刀枪鸣。<br/>
    曲终收拨当心画，四弦一声如裂帛。<br/>
    东船西舫悄无言，唯见江心秋月白。<br/>
    沉吟放拨插弦中，整顿衣裳起敛容。<br/>
    自言本是京城女，家在虾蟆陵下住。<br/>
    十三学得琵琶成，名属教坊第一部。<br/>
    曲罢曾教善才服，妆成每被秋娘妒。<br/>
    五陵年少争缠头，一曲红绡不知数。<br/>
    钿头银篦击节碎，血色罗裙翻酒污。<br/>
    今年欢笑复明年，秋月春风等闲度。<br/>
    弟走从军阿姨死，暮去朝来颜色故。<br/>
    门前冷落鞍马稀，老大嫁作商人妇。<br/>
    商人重利轻别离，前月浮梁买茶去。<br/>
    去来江口守空船，绕船月明江水寒。<br/>
    夜深忽梦少年事，梦啼妆泪红阑干。<br/>
    我闻琵琶已叹息，又闻此语重唧唧。<br/>
    同是天涯沦落人，相逢何必曾相识！<br/>
    我从去年辞帝京，谪居卧病浔阳城。<br/>
    浔阳地僻无音乐，终岁不闻丝竹声。<br/>
    住近湓江地低湿，黄芦苦竹绕宅生。<br/>
    其间旦暮闻何物？杜鹃啼血猿哀鸣。<br/>
    春江花朝秋月夜，往往取酒还独倾。<br/>
    岂无山歌与村笛？呕哑嘲哳难为听。<br/>
    今夜闻君琵琶语，如听仙乐耳暂明。<br/>
    莫辞更坐弹一曲，为君翻作琵琶行。<br/>
    感我此言良久立，却坐促弦弦转急。<br/>
    凄凄不似向前声，满座重闻皆掩泣。<br/>
    座中泣下谁最多？江州司马青衫湿。
  </p>
</div>
{% endraw %}

```html
<div class="mt-15 scroll-view" style="max-height:400px;">
  <h2>琵琶行</h2>
  <address>作者：白居易</address>
  <p>
    浔阳江头夜送客，枫叶荻花秋瑟瑟。<br/>
    主人下马客在船，举酒欲饮无管弦。<br/>
    醉不成欢惨将别，别时茫茫江浸月。<br/>
    忽闻水上琵琶声，主人忘归客不发。<br/>
    寻声暗问弹者谁？琵琶声停欲语迟。<br/>
    移船相近邀相见，添酒回灯重开宴。<br/>
    千呼万唤始出来，犹抱琵琶半遮面。<br/>
    转轴拨弦三两声，未成曲调先有情。<br/>
    弦弦掩抑声声思，似诉平生不得志。<br/>
    低眉信手续续弹，说尽心中无限事。<br/>
    轻拢慢捻抹复挑，初为霓裳后六幺。<br/>
    大弦嘈嘈如急雨，小弦切切如私语。<br/>
    嘈嘈切切错杂弹，大珠小珠落玉盘。<br/>
    间关莺语花底滑，幽咽泉流冰下难。<br/>
    冰泉冷涩弦凝绝，凝绝不通声暂歇。<br/>
    别有幽愁暗恨生，此时无声胜有声。<br/>
    银瓶乍破水浆迸，铁骑突出刀枪鸣。<br/>
    曲终收拨当心画，四弦一声如裂帛。<br/>
    东船西舫悄无言，唯见江心秋月白。<br/>
    沉吟放拨插弦中，整顿衣裳起敛容。<br/>
    自言本是京城女，家在虾蟆陵下住。<br/>
    十三学得琵琶成，名属教坊第一部。<br/>
    曲罢曾教善才服，妆成每被秋娘妒。<br/>
    五陵年少争缠头，一曲红绡不知数。<br/>
    钿头银篦击节碎，血色罗裙翻酒污。<br/>
    今年欢笑复明年，秋月春风等闲度。<br/>
    弟走从军阿姨死，暮去朝来颜色故。<br/>
    门前冷落鞍马稀，老大嫁作商人妇。<br/>
    商人重利轻别离，前月浮梁买茶去。<br/>
    去来江口守空船，绕船月明江水寒。<br/>
    夜深忽梦少年事，梦啼妆泪红阑干。<br/>
    我闻琵琶已叹息，又闻此语重唧唧。<br/>
    同是天涯沦落人，相逢何必曾相识！<br/>
    我从去年辞帝京，谪居卧病浔阳城。<br/>
    浔阳地僻无音乐，终岁不闻丝竹声。<br/>
    住近湓江地低湿，黄芦苦竹绕宅生。<br/>
    其间旦暮闻何物？杜鹃啼血猿哀鸣。<br/>
    春江花朝秋月夜，往往取酒还独倾。<br/>
    岂无山歌与村笛？呕哑嘲哳难为听。<br/>
    今夜闻君琵琶语，如听仙乐耳暂明。<br/>
    莫辞更坐弹一曲，为君翻作琵琶行。<br/>
    感我此言良久立，却坐促弦弦转急。<br/>
    凄凄不似向前声，满座重闻皆掩泣。<br/>
    座中泣下谁最多？江州司马青衫湿。
  </p>
</div>
```

### `hide-on-mobile`

Using `hide-on-mobile` will hide the element on mobile devices.

{% raw %}
<p class="hide-on-mobile">This part will hide on mobile devices.</p>
{% endraw %}

```html
<p class="hide-on-mobile">This part will hide on mobile devices.</p>
```

### `show-on-mobile`

Using `show-on-mobile` will only show the element on mobile devices.

{% raw %}
<p class="show-on-mobile">This part will only show on mobile devices.</p>
{% endraw %}

```html
<p class="show-on-mobile">This part will only show on mobile devices.</p>
```

## Next step

[Extensions for Mobi.css](/extensions)

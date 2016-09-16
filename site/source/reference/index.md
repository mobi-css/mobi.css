# Reference

Classes (TODO):

- `.container`
- `.top-gap`, `.top-gap-big`, `.top-gap-0`
- `.flex-left`, `.flex-center`, `.flex-right`, `.flex-top`, `.flex-middle`, `.flex-bottom`
- `.flex-vertical`
- `.unit`, `.unit-0`, `.unit-1-2`, `.unit-1-3`, `.unit-1-4`, `.unit-2-3`, `.unit-3-4`
- `.units-gap`
- `.scroll-view`
- `.hide-on-mobile`, `show-on-mobile`
- `.text-left`, `.text-center`, `text-right`
- `.table`
- `.form`

Elemens:

- [Content sectioning](Content-sectioning)
- [Text content](Text-content)
- [Inline text semantics](Inline-text-semantics)
- [Multimedia](Multimedia)
- [Table content](Table-content)
- [Forms](Forms)

## Content sectioning

### Layout

(TODO)

- `.container`
- `.top-gap`, `.top-gap-big`, `.top-gap-0`
- `.scroll-view`
- `.hide-on-mobile`, `show-on-mobile`
- `<article>`, `<aside>`, `<footer>`, `<header>`, `<hgroup>`, `<nav>`, `<section>`
- `<address>`

### Flexbox

(TODO)

- `.flex-left`, `.flex-center`, `.flex-right`, `.flex-top`, `.flex-middle`, `.flex-bottom`
- `.flex-vertical`
- `.unit`, `.unit-0`, `.unit-1-2`, `.unit-1-3`, `.unit-1-4`, `.unit-2-3`, `.unit-3-4`
- `.units-gap`

### Headings

# h1. Mobi.css
## h2. Mobi.css
### h3. Mobi.css
#### h4. Mobi.css
##### h5. Mobi.css
###### h6. Mobi.css

## Text content

- Unordered List
- Unordered List
- Nesting
  - Sub Unordered List
  - Sub Unordered List

1. Ordered List
2. Ordered List
3. Nesting
  1. Sub Ordered List
  2. Sub Ordered List

{% raw %}
<dl>
  <dt>Mobi.css</dt>
  <dd>A lightweight, flexible css framework that focus on mobile.</dd>
  <dt>Bootstrap</dt>
  <dd>The world's most popular mobile-first and responsive front-end framework.</dd>
</dl>
{% endraw %}

```html
<dl>
  <dt>Mobi.css</dt>
  <dd>A lightweight, flexible css framework that focus on mobile.</dd>
  <dt>Bootstrap</dt>
  <dd>The world's most popular mobile-first and responsive front-end framework.</dd>
</dl>
```

{% raw %}
<pre><code>// Use &lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt; to create code blocks.
document.write('Hello World');</code></pre>
{% endraw %}

{% raw %}
<blockquote>
  <p>Use &lt;blockquote&gt; to create block quotation.</p>
</blockquote>
{% endraw %}

```html
<blockquote>
  <p>Use &lt;blockquote&gt; to create block quotation.</p>
</blockquote>
```

Use `<hr>` to create horizontal rules:

{% raw %}
<hr/>
{% endraw %}

Use `<figure>` and `<figcaption>` to create self-contained content:

{% raw %}
<figure>
  <img src="../../assets/layout-with-side.jpg" alt="Layout with side"/>
  <figcaption>Sketch: Layout with side</figcaption>
</figure>
{% endraw %}

```html
<figure>
  <img src="../../assets/layout-with-side.jpg" alt="Layout with side"/>
  <figcaption>Sketch: Layout with side</figcaption>
</figure>
```

## Inline text semantics

Use `class="text-left"`, `class="text-center"` or `class="text-right"` to align text:

{% raw %}
<div class="text-left top-gap">我是小雨</div>
<div class="text-center">我愛你</div>
<div class="text-right">你愛我嗎？</div>
{% endraw %}

```html
<div class="text-left top-gap">我是小雨</div>
<div class="text-center">我愛你</div>
<div class="text-right">你愛我嗎？</div>
```

Use `<a>` to create <a href="#Inline-text-elements">links</a>.

Use `<strong>` to create <strong>strong importance text</strong>.  
Use `<b>` to create <b>bold text</b>.

Use `<em>` to create <em>emphasized text</em>.  
Use `<i>` to create <i>italic text</i>.

Use `<del>` to create <del>text that has been deleted from a document</del>.  
Use `<s>` to create <s>text with a strikethrough</s>.

Use `<ins>` to create <ins>text that has been added to a document</ins>.  
Use `<u>` to create <u>text with an underline</u>.

Use `<small>` to create <small>small text</small>.  
Use `<sub>` to create text that <sub>lower</sub> and <sub>smaller</sub> than the main text.  
Use `<sup>` to create text that <sup>higher</sup> and <sup>smaller</sup> than the main text.

Use `<code>` to create fragments of computer code: <code>alert('Hello World');</code>.  
Use `<kbd>` to create the defining instance of a term: <kbd>Ctrl</kbd> + <kbd>D</kbd>.  
Use `<samp>` to create sample output from a computer: <samp>Build passed!</samp>.

Use `<br/>` to create line<br/>breaks.

Use `<span>` to create inline container: I <span style="color:red;">love</span> Mobi.css.

Use `<abbr>` to create <abbr title="The HTML <abbr> element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it.">abbreviation elements</abbr>.

```html
<abbr title="The HTML <abbr> element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it.">abbreviation elements</abbr>
```

Use `<cite>` to create citation elements: <cite><a href="http://getmobicss.com">Mobi.css</a></cite>.

```html
<cite><a href="http://getmobicss.com">Mobi.css</a></cite>
```

Use `<data>` to link a given content with a machine-readable translation: <data value="100000">Beijing</data>.

```html
<data value="100000">Beijing</data>
```

Use `<time>` to create time: <time datetime="2016-09-30T00:00">Sep 30</time>.

```html
<time datetime="2016-09-30T00:00">Sep 30</time>
```

Use `<q>` to create inline quotations: <q>I love Mobi.css</q>, xcatliu said.

```html
<q>I love Mobi.css</q>, xcatliu said.
```

Use `<ruby>`, `<rp>`, `<rt>` to create ruby annotations:

{% raw %}
<ruby>
  我 <rp>(</rp><rt>lǎn</rt><rp>)</rp>
  去 <rp>(</rp><rt>de</rt><rp>)</rp>
  洗 <rp>(</rp><rt>lǐ</rt><rp>)</rp>
  澡 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
  了 <rp>(</rp><rt>le</rt><rp>)</rp>
</ruby>
{% endraw %}

```html
<ruby>
  我 <rp>(</rp><rt>lǎn</rt><rp>)</rp>
  去 <rp>(</rp><rt>de</rt><rp>)</rp>
  洗 <rp>(</rp><rt>lǐ</rt><rp>)</rp>
  澡 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
  了 <rp>(</rp><rt>le</rt><rp>)</rp>
</ruby>
```

Use `<bdi>` to create text that be formatted in a <bdi>DIFFERENT DIRECTION</bdi> from other text outside it.  
Use `<bdo>` to <bdo dir="rtl">OVERRIDE</bdo> the current directionality of text.

```html
text that be formatted in a <bdi>DIFFERENT DIRECTION</bdi> from other text outside it.
<bdo dir="rtl">OVERRIDE</bdo> the current directionality of text.
```

`<bdi>` is not working in iOS and Chrome. Don't use it in your project, use `<bdo>` instead.

Use `<dfn>` to create a defining instance of a term:  
<dfn id="dfn-mobicss">Mobi.css</dfn> is a lightweight, flexible css framework that focus on mobile.  
What is Mobi.css? You can find the definition <a href="#dfn-mobicss">here</a>.

```html
<dfn id="dfn-mobicss">Mobi.css</dfn> is a lightweight, flexible css framework that focus on mobile.
What is Mobi.css? You can find the definition <a href="#dfn-mobicss">here</a>.
```

Use `<var>` to create a variable in a mathematical expression or a programming context:  
A simple equation: <var>x</var> = <var>y</var> + 2

```html
A simple equation: <var>x</var> = <var>y</var> + 2
```

Use `<wbr>` to create a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location:

{% raw %}
http://this<wbr>.is<wbr>.a<wbr>.really<wbr>.long<wbr>.example<wbr>.com/With<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages
{% endraw %}

```html
http://this<wbr>.is<wbr>.a<wbr>.really<wbr>.long<wbr>.example<wbr>.com/With<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages
```

## Multimedia

![Mobi.css Logo](../../assets/mobi-logo-512.png)

{% raw %}
<p>
  <audio controls>
    <source src="../../assets/croatian-rhapsody.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</p>
{% endraw %}

```html
<audio controls>
  <source src="../../assets/croatian-rhapsody.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

{% raw %}
<p>
  <video controls>
    <source src="../../assets/big-buck-bunny.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>
</p>
{% endraw %}

```html
<video controls>
  <source src="../../assets/big-buck-bunny.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

{% raw %}
<p>
  <iframe width="100%" height="240" src="https://www.youtube.com/embed/c2vm-QjK2xQ" frameborder="0" allowfullscreen></iframe>
</p>
{% endraw %}

```html
<iframe width="100%" height="320" src="https://www.youtube.com/embed/c2vm-QjK2xQ" frameborder="0" allowfullscreen></iframe>
```

## Table content

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

{% raw %}
<div class="scroll-view">
  <table class="table">
    <caption>Caption</caption>
    <colgroup>
      <unit style="background-color:rgba(255, 0, 0, 0.1);"/>
      <unit span="2" style="background-color:rgba(255, 255, 0, 0.1);"/>
    </colgroup>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.1</td>
        <td>1.2</td>
        <td>1.3</td>
      </tr>
      <tr>
        <td>2.1</td>
        <td>2.2</td>
        <td>2.3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
        <td>Footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>
{% endraw %}

```html
<div class="scroll-view">
  <table class="table">
    <caption>Caption</caption>
    <colgroup>
      <unit style="background-color:rgba(255, 0, 0, 0.1);"/>
      <unit span="2" style="background-color:rgba(255, 255, 0, 0.1);"/>
    </colgroup>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.1</td>
        <td>1.2</td>
        <td>1.3</td>
      </tr>
      <tr>
        <td>2.1</td>
        <td>2.2</td>
        <td>2.3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
        <td>Footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>
```

## Forms

{% raw %}
<form class="form">
{% endraw %}

### Text inputs

{% raw %}
<input type="text" placeholder="input[type=text]"/>
<input type="password" placeholder="input[type=password]"/>
<input type="email" placeholder="input[type=email]"/>
<input type="search" placeholder="input[type=search]"/>
<input type="url" placeholder="input[type=url]"/>
<input type="tel" placeholder="input[type=tel]"/>
<input type="number" placeholder="input[type=number]"/>
<textarea placeholder="textarea"></textarea>
{% endraw %}

```html
<input type="text" placeholder="input[type=text]"/>
<input type="password" placeholder="input[type=password]"/>
<input type="email" placeholder="input[type=email]"/>
<input type="search" placeholder="input[type=search]"/>
<input type="url" placeholder="input[type=url]"/>
<input type="tel" placeholder="input[type=tel]"/>
<input type="number" placeholder="input[type=number]"/>
<textarea placeholder="textarea"></textarea>
```

### Radio and checkbox

{% raw %}
<label class="flex-middle"><input type="radio" name="gender"/>Male</label>
<label class="flex-middle"><input type="radio" name="gender"/>Female</label>
<label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
{% endraw %}

```html
<label class="flex-middle"><input type="radio" name="gender"/>Male</label>
<label class="flex-middle"><input type="radio" name="gender"/>Female</label>
<label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
```

### Select inputs

{% raw %}
<select>
  <option disabled selected value> -- select -- </option>
  <option>China</option>
  <option>USA</option>
</select>
{% endraw %}

```html
<select>
  <option disabled selected value> -- select -- </option>
  <option>China</option>
  <option>USA</option>
</select>
```

{% raw %}
<select>
  <optgroup label="China">
    <option>Beijing</option>
    <option>Shanghai</option>
  </optgroup>
  <optgroup label="USA">
    <option>San Francisco</option>
    <option>Seattle</option>
    <option>New York City</option>
  </optgroup>
</select>
{% endraw %}

```html
<select>
  <optgroup label="China">
    <option>Beijing</option>
    <option>Shanghai</option>
  </optgroup>
  <optgroup label="USA">
    <option>San Francisco</option>
    <option>Seattle</option>
    <option>New York City</option>
  </optgroup>
</select>
```

{% raw %}
<select multiple>
  <optgroup label="China">
    <option>Beijing</option>
    <option>Shanghai</option>
  </optgroup>
  <optgroup label="USA">
    <option>San Francisco</option>
    <option>Seattle</option>
    <option>New York City</option>
  </optgroup>
</select>
{% endraw %}

```html
<select multiple>
  <optgroup label="China">
    <option>Beijing</option>
    <option>Shanghai</option>
  </optgroup>
  <optgroup label="USA">
    <option>San Francisco</option>
    <option>Seattle</option>
    <option>New York City</option>
  </optgroup>
</select>
```

### Datalists

{% raw %}
<label>
  Choose a browser from this list:
  <input type="text" list="browsers"/>
</label>
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
{% endraw %}

`<datalist>` is not supported in iOS. Don't use this in your project.

### File inputs

{% raw %}
<input type="file"/>
{% endraw %}

```html
<input type="file"/>
```

### Buttons

{% raw %}
<input type="button" class="btn" value=".btn"/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger"/>
{% endraw %}

```html
<input type="button" class="btn" value=".btn"/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger"/>
```

{% raw %}
<input type="reset" class="btn" value=".btn"/>
<input type="reset" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="reset" class="btn btn-danger" value=".btn.btn-danger"/>
{% endraw %}

```html
<input type="reset" class="btn" value=".btn"/>
<input type="reset" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="reset" class="btn btn-danger" value=".btn.btn-danger"/>
```

{% raw %}
<input type="submit" class="btn" value=".btn"/>
<input type="submit" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="submit" class="btn btn-danger" value=".btn.btn-danger"/>
{% endraw %}

```html
<input type="submit" class="btn" value=".btn"/>
<input type="submit" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="submit" class="btn btn-danger" value=".btn.btn-danger"/>
```

{% raw %}
<button type="button" class="btn">.btn</button>
<button type="button" class="btn btn-primary">.btn.btn-primary</button>
<button type="button" class="btn btn-danger">.btn.btn-danger</button>
{% endraw %}

```html
<button type="button" class="btn">.btn</button>
<button type="button" class="btn btn-primary">.btn.btn-primary</button>
<button type="button" class="btn btn-danger">.btn.btn-danger</button>
```

{% raw %}
<button type="reset" class="btn">.btn</button>
<button type="reset" class="btn btn-primary">.btn.btn-primary</button>
<button type="reset" class="btn btn-danger">.btn.btn-danger</button>
{% endraw %}

```html
<button type="reset" class="btn">.btn</button>
<button type="reset" class="btn btn-primary">.btn.btn-primary</button>
<button type="reset" class="btn btn-danger">.btn.btn-danger</button>
```

{% raw %}
<button type="submit" class="btn">.btn</button>
<button type="submit" class="btn btn-primary">.btn.btn-primary</button>
<button type="submit" class="btn btn-danger">.btn.btn-danger></button>
{% endraw %}

```html
<button type="submit" class="btn">.btn</button>
<button type="submit" class="btn btn-primary">.btn.btn-primary</button>
<button type="submit" class="btn btn-danger">.btn.btn-danger></button>
```

{% raw %}
<a href="javascript:void(0);" class="btn">.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>
{% endraw %}

```html
<a href="javascript:void(0);" class="btn">.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>
```

### Date inputs

{% raw %}
<input type="time"/>
<input type="week"/>
<input type="month"/>
<input type="date"/>
<input type="datetime-local"/>
{% endraw %}

```html
<input type="time"/>
<input type="month"/>
<input type="date"/>
<input type="datetime-local"/>
```

All the date inputs look ugly in iOS, and their styles cannot be changed. Please be careful while using them. It's not recommended to use them in your project.

`[type=week]` is not supported in iOS. Don't use this in your project.

### Other inputs

{% raw %}
<input type="color"/>
<input type="range" min="1" max="99" step="2"/>
<input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>
{% endraw %}

```html
<input type="color"/>
<input type="range" min="1" max="99" step="2"/>
<input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>
```

`[type=color]` is not supported in iOS. Don't use this in your project.

{% raw %}
<meter min="200" max="500" value="350">350 degrees</meter>
{% endraw %}

```html
<meter min="200" max="500" value="350">350 degrees</meter>
```

`<meter>` is not supported in iOS. Don't use this in your project.

{% raw %}
</form>
<form class="form" oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <div class="flex-left top-gap">
    <div class="unit flex-middle">
      <input class="top-gap-0" type="range" name="b" value="50" max="80" />
    </div>
    <div class="flex-middle">+</div>
    <div class="unit flex-middle">
      <input class="top-gap-0" type="number" name="a" value="10" />
    </div>
    <div class="flex-middle">=</div>
    <div class="flex-middle" style="padding:0 15px 0 7px;"><output class="top-gap-0" name="result">60</output></div>
  </div>
</form>
<form class="form">
{% endraw %}

```html
<form class="form" oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <div class="flex-left top-gap">
    <div class="unit flex-middle">
      <input class="top-gap-0" type="range" name="b" value="50" max="80" />
    </div>
    <div class="flex-middle">+</div>
    <div class="unit flex-middle">
      <input class="top-gap-0" type="number" name="a" value="10" />
    </div>
    <div class="flex-middle">=</div>
    <div class="flex-middle" style="padding:0 15px 0 7px;"><output name="result">60</output></div>
  </div>
</form>
```

{% raw %}
<progress class="top-gap" value="70" max="100">70 %</progress>
{% endraw %}

```html
<progress class="top-gap" value="70" max="100">70 %</progress>
```

### Disabled and readonly

{% raw %}
<input type="text" disabled placeholder="input[disabled]"/>
<input type="text" readonly value="input[readonly]"/>
<textarea disabled placeholder="textarea[disabled]"></textarea>
<textarea readonly>textarea[readonly]</textarea>
{% endraw %}

```html
<input type="text" disabled placeholder="input[disabled]"/>
<input type="text" readonly value="input[readonly]"/>
<textarea disabled placeholder="textarea[disabled]"></textarea>
<textarea readonly>textarea[readonly]</textarea>
```

{% raw %}
<label class="flex-middle"><input type="radio" name="gender" checked disabled/><span disabled>Male</span></label>
<label class="flex-middle"><input type="radio" name="gender" disabled/><span disabled>Female</span></label>
<label class="flex-middle"><input type="checkbox" disabled/><span disabled>I agree to terms.</span></label>
{% endraw %}

```html
<label class="flex-middle"><input type="radio" name="gender" checked disabled/><span disabled>Male</span></label>
<label class="flex-middle"><input type="radio" name="gender" disabled/><span disabled>Female</span></label>
<label class="flex-middle"><input type="checkbox" disabled/><span disabled>I agree to terms.</span></label>
```

Radio and checkbox cannot set to `readonly`.

{% raw %}
<select disabled>
  <option disabled selected value> -- select -- </option>
  <option>China</option>
  <option>USA</option>
</select>
{% endraw %}

```html
<select disabled>
  <option disabled selected value> -- select -- </option>
  <option>China</option>
  <option>USA</option>
</select>
```

Select inputs cannot set to `readonly`.

{% raw %}
<input type="file" disabled/>
{% endraw %}

```html
<input type="file" disabled/>
```

File inputs cannot set to `readonly`.

{% raw %}
<input type="button" class="btn" value=".btn" disabled/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>
{% endraw %}

```html
<input type="button" class="btn" value=".btn" disabled/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>
```

{% raw %}
<a href="javascript:void(0);" class="btn" disabled>.btn</a>
<a href="javascript:void(0);" class="btn btn-primary" disabled>.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger" disabled>.btn.btn-danger</a>
{% endraw %}

```html
<a href="javascript:void(0);" class="btn" disabled>.btn</a>
<a href="javascript:void(0);" class="btn btn-primary" disabled>.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger" disabled>.btn.btn-danger</a>
```

Buttons cannot set to `readonly`.

{% raw %}
<input type="datetime-local" disabled/>
<input type="datetime-local" readonly value="2016-12-31T12:59"/>
{% endraw %}

```html
<input type="datetime-local" disabled/>
<input type="datetime-local" readonly value="2016-12-31T12:59"/>
```

{% raw %}
<input type="color" disabled/>
<input type="range" min="1" max="99" step="2" disabled/>
<input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64" disabled/>
<input type="hidden" disabled/>
<input type="color" value="#ff0000" readonly/>
<input type="range" min="1" max="99" step="2" value="15" readonly/>
{% endraw %}

```html
<input type="color" disabled/>
<input type="range" min="1" max="99" step="2" disabled/>
<input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64" disabled/>
<input type="hidden" disabled/>
<input type="range" min="1" max="99" step="2" value="15" readonly/>
```

`[type=image]`, `[type=color]` and `[type=hidden]` cannot set to `readonly`.

### Fieldset in form

{% raw %}
<fieldset>
  <legend>Basic info</legend>
  <input type="text" placeholder="Name">
  <input type="number" placeholder="Age">
</fieldset>
{% endraw %}

```html
<fieldset>
  <legend>Basic info</legend>
  <input type="text" placeholder="Name">
  <input type="number" placeholder="Age">
</fieldset>
```

{% raw %}
</form>
{% endraw %}

## Next step

- [Extensions](/extensions): Plugins, themes, etc.
- [GitHub](https://github.com/xcatliu/mobi.css)

<div class="flex-center">
  <div class="container">

# Mobi.css Test Page

## Layout

View the [independent layout test page](layout).

## Colors

<p>
  <span class="text-muted">span.text-muted</span>
  <span class="text-primary">span.text-primary</span>
  <span class="text-success">span.text-success</span>
  <span class="text-warning">span.text-warning</span>
  <span class="text-danger">span.text-danger</span>
  <span class="text-inverse">span.text-inverse</span>
</p>

<p>
  <a class="text-muted" href="#">a.text-muted</a>
  <a class="text-primary" href="#">a.text-primary</a>
  <a class="text-success" href="#">a.text-success</a>
  <a class="text-warning" href="#">a.text-warning</a>
  <a class="text-danger" href="#">a.text-danger</a>
  <a class="text-inverse" href="#">a.text-inverse</a>
</p>

<p>
  <span class="bg-primary text-inverse">span.bg-primary.text-inverse</span>
  <span class="bg-success text-inverse">span.bg-success.text-inverse</span>
  <span class="bg-warning text-inverse">span.bg-warning.text-inverse</span>
  <span class="bg-danger text-inverse">span.bg-danger.text-inverse</span>
  <span class="bg-inverse text-inverse">span.bg-inverse.text-inverse</span>
</p>

<p>
  <span class="bg-primary-faded">span.bg-primary-faded</span>
  <span class="bg-success-faded">span.bg-success-faded</span>
  <span class="bg-warning-faded">span.bg-warning-faded</span>
  <span class="bg-danger-faded">span.bg-danger-faded</span>
  <span class="bg-faded">span.bg-faded</span>
</p>

## Headings

# h1. Mobi.css
## h2. Mobi.css
### h3. Mobi.css
#### h4. Mobi.css
##### h5. Mobi.css
###### h6. Mobi.css

## Text Content

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

<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>

<pre><code>// Use &lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt; to create code blocks.
document.write('Hello World');</code></pre>

<blockquote>
  <p>Use &lt;blockquote&gt; to create block quotation.</p>
</blockquote>

Use `<hr>` to create horizontal rules:

<hr/>

Use `<figure>` and `<figcaption>` to create self-contained content:

<figure class="text-center">
  <img src="assets/img/mobi-logo-512.png" height="256" alt="Mobi.css Logo"/>
  <figcaption>Figure caption: Mobi.css Logo</figcaption>
</figure>

## Inline Text Semantics

Use `<a>` to create <a href="#inline-text-elements">links</a>.

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

Use `<span>` to create inline container: I <span style="color:purple;">love</span> Mobi.css.

Use `<mark>` to create a <mark>marked text</mark>.

Use `<abbr>` to create <abbr title="The HTML <abbr> element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it.">abbreviation elements</abbr>.

Use `<cite>` to create citation elements: <cite><a href="http://getmobicss.com">Mobi.css</a></cite>.

Use `<data>` to link a given content with a machine-readable translation: <data value="100000">Beijing</data>.

Use `<time>` to create time: <time datetime="2016-09-30T00:00">Sep 30</time>.

Use `<q>` to create inline quotations: <q>I love Mobi.css</q>, xcatliu said.

Use `<ruby>`, `<rp>`, `<rt>` to create ruby annotations:

<p>
  <ruby>
    我 <rp>(</rp><rt>lǎn</rt><rp>)</rp>
    去 <rp>(</rp><rt>de</rt><rp>)</rp>
    洗 <rp>(</rp><rt>lǐ</rt><rp>)</rp>
    澡 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
    了 <rp>(</rp><rt>le</rt><rp>)</rp>
  </ruby>
</p>

Use `<bdi>` to create text that be formatted in a <bdi>DIFFERENT DIRECTION</bdi> from other text outside it.  
Use `<bdo>` to <bdo dir="rtl">OVERRIDE</bdo> the current directionality of text.

<p class="alert-danger">
  <code>&lt;bdi&gt;</code> is not working in iOS and Chrome. Don't use it in your project, use <code>&lt;bdo&gt;</code> instead.
</p>

Use `<dfn>` to create a defining instance of a term:  
<dfn id="dfn-mobicss">Mobi.css</dfn> is a lightweight, flexible css framework that focus on mobile.  
What is Mobi.css? You can find the definition <a href="#dfn-mobicss">here</a>.

Use `<var>` to create a variable in a mathematical expression or a programming context:

A simple equation: <var>x</var> = <var>y</var> + 2

Use `<wbr/>` to create a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location:

http://this<wbr/>.is<wbr/>.a<wbr/>.really<wbr/>.long<wbr/>.example<wbr/>.com/With<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages

## Multimedia

<p class="text-center">
  <img src="assets/img/mobi-logo-512.png" height="256" alt="Mobi.css Logo"/>
</p>

<p>
  <audio controls>
    <source src="assets/croatian-rhapsody.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</p>

<p>
  <video controls>
    <source src="assets/big-buck-bunny.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>
</p>

<p>
  <iframe width="100%" height="240" src="https://www.youtube.com/embed/wvYXoyxLv64" frameborder="0" allowfullscreen></iframe>
</p>

## Table Content

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
        <td>2.8kb</td>
        <td>⭐⭐⭐</td>
        <td><a href="https://github.com/mobi-css/mobi.css">Mobi.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://getskeleton.com/">Skeleton</a></td>
        <td><a href="https://github.com/dhg">Dave Gamache</a></td>
        <td>Css</td>
        <td>1.7kb + 1.1kb</td>
        <td>⭐</td>
        <td><a href="https://github.com/dhg/Skeleton/">Skeleton GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://purecss.io/">Pure.css</a></td>
        <td><a href="https://github.com/yahoo">Yahoo Inc.</a></td>
        <td>Css</td>
        <td>3.9kb</td>
        <td>⭐⭐</td>
        <td><a href="https://github.com/yahoo/pure/">Pure.css GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://v4-alpha.getbootstrap.com/">Bootstrap v4</a></td>
        <td><a href="https://github.com/twbs">Twitter</a></td>
        <td>Sass, JavaScript</td>
        <td>24.1kb</td>
        <td>⭐⭐⭐⭐⭐</td>
        <td><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap v4 GitHub</a></td>
      </tr>
      <tr>
        <td><a href="http://goratchet.com/"><s>Ratchet</s></a></td>
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>This project is dying.</s></a></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="scroll-view">
  <table class="table">
    <caption>Table Caption</caption>
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

## Forms

<form class="form">

### Text Inputs

<input type="text" placeholder="input[type=text]"/>
<input type="password" placeholder="input[type=password]"/>
<input type="email" placeholder="input[type=email]"/>
<input type="search" placeholder="input[type=search]"/>
<input type="url" placeholder="input[type=url]"/>
<input type="tel" placeholder="input[type=tel]"/>
<input type="number" placeholder="input[type=number]"/>
<textarea placeholder="textarea"></textarea>

### Radio and Checkbox

<label class="flex-middle"><input type="radio" name="gender"/>Male</label>
<label class="flex-middle"><input type="radio" name="gender"/>Female</label>
<label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>

### Select Inputs

<select>
  <option disabled selected value> -- select -- </option>
  <option>China</option>
  <option>USA</option>
</select>

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

### Datalists

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

<p class="alert-danger">
  <code>&lt;datalist&gt;</code> is not supported in iOS. Don't use this in your project.
</p>

### File Inputs

<input type="file"/>

### Buttons

<input type="button" class="btn" value=".btn"/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger"/>

<input type="reset" class="btn" value=".btn"/>
<input type="reset" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="reset" class="btn btn-danger" value=".btn.btn-danger"/>

<input type="submit" class="btn" value=".btn"/>
<input type="submit" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="submit" class="btn btn-danger" value=".btn.btn-danger"/>

<button type="button" class="btn">.btn</button>
<button type="button" class="btn btn-primary">.btn.btn-primary</button>
<button type="button" class="btn btn-danger">.btn.btn-danger</button>

<button type="reset" class="btn">.btn</button>
<button type="reset" class="btn btn-primary">.btn.btn-primary</button>
<button type="reset" class="btn btn-danger">.btn.btn-danger</button>

<button type="submit" class="btn">.btn</button>
<button type="submit" class="btn btn-primary">.btn.btn-primary</button>
<button type="submit" class="btn btn-danger">.btn.btn-danger</button>

<a href="javascript:void(0);" class="btn">.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>

### Date Inputs

<input type="time"/>
<input type="week"/>
<input type="month"/>
<input type="date"/>
<input type="datetime-local"/>

All the date inputs look ugly in iOS, and their styles cannot be changed. Please be careful while using them. It's not recommended to use them in your project.

<p class="alert-danger">
  <code>[type=week]</code> is not supported in iOS. Don't use this in your project.
</p>

### Other Inputs

<input type="color"/>
<input type="range" min="1" max="99" step="2"/>
<input type="image" src="assets/img/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>

<p class="alert-danger">
  <code>[type=color]</code> is not supported in iOS. Don't use this in your project.
</p>

<meter min="0" max="100" value="37">37 degrees</meter>

<p class="alert-danger">
  <code>&lt;meter&gt;</code> is not supported in iOS. Don't use this in your project.
</p>

</form>
<form class="form" oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <div class="flex-left units-gap">
    <div class="unit flex-middle">
      <input type="range" name="b" value="50" max="80" />
    </div>
    <div class="unit-0 flex-middle top-gap">+</div>
    <div class="unit flex-middle">
      <input type="number" name="a" value="10" />
    </div>
    <div class="unit-0 flex-middle top-gap">=</div>
    <div class="unit-0 flex-middle top-gap" style="padding:0 15px 0 7px;"><output name="result">60</output></div>
  </div>
</form>
<form class="form">

<progress class="top-gap" value="70" max="100">70 %</progress>

### Disabled and Readonly

<input type="text" disabled placeholder="input[disabled]"/>
<input type="text" readonly value="input[readonly]"/>
<textarea disabled placeholder="textarea[disabled]"></textarea>
<textarea readonly>textarea[readonly]</textarea>

<label class="flex-middle"><input type="radio" name="gender" checked disabled/><span disabled>Male</span></label>
<label class="flex-middle"><input type="radio" name="gender" disabled/><span disabled>Female</span></label>
<label class="flex-middle"><input type="checkbox" disabled/><span disabled>I agree to terms.</span></label>

Radio and checkbox cannot set to `readonly`.

<select disabled>
  <option disabled selected value> -- select -- </option>
  <option>China</option>
  <option>USA</option>
</select>

Select inputs cannot set to `readonly`.

<input type="file" disabled/>

File inputs cannot set to `readonly`.

<input type="button" class="btn" value=".btn" disabled/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>

<a href="javascript:void(0);" class="btn" disabled>.btn</a>
<a href="javascript:void(0);" class="btn btn-primary" disabled>.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger" disabled>.btn.btn-danger</a>

Buttons cannot set to `readonly`.

<input type="datetime-local" disabled/>
<input type="datetime-local" readonly value="2016-12-31T12:59"/>

<input type="color" disabled/>
<input type="range" min="1" max="99" step="2" disabled/>
<input type="image" src="assets/img/xcatliu.png" alt="xcatliu" width="64" disabled/>
<input type="hidden" disabled/>
<input type="color" value="#ff0000" readonly/>
<input type="range" min="1" max="99" step="2" value="15" readonly/>

`[type=image]`, `[type=color]` and `[type=hidden]` cannot set to `readonly`.

### Fieldset in Form

<fieldset>
  <legend>Basic info</legend>
  <input type="text" placeholder="Name">
  <input type="number" placeholder="Age">
</fieldset>

</form>

  </div>
</div>

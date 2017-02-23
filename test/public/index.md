# Reference

Classes:

- [`.container`](#layout)
- [`.top-gap`](#top-gap), [`.top-gap-big`](#top-gap), [`.top-gap-0`](#top-gap)
- [`.flex-left`](#flexbox), [`.flex-center`](#flexbox), [`.flex-right`](#flexbox), [`.flex-top`](#flexbox), [`.flex-middle`](#flexbox), [`.flex-bottom`](#flexbox)
- [`.flex-vertical`](#flex-vertical)
- [`.unit`](#units), [`.unit-1-2`](#units), [`.unit-1-3`](#units), [`.unit-1-4`](#units), [`.unit-2-3`](#units), [`.unit-3-4`](#units), [`.unit-0`](#units)
- [`.units-gap`](#units-gap)
- [`.scroll-view`](#scroll-view)
- [`.hide-on-mobile`](#hide-on-mobile), [`show-on-mobile`](#hide-on-mobile)
- [`.text-left`](#inline-text-semantics), [`.text-center`](#inline-text-semantics), [`text-right`](#inline-text-semantics)
- [`.text-danger`](#inline-text-semantics), [`.text-small`](#inline-text-semantics)
- [`.table`](#table-content)
- [`.form`](#forms), [`.btn`](#buttons), [`.btn-danger`](#buttons), [`.btn-primary`](#buttons)

Elemens:

- [Content Sectioning](#content-sectioning)
- [Text Content](#text-content)
- [Inline Text Semantics](#inline-text-semantics)
- [Multimedia](#multimedia)
- [Table Content](#table-content)
- [Forms](#forms)

## Content Sectioning

### Layout

Use `.container` to create a container which contains all of your content.

Please checkout the source of this page, it should be like this:

```html
<body>
  <div class="flex-center">
    <div class="container">
      <h1>Mobi.css</h1>
    </div>
  </div>
</body>
```

<a id="top-gap"></a>

Use `.top-gap`, `.top-gap-big` and `.top-gap-0` to override `margin-top`:

<div class="top-gap site-box">div.top-gap</div>
<p class="top-gap-0 site-box">p.top-gap-0</p>
<section class="top-gap-big site-box">section.top-gap-big</section>

<a id="scroll-view"></a>

Use `.scroll-view` to make a block element scrollable:

<div class="top-gap scroll-view" style="max-height:400px;">

## 琵琶行

<address>作者：白居易</address>

浔阳江头夜送客，枫叶荻花秋瑟瑟。  
主人下马客在船，举酒欲饮无管弦。  
醉不成欢惨将别，别时茫茫江浸月。  
忽闻水上琵琶声，主人忘归客不发。  
寻声暗问弹者谁？琵琶声停欲语迟。  
移船相近邀相见，添酒回灯重开宴。  
千呼万唤始出来，犹抱琵琶半遮面。  
转轴拨弦三两声，未成曲调先有情。  
弦弦掩抑声声思，似诉平生不得志。  
低眉信手续续弹，说尽心中无限事。  
轻拢慢捻抹复挑，初为霓裳后六幺。  
大弦嘈嘈如急雨，小弦切切如私语。  
嘈嘈切切错杂弹，大珠小珠落玉盘。  
间关莺语花底滑，幽咽泉流冰下难。  
冰泉冷涩弦凝绝，凝绝不通声暂歇。  
别有幽愁暗恨生，此时无声胜有声。  
银瓶乍破水浆迸，铁骑突出刀枪鸣。  
曲终收拨当心画，四弦一声如裂帛。  
东船西舫悄无言，唯见江心秋月白。  
沉吟放拨插弦中，整顿衣裳起敛容。  
自言本是京城女，家在虾蟆陵下住。  
十三学得琵琶成，名属教坊第一部。  
曲罢曾教善才服，妆成每被秋娘妒。  
五陵年少争缠头，一曲红绡不知数。  
钿头银篦击节碎，血色罗裙翻酒污。  
今年欢笑复明年，秋月春风等闲度。  
弟走从军阿姨死，暮去朝来颜色故。  
门前冷落鞍马稀，老大嫁作商人妇。  
商人重利轻别离，前月浮梁买茶去。  
去来江口守空船，绕船月明江水寒。  
夜深忽梦少年事，梦啼妆泪红阑干。  
我闻琵琶已叹息，又闻此语重唧唧。  
同是天涯沦落人，相逢何必曾相识！  
我从去年辞帝京，谪居卧病浔阳城。  
浔阳地僻无音乐，终岁不闻丝竹声。  
住近湓江地低湿，黄芦苦竹绕宅生。  
其间旦暮闻何物？杜鹃啼血猿哀鸣。  
春江花朝秋月夜，往往取酒还独倾。  
岂无山歌与村笛？呕哑嘲哳难为听。  
今夜闻君琵琶语，如听仙乐耳暂明。  
莫辞更坐弹一曲，为君翻作琵琶行。  
感我此言良久立，却坐促弦弦转急。  
凄凄不似向前声，满座重闻皆掩泣。  
座中泣下谁最多？江州司马青衫湿。

</div>

<div class="top-gap scroll-view">
  <div style="width:1024px;">
    <img src="assets/img/xcatliu.png" height="64"/>
    <img src="assets/img/mobi-logo-512.png" height="64"/>
    <img src="assets/img/xcatliu.png" height="64"/>
    <img src="assets/img/mobi-logo-512.png" height="64"/>
    <img src="assets/img/xcatliu.png" height="64"/>
    <img src="assets/img/mobi-logo-512.png" height="64"/>
    <img src="assets/img/xcatliu.png" height="64"/>
    <img src="assets/img/mobi-logo-512.png" height="64"/>
    <img src="assets/img/xcatliu.png" height="64"/>
    <img src="assets/img/mobi-logo-512.png" height="64"/>
    <img src="assets/img/xcatliu.png" height="64"/>
    <img src="assets/img/mobi-logo-512.png" height="64"/>
    <img src="assets/img/xcatliu.png" height="64"/>
    <img src="assets/img/mobi-logo-512.png" height="64"/>
  </div>
</div>

<a id="hide-on-mobile"></a>

Using `hide-on-mobile` or `show-on-mobile` to hide or show elements on mobile devices:

<p class="hide-on-mobile">This part will hide on mobile devices.</p>

<p class="show-on-mobile">This part will only show on mobile devices.</p>

### Units

Use `unit`, `unit-1-2`, `unit-1-3`, `unit-1-4`, `unit-2-3`, `unit-3-4` and `unit-0` to achieve a grid syatem:

<div class="flex-left top-gap">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left top-gap">
  <div class="unit-1-2 site-box">.unit-1-2</div>
  <div class="unit-1-2 site-box">.unit-1-2</div>
</div>
<div class="flex-left">
  <div class="unit-1-3 site-box">.unit-1-3</div>
  <div class="unit-2-3 site-box">.unit-2-3</div>
</div>
<div class="flex-left">
  <div class="unit-1-4 site-box">.unit-1-4</div>
  <div class="unit-3-4 site-box">.unit-3-4</div>
</div>
<div class="flex-left">
  <div class="unit-1-2 site-box">.unit-1-2</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>
<div class="flex-left top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>

<a id="units-gap"></a>

Use `units-gap` to add gap between each `unit`:

<div class="flex-left units-gap top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left units-gap">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>

If there is no `units-gap` class in the parent element, the child element will has the same behave no matter you use `unit-0` or not:

<div class="flex-left top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>
<div class="flex-left top-gap">
  <div class="site-box">empty div</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left">
  <div class="unit site-box">.unit</div>
  <div class="site-box">empty div</div>
</div>

### Flexbox

Use `flex-left`, `flex-center`, `flex-right`, `flex-top`, `flex-middle` and `flex-bottom` to align block elements:

<div class="flex-left site-box top-gap" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-center site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-right site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-top site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-middle site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-bottom site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-center flex-middle site-box" style="height:60px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>

<a id="flex-vertical"></a>

Use `flex-vertical` to achieve vertical flexbox layout:

<div class="flex-vertical site-box top-gap" style="height:300px;">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>

Aligning also works on vertical flexbox:

<div class="flex-vertical flex-left site-box top-gap" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-center site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-right site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-top site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-middle site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-vertical flex-bottom site-box" style="height:200px;">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>

### Headings

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
  <dt>Mobi.css</dt>
  <dd>A lightweight, flexible css framework that focus on mobile.</dd>
  <dt>Bootstrap</dt>
  <dd>The world's most popular mobile-first and responsive front-end framework.</dd>
</dl>

<pre><code>// Use &lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt; to create code blocks.
document.write('Hello World');</code></pre>

<blockquote>
  <p>Use &lt;blockquote&gt; to create block quotation.</p>
</blockquote>

Use `<hr>` to create horizontal rules:

<hr/>

Use `<figure>` and `<figcaption>` to create self-contained content:

<figure>
  <img src="assets/img/mobi-logo-512.png" alt="Mobi.css Logo"/>
  <figcaption>Figure caption: Mobi.css Logo</figcaption>
</figure>

## Inline Text Semantics

Use `class="text-left"`, `class="text-center"` or `class="text-right"` to align text:

<div class="text-left top-gap">我是小雨</div>
<div class="text-center">我愛你</div>
<div class="text-right">你愛我嗎？</div>

Use `class="text-danger"` to create <span class="text-danger">danger text</span>.

Use `class="text-small"` to create <span class="text-small">small text</span>.

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

Use `<span>` to create inline container: I <span style="color:red;">love</span> Mobi.css.

Use `<abbr>` to create <abbr title="The HTML <abbr> element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it.">abbreviation elements</abbr>.

Use `<cite>` to create citation elements: <cite><a href="http://getmobicss.com">Mobi.css</a></cite>.

Use `<data>` to link a given content with a machine-readable translation: <data value="100000">Beijing</data>.

Use `<time>` to create time: <time datetime="2016-09-30T00:00">Sep 30</time>.

Use `<q>` to create inline quotations: <q>I love Mobi.css</q>, xcatliu said.

Use `<ruby>`, `<rp>`, `<rt>` to create ruby annotations:

<ruby>
  我 <rp>(</rp><rt>lǎn</rt><rp>)</rp>
  去 <rp>(</rp><rt>de</rt><rp>)</rp>
  洗 <rp>(</rp><rt>lǐ</rt><rp>)</rp>
  澡 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
  了 <rp>(</rp><rt>le</rt><rp>)</rp>
</ruby>

Use `<bdi>` to create text that be formatted in a <bdi>DIFFERENT DIRECTION</bdi> from other text outside it.  
Use `<bdo>` to <bdo dir="rtl">OVERRIDE</bdo> the current directionality of text.

`<bdi>` is not working in iOS and Chrome. Don't use it in your project, use `<bdo>` instead.

Use `<dfn>` to create a defining instance of a term:  
<dfn id="dfn-mobicss">Mobi.css</dfn> is a lightweight, flexible css framework that focus on mobile.  
What is Mobi.css? You can find the definition <a href="#dfn-mobicss">here</a>.

Use `<var>` to create a variable in a mathematical expression or a programming context:

A simple equation: <var>x</var> = <var>y</var> + 2

Use `<wbr/>` to create a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location:

http://this<wbr/>.is<wbr/>.a<wbr/>.really<wbr/>.long<wbr/>.example<wbr/>.com/With<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages

## Multimedia

![Mobi.css Logo](assets/img/mobi-logo-512.png)

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

`<datalist>` is not supported in iOS. Don't use this in your project.

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
<button type="submit" class="btn btn-danger">.btn.btn-danger></button>

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

`[type=week]` is not supported in iOS. Don't use this in your project.

### Other Inputs

<input type="color"/>
<input type="range" min="1" max="99" step="2"/>
<input type="image" src="assets/img/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>

`[type=color]` is not supported in iOS. Don't use this in your project.

<meter min="0" max="100" value="37">37 degrees</meter>

`<meter>` is not supported in iOS. Don't use this in your project.

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

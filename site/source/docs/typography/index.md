# Typography

This page lists all possible typographic elements.

## Headings

# h1. Mobi.css heading
## h2. Mobi.css heading
### h3. Mobi.css heading
#### h4. Mobi.css heading
##### h5. Mobi.css heading
###### h6. Mobi.css heading

## Inline text elements

Use `<a>` to create <a href="#Inline-text-elements">links</a>.</p>

Use `<strong>` to create <strong>strong importance text</strong>.  
Use `<b>` to create <b>bold text</b>.</p>

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

Use `<ruby>`, `<rp>`, `<rb>`, `<rt>`, `<rbc>` and `<rtc>` to create ruby annotations:  
{% raw %}
<ruby>
  我 <rp>(</rp><rt>lǎn</rt><rp>)</rp>
  去 <rp>(</rp><rt>de</rt><rp>)</rp>
  洗 <rp>(</rp><rt>lǐ</rt><rp>)</rp>
  澡 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
  了 <rp>(</rp><rt>le</rt><rp>)</rp>
</ruby>
<ruby>
  <rbc>
    <rb>旧</rb>
    <rb>金</rb>
    <rb>山</rb>
  </rbc>
  <rtc>
    <rt>jiù</rt>
    <rt>jīn</rt>
    <rt>shān</rt>
  </rtc>
  <rtc>San Francisco</rtc>
</ruby>
{% endraw %}

Use `<bdi>` to create text that be formatted in a <bdi>DIFFERENT DIRECTION</bdi> from other text outside it.  
Use `<bdo>` to <bdo dir="rtl">OVERRIDE</bdo> the current directionality of text.

Use `<dfn>` to create a defining instance of a term:  
<dfn id="dfn-mobicss">Mobi.css</dfn> is a lightweight, flexible css framework that focus on mobile.  
What is Mobi.css? You can find the definition [here](#dfn-mobicss).

Use `<var>` to create a variable in a mathematical expression or a programming context:  
A simple equation: <var>x</var> = <var>y</var> + 2

Use `<wbr>` to create a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location:  
{% raw %}
http://this<wbr>.is<wbr>.a<wbr>.really<wbr>.long<wbr>.example<wbr>.com/With<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages
{% endraw %}

## Blockquotes

{% raw %}
<blockquote>
  <p>A lightweight, flexible css framework that focus on mobile.</p>
</blockquote>
{% endraw %}

## Code blocks

{% raw %}
<pre><code>// Use &lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt; to create code blocks.
document.write('Hello World');</code></pre>
{% endraw %}

## Lists

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

## Horizontal rules

{% raw %}
<hr/>
{% endraw %}

## Figure elements

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

## Multimedia

Mobi.css Logo:

![Mobi.css Logo](../../assets/mobi-logo-512.png)

Croatian Rhapsody:

{% raw %}
<div class="top-gap">
  <audio controls>
    <source src="../../assets/croatian-rhapsody.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>
{% endraw %}

[Big Buck Bunny](http://www.bigbuckbunny.org/):

{% raw %}
<div class="top-gap">
  <video controls>
    <source src="../../assets/big-buck-bunny.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>
</div>
{% endraw %}

[Warcraft III Intro on YouTube](https://www.youtube.com/watch?v=c2vm-QjK2xQ):

{% raw %}
<div class="top-gap">
  <iframe width="100%" height="320" src="https://www.youtube.com/embed/c2vm-QjK2xQ" frameborder="0" allowfullscreen></iframe>
</div>
{% endraw %}

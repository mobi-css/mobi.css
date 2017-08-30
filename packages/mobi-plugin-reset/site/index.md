# Reset

> Reset styles makes browsers render all elements more consistently.

## Features

Mobi.css improves [Normalizs.css](https://necolas.github.io/normalize.css/) by optimizing some details for the mobile devices.

- Friendly to content-rich webpage
- Do not reset form input and table
- Follow the rules of margin-top only

Nearly all margins in Mobi.css have a `0` value for `margin-bottom`. For vertical spacing, Mobi.css use `margin-top` to make content flow clearly.

This technique allows each section to determine the spacing it needs from the element above it.

There are only two sizes of `margin-top`. One is `15px`, the other is `30px`. The `margin-top` of heading is set to `30px` while other block elements is `15px`.

Here are the example of common elements.

## Headings

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

<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

<pre><code>// Use &lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt; to create code blocks.
document.write('Hello World');</code></pre>

<blockquote>
  <p>Use &lt;blockquote&gt; to create block quotation.</p>
</blockquote>

```html
<blockquote>
  <p>Use <blockquote> to create block quotation.</p>
</blockquote>
```

Use `<hr>` to create horizontal rules:

<hr/>

Use `<figure>` and `<figcaption>` to create self-contained content:

<figure>
  <img src="http://getmobicss.com/img/mobi-logo.png" height="200" alt="Mobi.css Logo"/>
  <figcaption>Figure caption: Random Image</figcaption>
</figure>

```html
<figure>
  <img src="http://getmobicss.com/img/mobi-logo.png" height="200" alt="Mobi.css Logo"/>
  <figcaption>Figure caption: Mobi.css Logo</figcaption>
</figure>
```

## Inline text semantics

Use `<a>` to create <a href="#">links</a>.

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

<ruby>
  我 <rp>(</rp><rt>lǎn</rt><rp>)</rp>
  去 <rp>(</rp><rt>de</rt><rp>)</rp>
  洗 <rp>(</rp><rt>lǐ</rt><rp>)</rp>
  澡 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
  了 <rp>(</rp><rt>le</rt><rp>)</rp>
</ruby>

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
<dfn id="dfn-mobicss">Mobi.css</dfn> is a lightweight, flexible css framework with focus on mobile.
What is Mobi.css? You can find the definition <a href="#dfn-mobicss">here</a>.
```

Use `<var>` to create a variable in a mathematical expression or a programming context:

A simple equation: <var>x</var> = <var>y</var> + 2

```html
A simple equation: <var>x</var> = <var>y</var> + 2
```

Use `<wbr/>` to create a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location:

http://this<wbr/>.is<wbr/>.a<wbr/>.really<wbr/>.long<wbr/>.example<wbr/>.com/With<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages

```html
http://this<wbr/>.is<wbr/>.a<wbr/>.really<wbr/>.long<wbr/>.example<wbr/>.com/With<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages
```

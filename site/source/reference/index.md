# Reference

Classes:

- [`.container`](#Layout)
- [`.top-gap`](#top-gap), [`.top-gap-big`](#top-gap), [`.top-gap-0`](#top-gap)
- [`.flex-left`](#Flexbox), [`.flex-center`](#Flexbox), [`.flex-right`](#Flexbox), [`.flex-top`](#Flexbox), [`.flex-middle`](#Flexbox), [`.flex-bottom`](#Flexbox)
- [`.flex-vertical`](#flex-vertical)
- [`.unit`](#Units), [`.unit-1-2`](#Units), [`.unit-1-3`](#Units), [`.unit-1-4`](#Units), [`.unit-2-3`](#Units), [`.unit-3-4`](#Units), [`.unit-0`](#Units)
- [`.units-gap`](#units-gap)
- [`.scroll-view`](#scroll-view)
- [`.hide-on-mobile`](#hide-on-mobile), [`show-on-mobile`](#hide-on-mobile)
- [`.text-left`](#Inline-text-semantics), [`.text-center`](#Inline-text-semantics), [`text-right`](#Inline-text-semantics)
- [`.table`](#Table-content)
- [`.form`](#Forms)

Elemens:

- [Content sectioning](#Content-sectioning)
- [Text content](#Text-content)
- [Inline text semantics](#Inline-text-semantics)
- [Multimedia](#Multimedia)
- [Table content](#Table-content)
- [Forms](#Forms)

## Content sectioning

### Layout

Use `.container` to create a container which contains all of your content.

![layout](/assets/img/layout.jpg)

```html
<body>
  <div class="flex-center">
    <div class="container">
      <h1>Mobi.css</h1>
    </div>
  </div>
</body>
```

![layout-with-side](/assets/img/layout-with-side.jpg)

```html
<body>
  <div class="flex-center">
    <div class="container">
      <h1>Mobi.css</h1>
    </div>
    <aside class="hide-on-mobile" style="padding:0 28px;">
      <p>Scan to view on mobile</p>
      <img src="path/to/qrcode.png"/>
    </aside>
  </div>
</body>
```

Use `<article>`, `<aside>`, `<footer>`, `<header>`, `<nav>` and `<section>` to layout:

{% raw %}
<div class="flex-center top-gap site-box">
  <div class="unit-1-2 flex-vertical" style="height:300px;">
    <header class="site-box">&lt;header&gt;</header>
    <nav class="site-box">&lt;nav&gt;</nav>
    <section class="site-box">&lt;section&gt;</section>
    <article class="unit site-box">&lt;article&gt;</article>
    <footer class="site-box">&lt;footer&gt;</footer>
  </div>
  <aside class="site-box">&lt;aside&gt;</aside>
</div>
{% endraw %}

<a id="top-gap"></a>

Use `.top-gap`, `.top-gap-big` and `.top-gap-0` to override `margin-top`:

{% raw %}
<div class="top-gap site-box">div.top-gap</div>
<p class="top-gap-0 site-box">p.top-gap-0</p>
<section class="top-gap-big site-box">section.top-gap-big</section>
{% endraw %}

```html
<div class="top-gap site-box">div.top-gap</div>
<p class="top-gap-0 site-box">p.top-gap-0</p>
<section class="top-gap-big site-box">section.top-gap-big</section>
```

<a id="scroll-view"></a>

Use `.scroll-view` to make a block element scrollable:

{% raw %}
<div class="top-gap scroll-view" style="max-height:400px;">
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
<div class="top-gap scroll-view" style="max-height:400px;">
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

{% raw %}
<div class="top-gap scroll-view">
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
<div class="top-gap scroll-view">
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

<a id="hide-on-mobile"></a>

Using `hide-on-mobile` or `show-on-mobile` to hide or show elements on mobile devices:

{% raw %}
<p class="hide-on-mobile">This part will hide on mobile devices.</p>
{% endraw %}

```html
<p class="hide-on-mobile">This part will hide on mobile devices.</p>
```

{% raw %}
<p class="show-on-mobile">This part will only show on mobile devices.</p>
{% endraw %}

```html
<p class="show-on-mobile">This part will only show on mobile devices.</p>
```

### Units

Use `unit`, `unit-1-2`, `unit-1-3`, `unit-1-4`, `unit-2-3`, `unit-3-4` and `unit-0` to achieve a grid syatem:

{% raw %}
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
{% endraw %}

```html
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
```

<a id="units-gap"></a>

Use `units-gap` to add gap between each `unit`:

{% raw %}
<div class="flex-left units-gap top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left units-gap">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>
{% endraw %}

```html
<div class="flex-left units-gap top-gap">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left units-gap">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box">.unit-0</div>
</div>
```

If there is no `units-gap` class in the parent element, the child element will has the same behave no matter you use `unit-0` or not:

{% raw %}
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
{% endraw %}

```html
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
```

### Flexbox

Use `flex-left`, `flex-center`, `flex-right`, `flex-top`, `flex-middle` and `flex-bottom` to align block elements:

{% raw %}
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
{% endraw %}

```html
<div class="flex-left site-box top-gap">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-center site-box">
  <div class="unit-1-3 site-box">.unit-1-3</div>
</div>
<div class="flex-right site-box">
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
```

<a if="flex-vertical"></a>

Use `flex-vertical` to achieve vertical flexbox layout:

{% raw %}
<div class="flex-vertical site-box top-gap" style="height:300px;">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>
{% endraw %}

```html
<div class="flex-vertical site-box top-gap" style="height:300px;">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>
```

Aligning also works on vertical flexbox:

{% raw %}
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
{% endraw %}

```html
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
```

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
  <img src="/assets/img/mobi-logo-512.png" alt="Mobi.css Logo"/>
  <figcaption>Figure caption: Mobi.css Logo</figcaption>
</figure>
{% endraw %}

```html
<figure>
  <img src="/assets/img/mobi-logo-512.png" alt="Mobi.css Logo"/>
  <figcaption>Figure caption: Mobi.css Logo</figcaption>
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

Use `<wbr/>` to create a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location:

{% raw %}
http://this<wbr/>.is<wbr/>.a<wbr/>.really<wbr/>.long<wbr/>.example<wbr/>.com/With<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages
{% endraw %}

```html
http://this<wbr/>.is<wbr/>.a<wbr/>.really<wbr/>.long<wbr/>.example<wbr/>.com/With<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages<wbr/>/deeper<wbr/>/level<wbr/>/pages
```

## Multimedia

![Mobi.css Logo](/assets/img/mobi-logo-512.png)

{% raw %}
<p>
  <audio controls>
    <source src="/assets/croatian-rhapsody.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</p>
{% endraw %}

```html
<audio controls>
  <source src="/assets/croatian-rhapsody.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

{% raw %}
<p>
  <video controls>
    <source src="/assets/big-buck-bunny.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>
</p>
{% endraw %}

```html
<video controls>
  <source src="/assets/big-buck-bunny.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

{% raw %}
<p>
  <iframe width="100%" height="240" src="https://www.youtube.com/embed/wvYXoyxLv64" frameborder="0" allowfullscreen></iframe>
</p>
{% endraw %}

```html
<iframe width="100%" height="320" src="https://www.youtube.com/embed/wvYXoyxLv64" frameborder="0" allowfullscreen></iframe>
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
{% endraw %}

```html
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
<input type="week"/>
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
<input type="image" src="/assets/img/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>
{% endraw %}

```html
<input type="color"/>
<input type="range" min="1" max="99" step="2"/>
<input type="image" src="/assets/img/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>
```

`[type=color]` is not supported in iOS. Don't use this in your project.

{% raw %}
<meter min="0" max="100" value="37">37 degrees</meter>
{% endraw %}

```html
<meter min="0" max="100" value="37">37 degrees</meter>
```

`<meter>` is not supported in iOS. Don't use this in your project.

{% raw %}
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
<input type="image" src="/assets/img/xcatliu.png" alt="xcatliu" width="64" disabled/>
<input type="hidden" disabled/>
<input type="color" value="#ff0000" readonly/>
<input type="range" min="1" max="99" step="2" value="15" readonly/>
{% endraw %}

```html
<input type="color" disabled/>
<input type="range" min="1" max="99" step="2" disabled/>
<input type="image" src="/assets/img/xcatliu.png" alt="xcatliu" width="64" disabled/>
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

## What's next

- [Extensions](../extensions): Plugins, themes, etc
- [GitHub](https://github.com/xcatliu/mobi.css): Open an issue, contributing to Mobi.css

<div class="flex-center">
  <div class="container">
    <h1>Mobi.css Layout</h1>
    <h2>Container</h2>
    <p>Try to change the browser width!</p>
  </div>
</div>

<div class="flex-center">
  <div class="container bg-primary text-inverse">
    <h3>Container</h3>

```html
<div class="flex-center">
  <div class="container bg-primary text-inverse">
    <h3>Container</h3>
  </div>
</div>
```

  </div>
</div>

<div class="flex-center">
  <div class="container-wider bg-success text-inverse">
    <h3>Wider Container</h3>

```html
<div class="flex-center">
  <div class="container-wider bg-success text-inverse">
    <h3>Wider Container</h3>
  </div>
</div>
```

  </div>
</div>

<div class="flex-center">
  <div class="container-fluid bg-warning text-inverse">
    <h3>Fluid Container</h3>

```html
<div class="flex-center">
  <div class="container-fluid bg-success text-inverse">
    <h3>Fluid Container</h3>
  </div>
</div>
```

  </div>
</div>

<div class="flex-center">
  <div class="container-wider bg-success text-inverse">
    <h3>Container Nesting - Wider Container Outside</h3>
    <div class="flex-center units-gap-big">
      <div class="container bg-primary unit-0">
        <h4>Container Inside</h4>

```html
<div class="flex-center">
  <div class="container-wider bg-success text-inverse">
    <h3>Container Nesting - Wider Container Outside</h3>
    <div class="flex-center units-gap-big">
      <div class="container bg-primary unit-0">
        <h4>Container Inside</h4>
      </div>
      <div class="hide-on-mobile bg-danger unit">
        <h4>Sidebar</h4>
        <p>This sidebar can auto adapt it's width.</p>
        <p>This will hide on mobile.</p>
      </div>
    </div>
  </div>
</div>
```

</div>
      <div class="hide-on-mobile bg-danger unit">
        <h4>Sidebar</h4>
        <p>This sidebar can auto adapt it's width</p>
        <p>This will hide on mobile.</p>
      </div>
    </div>
  </div>
</div>

<div class="flex-center">
  <div class="container-fluid bg-warning text-inverse">
    <h3>3 Column Layout - Fluid Container Outside</h3>
    <div class="flex-center units-gap-big">
      <div class="unit-0 bg-danger hide-on-mobile" style="width: 300px">
        <h4>Left Sidebar</h4>
      </div>
      <div class="unit bg-primary">
        <h4>Container Inside</h4>

```html
<div class="flex-center">
  <div class="container-fluid bg-warning text-inverse">
    <h3>3 Column Layout - Fluid Container Outside</h3>
    <div class="flex-center units-gap-big">
      <div class="unit-0 bg-danger hide-on-mobile" style="width: 300px">
        <h4>Left Sidebar</h4>
      </div>
      <div class="unit bg-primary">
        <h4>Container Inside</h4>
      </div>
      <div class="unit-0 bg-danger hide-on-mobile" style="width: 300px">
        <h4>Right Sidebar</h4>
      </div>
    </div>
  </div>
</div>
```

</div>
      <div class="unit-0 bg-danger hide-on-mobile" style="width: 300px">
        <h4>Right Sidebar</h4>
      </div>
    </div>
  </div>
</div>

<div class="flex-center">
  <div class="container">
  
## Flexbox

<div class="flex-left top-gap">
  <div class="unit bg-success-faded">.unit</div>
  <div class="unit bg-danger-faded">.unit</div>
</div>
<div class="flex-left top-gap">
  <div class="unit bg-success-faded">.unit</div>
  <div class="unit bg-danger-faded">.unit</div>
  <div class="unit bg-success-faded">.unit</div>
</div>

<div class="flex-left units-gap top-gap">
  <div class="unit bg-success-faded">.units-gap > .unit</div>
  <div class="unit bg-danger-faded">.units-gap > .unit</div>
  <div class="unit bg-success-faded">.units-gap > .unit</div>
  <div class="unit bg-danger-faded">.units-gap > .unit</div>
</div>
<div class="flex-left units-gap-big top-gap">
  <div class="unit bg-success-faded">.units-gap-big > .unit</div>
  <div class="unit bg-danger-faded">.units-gap-big > .unit</div>
  <div class="unit bg-success-faded">.units-gap-big > .unit</div>
  <div class="unit bg-danger-faded">.units-gap-big > .unit</div>
  <div class="unit bg-success-faded">.units-gap-big > .unit</div>
</div>

<div class="flex-left top-gap">
  <div class="unit-1-2 bg-success-faded">.unit-1-2</div>
  <div class="unit-1-2 bg-danger-faded">.unit-1-2</div>
</div>
<div class="flex-left top-gap">
  <div class="unit-1-3 bg-success-faded">.unit-1-3</div>
  <div class="unit-2-3 bg-danger-faded">.unit-2-3</div>
</div>
<div class="flex-left top-gap">
  <div class="unit-1-4 bg-success-faded">.unit-1-4</div>
  <div class="unit-3-4 bg-danger-faded">.unit-3-4</div>
</div>
<div class="flex-left top-gap">
  <div class="unit-1-2 bg-success-faded">.unit-1-2</div>
  <div class="unit-1-4 bg-danger-faded">.unit-1-4</div>
</div>
  
<div class="flex-left top-gap">
  <div class="unit-0 bg-success-faded" style="width: 100px;">.unit-0</div>
  <div class="unit bg-danger-faded">.unit</div>
</div>

<div class="flex-left bg-success-faded top-gap">
  <div class="bg-success-faded">.flex-left > div</div>
</div>
<div class="flex-center bg-success-faded top-gap">
  <div class="bg-success-faded">.flex-center > div</div>
</div>
<div class="flex-right bg-success-faded top-gap">
  <div class="bg-success-faded">.flex-right > div</div>
</div>
<div class="flex-top bg-success-faded top-gap" style="height:60px;">
  <div class="bg-success-faded">.flex-top > div</div>
</div>
<div class="flex-middle bg-success-faded top-gap" style="height:60px;">
  <div class="bg-success-faded">.flex-middle > div</div>
</div>
<div class="flex-bottom bg-success-faded top-gap" style="height:60px;">
  <div class="bg-success-faded">.flex-bottom > div</div>
</div>
<div class="flex-center flex-middle bg-success-faded top-gap" style="height:60px;">
  <div class="bg-success-faded">.flex-center.flex-middle > div</div>
</div>

<div class="flex-vertical top-gap" style="height:200px;">
  <div class="unit-0 bg-success-faded">.unit-0</div>
  <div class="unit bg-danger-faded">.unit</div>
  <div class="unit-1-4 bg-success-faded">.unit-1-4</div>
</div>

## Top Gap

<div class="top-gap bg-success-faded">div.top-gap</div>
<p class="top-gap-0 bg-danger-faded">p.top-gap-0</p>
<section class="top-gap-big bg-success-faded">section.top-gap-big</section>

## Scroll View

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
    <img src="../assets/img/xcatliu.png" height="64"/>
    <img src="../assets/img/mobi-logo-512.png" height="64"/>
    <img src="../assets/img/xcatliu.png" height="64"/>
    <img src="../assets/img/mobi-logo-512.png" height="64"/>
    <img src="../assets/img/xcatliu.png" height="64"/>
    <img src="../assets/img/mobi-logo-512.png" height="64"/>
    <img src="../assets/img/xcatliu.png" height="64"/>
    <img src="../assets/img/mobi-logo-512.png" height="64"/>
    <img src="../assets/img/xcatliu.png" height="64"/>
    <img src="../assets/img/mobi-logo-512.png" height="64"/>
    <img src="../assets/img/xcatliu.png" height="64"/>
    <img src="../assets/img/mobi-logo-512.png" height="64"/>
    <img src="../assets/img/xcatliu.png" height="64"/>
    <img src="../assets/img/mobi-logo-512.png" height="64"/>
  </div>
</div>

## Show or Hide on Mobile

<p class="hide-on-mobile">This part will hide on mobile devices.</p>

<p class="show-on-mobile">This part will only show on mobile devices.</p>

  </div>
</div>

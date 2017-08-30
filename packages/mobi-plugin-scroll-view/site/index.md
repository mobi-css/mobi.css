# Scroll view

> Make a block element scrollable.

## Vertical scroll

Use `.scroll-view` to make a block element scrollable.

You need to manually set the `height` or `max-height` for it.

<div class="top-gap scroll-view" style="height:300px;">
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

```html
<div class="scroll-view" style="height:300px;">
  <h2>琵琶行</h2>
  <address>作者：白居易</address>
  <p>
    浔阳江头夜送客，枫叶荻花秋瑟瑟。<br/>
    ...<br/>
    座中泣下谁最多？江州司马青衫湿。
  </p>
</div>
```

## Horizontal scroll

If content inside `.scroll-view` is wider than the `.scroll-view` element, then it will be horizontal scrollable.

<div class="top-gap scroll-view">
  <div style="width:1000px;">
    <img src="https://unsplash.it/200/150"/><img src="https://unsplash.it/300/150/"/><img src="https://unsplash.it/100/150/"/><img src="https://unsplash.it/400/150/"/>
  </div>
</div>

```html
<div class="top-gap scroll-view">
  <div style="width:1000px;">
    <img src=""/><img src=""/><img src=""/><img src=""/>
  </div>
</div>
```

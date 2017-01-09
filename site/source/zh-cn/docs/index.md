# 文档

- [布局](#布局)
- [Flexbox](#Flexbox)
- [排版](#排版)
- [表格](#表格)
- [表单](#表单)
- [工具](#工具)
- [问答](#问答)

## 布局

大部分 CSS 框架都有响应式布局，使用媒体查询将内容在不同大小屏幕上重新排版，使一个网站能够兼容不同大小屏幕的设备：

![Responsive design](/assets/img/responsive-design.jpg)

这个点子看上去不错，但是不一定适合所有情况。

虽然框架帮你减少了很多工作，但是你还是需要设计各个大小屏幕的设备的样式，代码也会有冗余（比如 Bootstrap 的代码：`<div class="col-xs-12 col-sm-6 col-md-8">`），并且需要在每个设备上进行测试。

如果你想开发一个移动端网页，Mobi.css 提供了一个更简单易行的解决方案。

在移动端设备（宽度小于 768px）上，容器宽度将会充满整个屏幕。

其他情况下，容器将会有一个固定宽度，并且水平居中在屏幕中。这样的话就不会破坏你为移动端设计的样式，而就像在桌面端访问移动端的页面一样。

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

另外你可以给桌面端添加一个侧边栏，用于显示一个额外的不会在移动端显示的信息，比如*扫描可在手机中查看*或*返回顶部*。

![layout-with-side](/assets/img/layout-with-side.jpg)

```html
<body>
  <div class="flex-center">
    <div class="container">
      <h1>Mobi.css</h1>
    </div>
    <aside class="hide-on-mobile" style="padding:0 28px;">
      <p>扫描可在手机中查看</p>
      <img src="path/to/qrcode.png"/>
    </aside>
  </div>
</body>
```

### 只使用 Margin top

在 Mobi.css 中，几乎所有的 `margin-bottom` 都设置成了 `0`，而使用 `margin-top` 来控制垂直间距。

这样能使内容流很明确，每个区块自己觉得它应该和上一个区块的间距是多少。

比如，`<h1>` ~ `<h6>` 的垂直间距是 `32px`，同时 `<p>`, `<ul>`, `<table>` 的垂直间距是 `14px`。

同时，Mobi.css 提供了三个类用来覆盖垂直间距：`top-gap-big`, `top-gap` 和 `top-gap-0`，他们的 `margin-top` 是 `32px`, `14px` 和 `0`。

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

## Flexbox

Mobi.css 使用 Flexbox 布局，你会爱上这个灵活的布局方式的。

根据 [caniuse flexbox](http://caniuse.com/#feat=flexbox)，现在可以在所有移动端设备上和主流桌面端浏览器中使用 Flexbox 了。

### 网格系统

移动端不需要复杂的 12# 网格系统，Mobi.css 提供了一个简单却灵活的网格系统。

首先，你可以创建一个 `flex-left` 作为容器，然后创建一些 `unit` 作为单元。此时 `flex-left` 的宽度会被 `unit` 平分。

{% raw %}
<div class="flex-left top-gap">
  <div class="unit site-box">天王盖地虎</div>
  <div class="unit site-box">宝塔镇河妖</div>
</div>
<div class="flex-left">
  <div class="unit site-box">曹操</div>
  <div class="unit site-box">刘备</div>
  <div class="unit site-box">孙权</div>
</div>
{% endraw %}

```html
<div class="flex-left top-gap">
  <div class="unit site-box">天王盖地虎</div>
  <div class="unit site-box">宝塔镇河妖</div>
</div>
<div class="flex-left">
  <div class="unit site-box">曹操</div>
  <div class="unit site-box">刘备</div>
  <div class="unit site-box">孙权</div>
</div>
```

你可以使用 `units-gap` 类，给 `unit` 之间添加空隙。这在 `unit` 内部有文字的时候很有用。

{% raw %}
<div class="flex-left units-gap top-gap">
  <div class="unit site-box">青龙</div>
  <div class="unit site-box">白虎</div>
  <div class="unit site-box">朱雀</div>
  <div class="unit site-box">玄武</div>
</div>
<div class="flex-left units-gap">
  <div class="unit site-box">金</div>
  <div class="unit site-box">木</div>
  <div class="unit site-box">水</div>
  <div class="unit site-box">火</div>
  <div class="unit site-box">土</div>
</div>
{% endraw %}

```html
<div class="flex-left units-gap top-gap">
  <div class="unit site-box">青龙</div>
  <div class="unit site-box">白虎</div>
  <div class="unit site-box">朱雀</div>
  <div class="unit site-box">玄武</div>
</div>
<div class="flex-left units-gap">
  <div class="unit site-box">金</div>
  <div class="unit site-box">木</div>
  <div class="unit site-box">水</div>
  <div class="unit site-box">火</div>
  <div class="unit site-box">土</div>
</div>
```

然后，你可以使用 `unit-1-2`, `unit-1-3`, `unit-2-3`, `unit-1-4` 和 `unit-3-4` 实现一个 4# 网格系统。

{% raw %}
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
{% endraw %}

```html
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
```

最后，你可以使用 `unit-0` 实现自定义大小的单元，通过 `width` 设置宽度或者让内容决定它的宽度。

{% raw %}
<div class="flex-left units-gap top-gap">
  <div class="unit-0" style="width:62px;"><i class="fa fa-github" style="font-size:56px;"></i></div>
  <div class="unit site-box" style="padding:7px; margin-right:32px;">嗨，流浪小猫，你知道什么是 Mobi.css 吗？</div>
</div>
<div class="flex-left units-gap top-gap">
  <div class="unit site-box" style="padding:7px; margin-left:32px;">我当然知道，Mobi.css 是一个轻量灵活的移动端 CSS 框架。</div>
  <div class="unit-0"><img alt="xcatliu" src="/assets/img/xcatliu.png" width="48"/></div>
</div>
{% endraw %}

```html
<div class="flex-left units-gap top-gap">
  <div class="unit-0" style="width:62px;"><i class="fa fa-github" style="font-size:56px;"></i></div>
  <div class="unit site-box" style="padding:7px; margin-right:32px;">嗨，流浪小猫，你知道什么是 Mobi.css 吗？</div>
</div>
<div class="flex-left units-gap top-gap">
  <div class="unit site-box" style="padding:7px; margin-left:32px;">我当然知道，Mobi.css 是一个轻量灵活的移动端 CSS 框架。</div>
  <div class="unit-0"><img alt="xcatliu" src="/assets/img/xcatliu.png" width="48"/></div>
</div>
```

### 使用 Flexbox 对齐元素

再也不需要 `margin:0 auto;` 和 `top:50%; margin-top:-100px;` 了，你可以简单的使用 Flexbox 实现元素的对齐！

{% raw %}
<div class="flex-left site-box top-gap">
  <div class="site-box">Mobi.css</div>
</div>
<div class="flex-center site-box">
  <div class="site-box">太棒</div>
</div>
<div class="flex-right site-box">
  <div class="site-box">了！</div>
</div>
<div class="flex-top site-box" style="height:60px;">
  <div class="site-box">Mobi.css</div>
</div>
<div class="flex-middle site-box" style="height:60px;">
  <div class="site-box">太棒</div>
</div>
<div class="flex-bottom site-box" style="height:60px;">
  <div class="site-box">了！</div>
</div>
<div class="flex-center flex-middle site-box" style="height:60px;">
  <div class="site-box">Mobi.css 太棒了！</div>
</div>
{% endraw %}

```html
<div class="flex-left site-box top-gap">
  <div class="site-box">Mobi.css</div>
</div>
<div class="flex-center site-box">
  <div class="site-box">太棒</div>
</div>
<div class="flex-right site-box">
  <div class="site-box">了！</div>
</div>
<div class="flex-top site-box" style="height:60px;">
  <div class="site-box">Mobi.css</div>
</div>
<div class="flex-middle site-box" style="height:60px;">
  <div class="site-box">太棒</div>
</div>
<div class="flex-bottom site-box" style="height:60px;">
  <div class="site-box">了！</div>
</div>
<div class="flex-center flex-middle site-box" style="height:60px;">
  <div class="site-box">Mobi.css 太棒了！</div>
</div>
```

### 垂直 Flex 布局

另外，你可以简单的使用 `flex-vertical` 实现垂直 Flex 布局。

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

查看[参考 # Flexbox](../reference/#Flexbox) 获取更多关于 Flexbox 的例子。

## 排版

Mobi.css 专门为基于内容的网站设计了一套简洁又赏心悦目的排版样式。

大部分排版样式是直接重置了默认样式，所以不需要添加额外的类。

这个网站本身就是一个例子。你可以打开开发者工具，看看它们是如何实现的。

查看[参考 # 文本内容](../reference/#文本内容)获取更多关于排版的例子。

## 表格

在移动端设备上，表格很容易就超出了屏幕的显示范围。这时可以用 `scroll-view` 套在表格外面，使它能够滑动。

别忘了给 `<table>` 添加 `class=table`！

{% raw %}
<div class="scroll-view">
  <table class="table">
    <thead>
      <tr><th>名称</th><th>作者</th><th>开发语言</th><th>大小</th><th>特性</th><th>GitHub</th></tr>
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
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>这个项目即将死亡。</s></a></td>
      </tr>
    </tbody>
  </table>
</div>
{% endraw %}

```html
<div class="scroll-view">
  <table class="table">
    <thead>
      <tr><th>名称</th><th>作者</th><th>开发语言</th><th>大小</th><th>特性</th><th>GitHub</th></tr>
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
        <td colspan="5"><a href="https://github.com/twbs/ratchet/issues/792"><s>这个项目即将死亡。</s></a></td>
      </tr>
    </tbody>
  </table>
</div>
```

查看[参考 # 表格内容](../reference/#表格内容)获取更多关于表格的例子。

## 表单

Mobi.css 认为在移动端设备上，**每行应该只有一个输入框**。

你需要给 `<form>` 添加 `class="form"` 并且给每个按钮添加 `class="btn"`。

### 基本表单

{% raw %}
<form class="form" action="#Basic-forms">
  <input type="text" placeholder="姓名"/>
  <input type="password" placeholder="密码"/>
  <label class="flex-middle"><input type="checkbox"/>我同意条款。</label>
  <input class="btn" type="submit" value="注册"/>
</form>
{% endraw %}

```html
<form class="form" action="#Basic-forms">
  <input type="text" placeholder="姓名"/>
  <input type="password" placeholder="密码"/>
  <label class="flex-middle"><input type="checkbox"/>我同意条款。</label>
  <input class="btn" type="submit" value="注册"/>
</form>
```

### 复杂表单

如果你想让一行拥有多个输入框，那么你可以使用网格系统。

{% raw %}
<form class="form" action="#Complicated-forms">
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-name" style="width:85px;">姓名：</label>
    <div class="unit"><input type="text" id="multiple-inputs-name" placeholder="流浪小猫"/></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">性别：</label>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="male"/>男
    </label></div>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="female"/>女
    </label></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">国家：</label>
    <div class="unit">
      <select>
        <option disabled selected value> -- 请选择 -- </option>
        <option>中国</option>
        <option>美国</option>
      </select>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">头像：</label>
    <div class="unit">
      <input type="file"/>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-bio" style="width:85px;">签名：</label>
    <div class="unit">
      <textarea id="multiple-inputs-bio" placeholder="描述你自己"></textarea>
    </div>
  </div>
  <div class="flex-left units-gap">
    <div style="width:85px;"></div>
    <div class="unit">
      <button type="reset" class="btn btn-danger">重置</button>
    </div>
    <div class="unit">
      <button type="submit" class="btn btn-primary">提交</button>
    </div>
  </div>
</form>
{% endraw %}

```html
<form class="form" action="#Complicated-forms">
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-name" style="width:85px;">姓名：</label>
    <div class="unit"><input type="text" id="multiple-inputs-name" placeholder="流浪小猫"/></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">性别：</label>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="male"/>男
    </label></div>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="female"/>女
    </label></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">国家：</label>
    <div class="unit">
      <select>
        <option disabled selected value> -- 请选择 -- </option>
        <option>中国</option>
        <option>美国</option>
      </select>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">头像：</label>
    <div class="unit">
      <input type="file"/>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-bio" style="width:85px;">签名：</label>
    <div class="unit">
      <textarea id="multiple-inputs-bio" placeholder="描述你自己"></textarea>
    </div>
  </div>
  <div class="flex-left units-gap">
    <div style="width:85px;"></div>
    <div class="unit">
      <button type="reset" class="btn btn-danger">重置</button>
    </div>
    <div class="unit">
      <button type="submit" class="btn btn-primary">提交</button>
    </div>
  </div>
</form>
```

**注意**，当你使用 `<label>` 的时候，可以给它添加 `class="flex-middle"`，让它内部的单选框或复选框垂直居中。

### 按钮

在 `.form` 外部也可以使用 `class="btn"`。

给 `<a>` 添加 `class="btn"` 可以让它变成一个按钮。

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

查看[参考 # 表单](../reference/#表单)获取更多关于表单的例子。

## 工具

Mobi.css 还提供了一些有用的工具类。

### 文字对齐

你可以使用 Mobi.css 容易的对齐文字。

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

### 滑动视图

移动端设备的宽度都比较小，所以 `scroll-view` 是很有用的一个类。Mobi.css 优化了 `scroll-view` 使得它滑动起来很流畅。

你可以给 `scroll-view` 设置 `max-height`，来覆盖默认的 `300px` 高度。

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

你也可以给内容设置 `width` 来实现一个水平方向的滑动视图。 

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

### 在移动端隐藏或显示

使用 `hide-on-mobile` 让元素在手机中隐藏或显示：

{% raw %}
<p class="hide-on-mobile">这部分会在手机上隐藏。</p>
{% endraw %}

```html
<p class="hide-on-mobile">这部分会在手机上隐藏。</p>
```

{% raw %}
<p class="show-on-mobile">这部分只会在手机上显示。</p>
{% endraw %}

```html
<p class="show-on-mobile">这部分只会在手机上显示。</p>
```

## 问答

###### 1. 为什么我需要在 `container` 外面包一层 `flex-center`？

实际上，`flex-center` 是为了让 `container` 水平居中。如果你不添加这个外壳，移动端用户不会有任何影响。

当然，你也可以给 `<body>` 添加 `flex-center`，但是我不建议这么做。因为第三方库可能会在 `<body>` 中插入内容，如果给 `<body>` 添加了额外的样式，那么第三方库就比较难控制它们的位置了。

###### 2. 为什么 Mobi.css 不干脆把 `<table>` 的样式也重置了，这样我就不需要添加 `table` 类了？

因为一旦 `<table>` 被重置了，就很难再修改回来了。这也是为了第三方库考虑。同样 `<form>` 也没有被重置。

## 下一步

- [参考](../reference)：一个页面展示所有 Mobi.css 的样式
- [扩展](../extensions)：插件、主题和其他
- [GitHub](https://github.com/xcatliu/mobi.css)：反馈问题，参与贡献

# Top gap

> Set top gaps between block elements.

## Override top gaps

Mobi.css provides three classes, `.top-gap-big`, `.top-gap` and `.top-gap-0` to easily override the top margin.

Setting an element to `.top-gap-big` will make it's `margin-top` to `30px`, while `.top-gap` is `15px` and `top-gap-0` is `0`.

<div class="top-gap">div.top-gap</div>
<p class="top-gap-0">p.top-gap-0</p>
<section class="top-gap-big">section.top-gap-big</section>

```html
<div class="top-gap">div.top-gap</div>
<p class="top-gap-0">p.top-gap-0</p>
<section class="top-gap-big">section.top-gap-big</section>
```

## Important

We think when you set `.top-gap*` to an element, you are very sure that the `margin-top` of this element should be the value you set.

So both `.top-gap-big`, `.top-gap` and `.top-gap-0` are set `margin-top` with `!important`.

This can avoid `margin-top` being overided.

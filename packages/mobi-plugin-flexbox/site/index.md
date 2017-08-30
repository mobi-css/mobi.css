# Flexbox

> Use flexbox to layout.

## Container and units

First of all, let's create a `.flex-left` container which contains several `.unit`s. In this case, `.flex-left`'s width is divided equally between `.unit`s.

<div class="flex-left top-gap text-center">
  <div class="unit site-box">unit</div>
  <div class="unit site-box">unit</div>
  <div class="unit site-box">unit</div>
</div>
<div class="flex-left top-gap text-center">
  <div class="unit site-box">unit</div>
  <div class="unit site-box">unit</div>
  <div class="unit site-box">unit</div>
  <div class="unit site-box">unit</div>
  <div class="unit site-box">unit</div>
</div>

```html
<div class="flex-left">
  <div class="unit">unit</div>
  <div class="unit">unit</div>
  <div class="unit">unit</div>
</div>
<div class="flex-left">
  <div class="unit">unit</div>
  <div class="unit">unit</div>
  <div class="unit">unit</div>
  <div class="unit">unit</div>
  <div class="unit">unit</div>
</div>
```

Secondly, let's see how to achieve a maximum 4# grid.

<div class="flex-left top-gap text-center">
  <div class="unit-1 site-box">.unit-1</div>
</div>
<div class="flex-left top-gap text-center">
  <div class="unit-1-2 site-box">.unit-1-2</div>
  <div class="unit-1-2 site-box">.unit-1-2</div>
</div>
<div class="flex-left top-gap text-center">
  <div class="unit-1-3 site-box">.unit-1-3</div>
  <div class="unit-2-3 site-box">.unit-2-3</div>
</div>
<div class="flex-left top-gap text-center">
  <div class="unit-1-4 site-box">.unit-1-4</div>
  <div class="unit-3-4 site-box">.unit-3-4</div>
</div>
<div class="flex-left top-gap text-center">
  <div class="unit-1-2 site-box">.unit-1-2</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>

```html
<div class="flex-left">
  <div class="unit-1">.unit-1</div>
</div>
<div class="flex-left">
  <div class="unit-1-2">.unit-1-2</div>
  <div class="unit-1-2">.unit-1-2</div>
</div>
<div class="flex-left">
  <div class="unit-1-3">.unit-1-3</div>
  <div class="unit-2-3">.unit-2-3</div>
</div>
<div class="flex-left">
  <div class="unit-1-4">.unit-1-4</div>
  <div class="unit-3-4">.unit-3-4</div>
</div>
<div class="flex-left">
  <div class="unit-1-2">.unit-1-2</div>
  <div class="unit-1-4">.unit-1-4</div>
</div>
```

Finally, we can use `.unit-0` as a custom size unit. Set a width to it, or let the content decide the width.

<div class="flex-left top-gap text-center">
  <div class="unit site-box">.unit</div>
  <div class="unit-0 site-box" style="width:200px">.unit-0 which has 200px width</div>
  <div class="unit site-box">.unit</div>
</div>
<div class="flex-left top-gap text-center">
  <div class="unit-0 site-box">.unit-0 which has no width set</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>

```html
<div class="flex-left">
  <div class="unit">.unit</div>
  <div class="unit-0" style="width:200px">.unit-0 which has 200px width</div>
  <div class="unit">.unit</div>
</div>
<div class="flex-left">
  <div class="unit-0">.unit-0 which has no width set</div>
  <div class="unit">.unit</div>
  <div class="unit-1-4">.unit-1-4</div>
</div>
```

## Flexbox aligning

Forget `margin:0 auto`. We can align easily with flexbox!

<div class="flex-left site-box top-gap">
  <div class="site-box">.flex-left > div</div>
</div>
<div class="flex-center site-box top-gap">
  <div class="site-box">.flex-center > div</div>
</div>
<div class="flex-right site-box top-gap">
  <div class="site-box">.flex-right > div</div>
</div>
<div class="flex-top site-box top-gap" style="height:60px;">
  <div class="site-box">.flex-top > div</div>
</div>
<div class="flex-middle site-box top-gap" style="height:60px;">
  <div class="site-box">.flex-middle > div</div>
</div>
<div class="flex-bottom site-box top-gap" style="height:60px;">
  <div class="site-box">.flex-bottom > div</div>
</div>
<div class="flex-center flex-middle site-box top-gap" style="height:60px;">
  <div class="site-box">.flex-center.flex-middle > div</div>
</div>

```html
<div class="flex-left">
  <div>.flex-left > div</div>
</div>
<div class="flex-center">
  <div>.flex-center > div</div>
</div>
<div class="flex-right">
  <div>.flex-right > div</div>
</div>
<div class="flex-top" style="height:60px;">
  <div>.flex-top > div</div>
</div>
<div class="flex-middle" style="height:60px;">
  <div>.flex-middle > div</div>
</div>
<div class="flex-bottom" style="height:60px;">
  <div>.flex-bottom > div</div>
</div>
<div class="flex-center flex-middle" style="height:60px;">
  <div>.flex-center.flex-middle > div</div>
</div>
```

## Vertical flexbox

We can use `.flex-vertical` to easily achieve vertical flexbox layout.

<div class="flex-vertical top-gap text-center" style="height:200px;">
  <div class="unit-0 site-box">.unit-0</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>

```html
<div class="flex-vertical" style="height:200px;">
  <div class="unit-0">.unit-0</div>
  <div class="unit">.unit</div>
  <div class="unit-1-4">.unit-1-4</div>
</div>
```

## Wrapable flexbox

By default the `flex-wrap` of flexbox container is set to `nowrap`, this is to prevent some unexpected wrap. We can set it to `wrap` using `.flex-wrap`:

<div class="flex-left top-gap text-center">
  <div class="unit-0 site-box">.unit-0 with a lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot of text</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>
<div class="flex-left flex-wrap top-gap text-center">
  <div class="unit-0 site-box">.flex-wrap > .unit-0 with a lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot of text</div>
  <div class="unit site-box">.unit</div>
  <div class="unit-1-4 site-box">.unit-1-4</div>
</div>

```html
<div class="flex-left">
  <div class="unit-0">.unit-0 with a lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot of text</div>
  <div class="unit">.unit</div>
  <div class="unit-1-4">.unit-1-4</div>
</div>
<div class="flex-left flex-wrap">
  <div class="unit-0">.flex-wrap > .unit-0 with a lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot lot of text</div>
  <div class="unit">.unit</div>
  <div class="unit-1-4">.unit-1-4</div>
</div>
```

## Unit 1 on mobile

Sometimes we need to show `.unit-1-3` on desktop, and `.unit-1` on mobile. We can use `.unit-1-on-mobile` inside `.flex-wrap` to achieve this:

<div class="flex-left flex-wrap top-gap text-center">
  <div class="unit-1-3 unit-1-on-mobile site-box">.flex-wrap > .unit-1-3.unit-1-on-mobile</div>
  <div class="unit-2-3 unit-1-on-mobile site-box">.flex-wrap > .unit-2-3.unit-1-on-mobile</div>
</div>

```html
<div class="flex-left flex-wrap">
  <div class="unit-1-3 unit-1-on-mobile">.flex-wrap > .unit-1-3.unit-1-on-mobile</div>
  <div class="unit-2-3 unit-1-on-mobile">.flex-wrap > .unit-2-3.unit-1-on-mobile</div>
</div>
```

## Units gap

In all of the above examples, the `.unit*` has no left and right paddings, it may not convenient sometimes. We can add `.units-gap` and `.units-gap-big` to the flexbox container to add gaps between `.unit*`s:

<div class="flex-left units-gap top-gap text-center">
  <div class="unit-0 site-box">.units-gap > .unit-0</div>
  <div class="unit site-box">.units-gap > .unit</div>
  <div class="unit-1-4 site-box">.units-gap > .unit-1-4</div>
</div>

```html
<div class="flex-left units-gap top-gap text-center">
  <div class="unit-0 site-box">.units-gap > .unit-0</div>
  <div class="unit site-box">.units-gap > .unit</div>
  <div class="unit-1-4 site-box">.units-gap > .unit-1-4</div>
</div>
```

<div class="flex-left units-gap-big top-gap text-center">
  <div class="unit-0 site-box">.units-gap-big > .unit-0</div>
  <div class="unit site-box">.units-gap-big > .unit</div>
  <div class="unit-1-4 site-box">.units-gap-big > .unit-1-4</div>
</div>

```html
<div class="flex-left units-gap-big top-gap text-center">
  <div class="unit-0 site-box">.units-gap-big > .unit-0</div>
  <div class="unit site-box">.units-gap-big > .unit</div>
  <div class="unit-1-4 site-box">.units-gap-big > .unit-1-4</div>
</div>
```

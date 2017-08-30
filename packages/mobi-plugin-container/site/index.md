# Container

> Three types of containers: normal, wider and fluid.

## Introduction

There are 3 kinds of containers, `.container`, `.container-wider` and `.container-fluid`. We can use them to build whether a simple layout or a complex layout.

A container doesn't have a center alignment, we need to use `.flex-center` as a wrapper.

Here are the most common layout mode:

- [Simple Container](#simple-container) ([Live demo](container))
- [Container Wider](#container-wider) ([Live demo](container/wider))
  - [Container Wider with Sidebar](#container-wider-with-sidebar) ([Live demo](container/wider/sidebar))
    - [Container Wider with Sidebar Hide on Mobile](#container-wider-with-sidebar-hide-on-mobile) ([Live demo](container/wider/sidebar/hide-on-mobile))
    - [Container Wider with Fixed Width Sidebar](#container-wider-with-fixed-width-sidebar) ([Live demo](container/wider/sidebar/fixed-width))
    - [Container Wider with Left and Right Sidebar](#container-wider-with-left-and-right-sidebar) ([Live demo](container/wider/sidebar/left-and-right))
- [Container Fluid](#container-fluid) ([Live demo](container/fluid))
  - [Container Fluid with Sidebar](#container-fluid-with-sidebar) ([Live demo](container/fluid/sidebar))

## Simple container

Let's start from a simple `container`:

[Live demo](container)

```html
<div class="flex-center">
  <div class="container">
    Content
  </div>
</div>
```

## Container wider

`container-wider` has a wider width:

[Live demo](container/wider)

```html
<div class="flex-center">
  <div class="container-wider">
    Content
  </div>
</div>
```

### Container wider with sidebar

It's easy to add a sidebar for `container-wider`:

[Live demo](container/wider/sidebar)

```html
<div class="flex-center">
  <div class="container-wider">
    <div class="flex-left flex-wrap units-gap-big">
      <div class="unit-1-4 unit-1-on-mobile">
        Sidebar
      </div>
      <div class="unit-3-4 unit-1-on-mobile">
        Content
      </div>
    </div>
  </div>
</div>
```

In the above case, sidebar will have 1/4 width on desktop and will fill the whole width on mobile.

#### Container wider with sidebar hide on mobile

Sometimes we need to hide the sidebar on mobile.

We can add `hide-on-mobile` to sidebar to achieve this:

[Live demo](container/wider/sidebar/hide-on-mobile)

```html
<div class="flex-center">
  <div class="container-wider">
    <div class="flex-left units-gap-big">
      <div class="unit-1-4 hide-on-mobile">
        Sidebar
      </div>
      <div class="unit-3-4 unit-1-on-mobile">
        Content
      </div>
    </div>
  </div>
</div>
```

#### Container wider with fixed width sidebar

Sidebar can also has fixed width:

[Live demo](container/wider/sidebar/fixed-width)

```html
<div class="flex-center">
  <div class="container-wider">
    <div class="flex-left flex-wrap units-gap-big">
      <div class="unit-0 unit-1-on-mobile" style="width:300px">
        Sidebar
      </div>
      <div class="unit">
        Content
      </div>
    </div>
  </div>
</div>
```

#### Container wider with left and right sidebar

We can add two sidebars:

[Live demo](container/wider/sidebar/left-and-right)

```html
<div class="flex-center">
  <div class="container-wider">
    <div class="flex-left units-gap-big">
      <div class="unit-0 hide-on-mobile" style="width:200px">
        Sidebar
      </div>
      <div class="unit">
        Content
      </div>
      <div class="unit-0 hide-on-mobile" style="width:200px">
        Sidebar
      </div>
    </div>
  </div>
</div>
```

## Container fluid

`container-fluid` will fill the whole width of the browser:

[Live demo](container/fluid)

```html
<div class="flex-center">
  <div class="container-fluid">
    Content
  </div>
</div>
```

### Container fluid with sidebar

Usually there is a fixed width sidebar in `container-fluid`:

[Live demo](container/fluid/sidebar)

```html
<div class="flex-center">
  <div class="container-wider">
    <div class="flex-left flex-wrap units-gap-big">
      <div class="unit-0 unit-1-on-mobile" style="width:300px">
        Sidebar
      </div>
      <div class="unit">
        Content
      </div>
    </div>
  </div>
</div>
```

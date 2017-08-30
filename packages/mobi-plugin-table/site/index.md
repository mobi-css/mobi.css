# Table

> The basic styles for table.

## Simple table

Add a `.table` class to `<table>` element:

<table class="table">
  <thead>
    <tr>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
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

```html
<table class="table">
  <thead>
    <tr>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
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
```

## Scrollable table

Tables typically render out of the viewable area on small mobile devices. If so, use the `.scroll-view` wrapper to make your table scrollable.

<div class="scroll-view">
  <table class="table">
    <thead>
      <tr>
        <th>Heading</th>
        <th>Heading</th>
        <th>AVeryVeryLongHeading</th>
        <th>Heading</th>
        <th>Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.1</td>
        <td>1.2</td>
        <td>1.3</td>
        <td>1.4</td>
        <td>1.5</td>
      </tr>
      <tr>
        <td>2.1</td>
        <td>2.2</td>
        <td>2.3</td>
        <td>2.4</td>
        <td>2.5</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
        <td>Footer 3</td>
        <td>Footer 4</td>
        <td>Footer 5</td>
      </tr>
    </tfoot>
  </table>
</div>

```html
<div class="scroll-view">
  <table class="table">
    <thead>
      <tr>
        <th>Heading</th>
        <th>Heading</th>
        <th>AVeryVeryLongHeading</th>
        <th>Heading</th>
        <th>Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.1</td>
        <td>1.2</td>
        <td>1.3</td>
        <td>1.4</td>
        <td>1.5</td>
      </tr>
      <tr>
        <td>2.1</td>
        <td>2.2</td>
        <td>2.3</td>
        <td>2.4</td>
        <td>2.5</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
        <td>Footer 3</td>
        <td>Footer 4</td>
        <td>Footer 5</td>
      </tr>
    </tfoot>
  </table>
</div>
```

## Caption in table

<table class="table">
  <caption>Table Caption</caption>
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

```html
<table class="table">
  <caption>Table Caption</caption>
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
```

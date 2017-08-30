# Form

> The form control styles.

### Basic forms

Mobi.css believes that on mobile devices, **each row should have only one input**.

You should add `.form` to a `<form>` element and add `.btn` to each button.

<form class="form" action="#">
  <input type="text" placeholder="Name"/>
  <input type="password" placeholder="Password"/>
  <label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
  <input class="btn" type="submit" value="Sign Up Now"/>
</form>

```html
<form class="form" action="#">
  <input type="text" placeholder="Name"/>
  <input type="email" placeholder="Email"/>
  <label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
  <input class="btn" type="submit" value="Sign Up Now"/>
</form>
```

### Complicated forms

If you want to have multiple inputs in one row, you should use flexbox layout.

<form class="form" action="#Complicated-forms">
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-name" style="width:85px;">Name: </label>
    <div class="unit"><input type="text" id="multiple-inputs-name" placeholder="xcatliu"/></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">Gender: </label>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="male"/>Male
    </label></div>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="female"/>Female
    </label></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">Country: </label>
    <div class="unit">
      <select>
        <option disabled selected value> -- select -- </option>
        <option>China</option>
        <option>USA</option>
      </select>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">Avatar: </label>
    <div class="unit">
      <input type="file"/>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-bio" style="width:85px;">Bio: </label>
    <div class="unit">
      <textarea id="multiple-inputs-bio" placeholder="Who are you?"></textarea>
    </div>
  </div>
  <div class="flex-left">
    <div style="width:85px;"></div>
    <button type="reset" class="btn btn-danger">Reset</button>
    <div class="unit"></div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>

```html
<form class="form" action="#Complicated-forms">
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-name" style="width:85px;">Name: </label>
    <div class="unit"><input type="text" id="multiple-inputs-name" placeholder="xcatliu"/></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">Gender: </label>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="male"/>Male
    </label></div>
    <div class="unit"><label class="flex-middle">
      <input type="radio" name="multiple-inputs-gender" value="female"/>Female
    </label></div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">Country: </label>
    <div class="unit">
      <select>
        <option disabled selected value> -- select -- </option>
        <option>China</option>
        <option>USA</option>
      </select>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" style="width:85px;">Avatar: </label>
    <div class="unit">
      <input type="file"/>
    </div>
  </div>
  <div class="flex-left units-gap">
    <label class="unit-0 text-right" for="multiple-inputs-bio" style="width:85px;">Bio: </label>
    <div class="unit">
      <textarea id="multiple-inputs-bio" placeholder="Who are you?"></textarea>
    </div>
  </div>
  <div class="flex-left">
    <div style="width:85px;"></div>
    <button type="reset" class="btn btn-danger">Reset</button>
    <div class="unit"></div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

When you are using `<label>` element, you can add `class="flex-middle"` if it's the parent of `radio` or `checkbox` label, this makes the radio buttons align middle vertically.

# HTML5 inputs

This page lists all the possible inputs.

{% raw %}
<form class="form">

  <h5>Text inputs</h5>

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

{% raw %}
  <h5>Radio and checkbox</h5>

  <p><code>[type=radio]</code></p>
  <label class="flex-middle"><input type="radio" name="gender"/>Male</label>
  <label class="flex-middle"><input type="radio" name="gender"/>Female</label>
  <p><code>[type=checkbox]</code></p>
  <label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
{% endraw %}

```html
<label class="flex-middle"><input type="radio" name="gender"/>Male</label>
<label class="flex-middle"><input type="radio" name="gender"/>Female</label>

<label class="flex-middle"><input type="checkbox"/>I agree to terms.</label>
```

{% raw %}
  <h5>Select inputs</h5>
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
  <h5>File inputs</h5>

  <input type="file"/>
{% endraw %}

```html
<input type="file"/>
```

{% raw %}
  <h5>Buttons</h5>

  <p><code>input[type=button]</code></p>
  <input type="button" class="btn" value=".btn"/>
  <input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
  <input type="button" class="btn btn-danger" value=".btn.btn-danger"/>
  <p><code>input[type=reset]</code></p>
  <input type="reset" class="btn" value=".btn"/>
  <input type="reset" class="btn btn-primary" value=".btn.btn-primary"/>
  <input type="reset" class="btn btn-danger" value=".btn.btn-danger"/>
  <p><code>input[type=submit]</code></p>
  <input type="submit" class="btn" value=".btn"/>
  <input type="submit" class="btn btn-primary" value=".btn.btn-primary"/>
  <input type="submit" class="btn btn-danger" value=".btn.btn-danger"/>
  <p><code>button[type=button]</code></p>
  <button type="button" class="btn">.btn</button>
  <button type="button" class="btn btn-primary">.btn.btn-primary</button>
  <button type="button" class="btn btn-danger">.btn.btn-danger</button>
  <p><code>button[type=reset]</code></p>
  <button type="reset" class="btn">.btn</button>
  <button type="reset" class="btn btn-primary">.btn.btn-primary</button>
  <button type="reset" class="btn btn-danger">.btn.btn-danger</button>
  <p><code>button[type=submit]</code></p>
  <button type="submit" class="btn">.btn</button>
  <button type="submit" class="btn btn-primary">.btn.btn-primary</button>
  <button type="submit" class="btn btn-danger">.btn.btn-danger></button>
  <p><code>a</code></p>
  <a href="javascript:void(0);" class="btn">.btn</a>
  <a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
  <a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>
{% endraw %}

```html
<input type="button" class="btn" value=".btn"/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger"/>

<input type="reset" class="btn" value=".btn"/>
<input type="reset" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="reset" class="btn btn-danger" value=".btn.btn-danger"/>

<input type="submit" class="btn" value=".btn"/>
<input type="submit" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="submit" class="btn btn-danger" value=".btn.btn-danger"/>

<button type="button" class="btn">.btn</button>
<button type="button" class="btn btn-primary">.btn.btn-primary</button>
<button type="button" class="btn btn-danger">.btn.btn-danger</button>

<button type="reset" class="btn">.btn</button>
<button type="reset" class="btn btn-primary">.btn.btn-primary</button>
<button type="reset" class="btn btn-danger">.btn.btn-danger</button>

<button type="submit" class="btn">.btn</button>
<button type="submit" class="btn btn-primary">.btn.btn-primary</button>
<button type="submit" class="btn btn-danger">.btn.btn-danger></button>

<a href="javascript:void(0);" class="btn">.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>
```

{% raw %}
  <h5>Date inputs</h5>

  <p><code>[type=time]</code></p>
  <input type="time"/>
  <p><code>[type=week]</code></p>
  <input type="week"/>
  <p><code>[type=month]</code></p>
  <input type="month"/>
  <p><code>[type=date]</code></p>
  <input type="date"/>
  <p><code>[type=datetime-local]</code></p>
  <input type="datetime-local"/>
{% endraw %}

```html
<input type="time"/>
<input type="week"/>
<input type="month"/>
<input type="date"/>
<input type="datetime-local"/>
```

{% raw %}
  <h5>Other inputs</h5>

  <p><code>[type=color]</code></p>
  <input type="color"/>
  <p><code>[type=range]</code></p>
  <input type="range" min="1" max="99" step="2"/>
  <p><code>[type=image]</code></p>
  <input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64"/>
  <p><code>[type=hidden]</code></p>
  <input type="hidden"/>
{% endraw %}

```html
<input type="color"/>
<input type="range" min="1" max="99" step="2"/>
<input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64"/>
<input type="hidden"/>
```

{% raw %}
  <h5><code>disabled</code> and <code>readonly</code></h5>

  <h6>Text inputs</h6>
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
  <h6>Radio and checkbox</h6>
  <p><code>[type=radio][disabled]</code></p>
  <label class="flex-middle"><input type="radio" name="gender" checked disabled/><span disabled>Male</span></label>
  <label class="flex-middle"><input type="radio" name="gender" disabled/><span disabled>Female</span></label>
  <p><code>[type=checkbox][disabled]</code></p>
  <label class="flex-middle"><input type="checkbox" disabled/><span disabled>I agree to terms.</span></label>
  <p>Radio and checkbox cannot be set to <code>readonly</code></p>
{% endraw %}

```html
<label class="flex-middle"><input type="radio" name="gender" checked disabled/><span disabled>Male</span></label>
<label class="flex-middle"><input type="radio" name="gender" disabled/><span disabled>Female</span></label>

<label class="flex-middle"><input type="checkbox" disabled/><span disabled>I agree to terms.</span></label>
```

{% raw %}
  <h6>Select inputs</h6>
  <select disabled>
    <option disabled selected value> -- select -- </option>
    <option>China</option>
    <option>USA</option>
  </select>
  <p>Select inputs cannot be set to <code>readonly</code></p>
{% endraw %}

```html
<select disabled>
  <option disabled selected value> -- select -- </option>
  <option>China</option>
  <option>USA</option>
</select>
```

{% raw %}
  <h6>File inputs</h6>
  <p><code>[type=file][disabled]</code></p>
  <input type="file" disabled/>
  <p>File inputs cannot be set to <code>readonly</code></p>
{% endraw %}

```html
<input type="file" disabled/>
```

{% raw %}
  <h6>Buttons</h6>
  <p><code>[type=button][disabled]</code></p>
  <input type="button" class="btn" value=".btn" disabled/>
  <input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
  <input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>
  <p><code>a[disabled]</code></p>
  <a href="javascript:void(0);" class="btn" disabled>.btn</a>
  <a href="javascript:void(0);" class="btn btn-primary" disabled>.btn.btn-primary</a>
  <a href="javascript:void(0);" class="btn btn-danger" disabled>.btn.btn-danger</a>
  <p>Buttons cannot be set to <code>readonly</code></p>
{% endraw %}

```html
<input type="button" class="btn" value=".btn" disabled/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>

<a href="javascript:void(0);" class="btn" disabled>.btn</a>
<a href="javascript:void(0);" class="btn btn-primary" disabled>.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger" disabled>.btn.btn-danger</a>
```

{% raw %}
  <h6>Date inputs</h6>
  <p><code>[type=datetime-local][disabled]</code></p>
  <input type="datetime-local" disabled/>
  <p><code>[type=datetime-local][readonly]</code></p>
  <input type="datetime-local" readonly value="2016-12-31T12:59"/>
{% endraw %}

```html
<input type="datetime-local" disabled/>
<input type="datetime-local" readonly value="2016-12-31T12:59"/>
```

{% raw %}
  <h6>Other inputs</h6>

  <p><code>[type=color][disabled]</code></p>
  <input type="color" disabled/>
  <p><code>[type=range][disabled]</code></p>
  <input type="range" min="1" max="99" step="2" disabled/>
  <p><code>[type=image][disabled]</code></p>
  <input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64" disabled/>
  <p><code>[type=hidden][disabled]</code></p>
  <input type="hidden" disabled/>
  <p><code>[type=color][readonly]</code></p>
  <input type="color" value="#ff0000" readonly/>
  <p><code>[type=range][readonly]</code></p>
  <input type="range" min="1" max="99" step="2" value="15" readonly/>
  <p><code>[type=image]</code> and <code>[type=hidden]</code> cannot be set to <code>readonly</code></p>
</form>
{% endraw %}

```html
<input type="color" disabled/>
<input type="range" min="1" max="99" step="2" disabled/>
<input type="image" src="../../assets/xcatliu.png" alt="xcatliu" width="64" disabled/>
<input type="hidden" disabled/>
<input type="color" value="#ff0000" readonly/>
<input type="range" min="1" max="99" step="2" value="15" readonly/>
```

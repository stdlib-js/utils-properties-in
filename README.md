<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# propertiesIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own and inherited property names and [symbols][@stdlib/symbol/ctor].



<section class="usage">

## Usage

```javascript
import propertiesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-properties-in@esm/index.mjs';
```

#### propertiesIn( obj )

Returns an `array` of an object's own and inherited property names and [symbols][@stdlib/symbol/ctor].

```javascript
var props = propertiesIn( [] );
// returns [...]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@esm/index.mjs';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';
import propertiesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-properties-in@esm/index.mjs';

var hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'b';
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
    }
    return this;
}

Foo.prototype.foo = 'bar';
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
}

var obj = new Foo();
var props = propertiesIn( obj );
// returns [ 'a', 'foo', ... ]

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-define-properties`][@stdlib/utils/define-properties]</span><span class="delimiter">: </span><span class="description">define (and/or modify) object properties.</span>
-   <span class="package-name">[`@stdlib/utils-inherited-properties`][@stdlib/utils/inherited-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-properties`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-property-names-in`][@stdlib/utils/property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-property-symbols-in`][@stdlib/utils/property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-properties-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-properties-in

[test-image]: https://github.com/stdlib-js/utils-properties-in/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-properties-in/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-properties-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-properties-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-properties-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-properties-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-properties-in/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-properties-in/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-properties-in/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-properties-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-properties-in/main/LICENSE

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor/tree/esm

<!-- <related-links> -->

[@stdlib/utils/define-properties]: https://github.com/stdlib-js/utils-define-properties/tree/esm

[@stdlib/utils/inherited-properties]: https://github.com/stdlib-js/utils-inherited-properties/tree/esm

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils-properties/tree/esm

[@stdlib/utils/property-names-in]: https://github.com/stdlib-js/utils-property-names-in/tree/esm

[@stdlib/utils/property-symbols-in]: https://github.com/stdlib-js/utils-property-symbols-in/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->

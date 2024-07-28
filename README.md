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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Float32

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base utilities for single-precision floating-point numbers.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/number-float32-base/tags). For example,

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base@v0.2.2-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { assert, exponentf, float32ToInt32, float32ToUint32, fromBinaryStringf, fromWordf, normalizef, signbitf, significandf, toBinaryStringf, toWordf } from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base@esm/index.mjs';
```

#### ns

Base utilities for single-precision floating-point numbers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`assert`][@stdlib/number/float32/base/assert]</span><span class="delimiter">: </span><span class="description">base single-precision floating-point number assert functions.</span>
-   <span class="signature">[`exponentf( x )`][@stdlib/number/float32/base/exponent]</span><span class="delimiter">: </span><span class="description">return an integer corresponding to the unbiased exponent of a single-precision floating-point number.</span>
-   <span class="signature">[`fromBinaryStringf( bstr )`][@stdlib/number/float32/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from an IEEE 754 literal bit representation.</span>
-   <span class="signature">[`fromWordf( word )`][@stdlib/number/float32/base/from-word]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.</span>
-   <span class="signature">[`normalizef()`][@stdlib/number/float32/base/normalize]</span><span class="delimiter">: </span><span class="description">return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.</span>
-   <span class="signature">[`signbitf( x )`][@stdlib/number/float32/base/signbit]</span><span class="delimiter">: </span><span class="description">return a boolean indicating if the sign bit for a single-precision floating-point number is on (true) or off (false).</span>
-   <span class="signature">[`significandf( x )`][@stdlib/number/float32/base/significand]</span><span class="delimiter">: </span><span class="description">return an integer corresponding to the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`toBinaryStringf( x )`][@stdlib/number/float32/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of a single-precision floating-point number.</span>
-   <span class="signature">[`float32ToInt32( x )`][@stdlib/number/float32/base/to-int32]</span><span class="delimiter">: </span><span class="description">convert a single-precision floating-point number to a signed 32-bit integer.</span>
-   <span class="signature">[`float32ToUint32( x )`][@stdlib/number/float32/base/to-uint32]</span><span class="delimiter">: </span><span class="description">convert a single-precision floating-point number to an unsigned 32-bit integer.</span>
-   <span class="signature">[`toWordf( x )`][@stdlib/number/float32/base/to-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the IEEE 754 binary representation of a single-precision floating-point number.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base

[test-image]: https://github.com/stdlib-js/number-float32-base/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/number-float32-base/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float32-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float32-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float32-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float32-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float32-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float32-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float32-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/number/float32/base/assert]: https://github.com/stdlib-js/number-float32-base-assert/tree/esm

[@stdlib/number/float32/base/exponent]: https://github.com/stdlib-js/number-float32-base-exponent/tree/esm

[@stdlib/number/float32/base/from-binary-string]: https://github.com/stdlib-js/number-float32-base-from-binary-string/tree/esm

[@stdlib/number/float32/base/from-word]: https://github.com/stdlib-js/number-float32-base-from-word/tree/esm

[@stdlib/number/float32/base/normalize]: https://github.com/stdlib-js/number-float32-base-normalize/tree/esm

[@stdlib/number/float32/base/signbit]: https://github.com/stdlib-js/number-float32-base-signbit/tree/esm

[@stdlib/number/float32/base/significand]: https://github.com/stdlib-js/number-float32-base-significand/tree/esm

[@stdlib/number/float32/base/to-binary-string]: https://github.com/stdlib-js/number-float32-base-to-binary-string/tree/esm

[@stdlib/number/float32/base/to-int32]: https://github.com/stdlib-js/number-float32-base-to-int32/tree/esm

[@stdlib/number/float32/base/to-uint32]: https://github.com/stdlib-js/number-float32-base-to-uint32/tree/esm

[@stdlib/number/float32/base/to-word]: https://github.com/stdlib-js/number-float32-base-to-word/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->

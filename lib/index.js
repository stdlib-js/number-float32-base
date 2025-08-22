/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name add
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/add}
*/
setReadOnly( ns, 'add', require( '@stdlib/number-float32-base-add' ) );

/**
* @name assert
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/number/float32/base/assert}
*/
setReadOnly( ns, 'assert', require( '@stdlib/number-float32-base-assert' ) );

/**
* @name div
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/div}
*/
setReadOnly( ns, 'div', require( '@stdlib/number-float32-base-div' ) );

/**
* @name exponentf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/exponent}
*/
setReadOnly( ns, 'exponentf', require( '@stdlib/number-float32-base-exponent' ) );

/**
* @name fromBinaryStringf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/from-binary-string}
*/
setReadOnly( ns, 'fromBinaryStringf', require( '@stdlib/number-float32-base-from-binary-string' ) );

/**
* @name fromWordf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/from-word}
*/
setReadOnly( ns, 'fromWordf', require( '@stdlib/number-float32-base-from-word' ) );

/**
* @name identity
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/identity}
*/
setReadOnly( ns, 'identity', require( '@stdlib/number-float32-base-identity' ) );

/**
* @name mul
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/mul}
*/
setReadOnly( ns, 'mul', require( '@stdlib/number-float32-base-mul' ) );

/**
* @name normalizef
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/normalize}
*/
setReadOnly( ns, 'normalizef', require( '@stdlib/number-float32-base-normalize' ) );

/**
* @name signbitf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/signbit}
*/
setReadOnly( ns, 'signbitf', require( '@stdlib/number-float32-base-signbit' ) );

/**
* @name significandf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/significand}
*/
setReadOnly( ns, 'significandf', require( '@stdlib/number-float32-base-significand' ) );

/**
* @name sub
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/sub}
*/
setReadOnly( ns, 'sub', require( '@stdlib/number-float32-base-sub' ) );

/**
* @name toBinaryStringf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/to-binary-string}
*/
setReadOnly( ns, 'toBinaryStringf', require( '@stdlib/number-float32-base-to-binary-string' ) );

/**
* @name float32ToInt32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/to-int32}
*/
setReadOnly( ns, 'float32ToInt32', require( '@stdlib/number-float32-base-to-int32' ) );

/**
* @name float32ToUint32
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/to-uint32}
*/
setReadOnly( ns, 'float32ToUint32', require( '@stdlib/number-float32-base-to-uint32' ) );

/**
* @name toWordf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/to-word}
*/
setReadOnly( ns, 'toWordf', require( '@stdlib/number-float32-base-to-word' ) );

/**
* @name ulpdiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/number/float32/base/ulp-difference}
*/
setReadOnly( ns, 'ulpdiff', require( '@stdlib/number-float32-base-ulp-difference' ) );


// EXPORTS //

module.exports = ns;

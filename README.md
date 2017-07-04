# random-string

JavaScript library that creates random strings.

##### Table of Contents

[What It Does](#what-it-does)  
[Add To Project](#add-to-project)  
[Access Library](#access-library)  
[API](#api)  
* [Signature](#signature-api)  
* [Options](#options-api)  

[Usage](#usage)  
[Contributing](#contributing)  
[License](#license)  

<a name="what-it-does"></a>
### What It Does

Creates random formatted and unformatted strings.

<a name="add-to-project"></a>
### Add To Project

```html
<script src="path/to/lib.js"></script>
```

<a name="access-library"></a>
### Access Library

```js
var randomString = window.app.libs.randomString;
```

<a name="api"></a>
### API

<a name="signature-api"></a>
### API &mdash; Signature

```js
/**
 * @param  {Object: Optional} [The user's provided options, if any.]
 * @return {String}           [The generated string.]
 */
```

<a name="options-api"></a>
### API &mdash; Options

Option | Default | Takes | Description
------------ | -------------
`ambiguous` | `true` | `Bolean` | Adds <code>~`_=+\&verbar;/</code> to charset.
`enclosures` | `true` | `Bolean` | Adds `(){}[]<>` to charset.
`lowercase` | `true` | `Bolean` | Adds `a-z` to charset.
`uppercase` | `true` | `Bolean` | Adds `A-Z` to charset.
`numbers` | `true` | `Bolean` | Adds `0-9` to charset.
`punctuation` | `true` | `Bolean` | Adds `.?!,;:-'"` to charset.
`symbols` | `true` | `Bolean` | Adds `@#$%^&*` to charset.
`similar` | `true` | `Bolean` | Keeps `1iIlL0oO` characters in charset.
`spaces` | `false` | `Bolean` | Allows spaces in charset.
`hexonly` | `false` | `Bolean` | Only `A-F0-9` allowed in charset. May only be used with: `format`, `include`, `exclude`, & `length`. Other options are ignored.
`format` | `""` | `String` | Format random string should follow. Question marks, `?`, are replaced with a random character.
`charset` | `""` | `String` | String containing custom charset. May only be used with: `format`, `include`, `exclude`, & `length`. Other options are ignored.
`include` | `""` | `String` | Characters to include in charset. `includes` are added after removing any `excludes`.
`exclude` | `""` | `String` | Characters to exclude from charset. `excludes` are removed before adding any `includes`.
`length` | `20` | `Number` | Length string should be.

<a name="usage"></a>
### Usage

```js
// random string examples

// default options
console.log(randomString());
// example output: k7pr+k$[<[dA8IxE2<R*

// 20 character length, hexonly random string
console.log(randomString({
    "hexonly": true,
    "length": 20
})); // example output: 2A7AFC753320ECE14A28

// alpha-numeric random string
console.log(randomString({
    "ambiguous": false,
    "enclosures": false,
    "lowercase": false,
    "numbers": true,
    "punctuation": false,
    "similar": false,
    "spaces": false,
    "symbols": false,
    "uppercase": true,
    "hexonly": false
})); // example output: T3AGURN84R49KZJ89ECQ

// special format random string
console.log(randomString({
    "ambiguous": false,
    "enclosures": false,
    "lowercase": false,
    "numbers": true,
    "punctuation": false,
    "similar": false,
    "spaces": false,
    "symbols": false,
    "uppercase": true,
    "hexonly": false,
    "format": "?????-?????-?????-?????-?????"
})); // example output: NWE4S-FSX3C-2SPQA-GPJJ8-UABVT

// custom charset random string
console.log(randomString({
    "charset": "01234567", // use these chars
    "include": "9", // include char(s) to the charset
    "exclude": "0" // exclude char(s) from the chars
})); // example output: 46947632571726792192
```

<a name="contributing"></a>
### Contributing

Contributions are welcome! Found a bug, feel like documentation is lacking/confusing and needs an update, have performance/feature suggestions or simply found a typo? Let me know! :)

See how to contribute [here](https://github.com/cgabriel5/random-string/blob/master/CONTRIBUTING.md).

<a name="license"></a>
### License

This project uses the [MIT License](https://github.com/cgabriel5/random-string/blob/master/LICENSE.txt).
# random-string

JavaScript library that creates random strings.

##### Table of Contents

- [Project Setup](#project-setup)
- [What It Does](#what-it-does)
- [Add To Project](#add-to-project)
- [API](#api)
- [Usage](#usage)
    - [Default Options](#example-default-options)
    - [Hexonly With Custom Length](#example-hexonly-length)
    - [Alpha Numeric](#example-alpha-numeric)
    - [Special Format](#example-special-format)
    - [Custom Charset](#example-custom-charset)
- [Contributing](#contributing)
- [License](#license)

<a name="project-setup"></a>
### Project Setup

Project uses [this](https://github.com/cgabriel5/snippets/tree/master/boilerplate/application) boilerplate. Its [README.md](https://github.com/cgabriel5/snippets/blob/master/boilerplate/application/README.md#-read-before-use) contains instructions for `Yarn` and `Gulp`.

<a name="what-it-does"></a>
### What It Does

Creates random formatted and unformatted strings.

<a name="add-to-project"></a>
### Add To Project

**Note**: The library, both minimized and unminimized, is located in `lib/`.

```html
<script src="path/to/lib.js"></script>
<script>
document.onreadystatechange = function() {
    "use strict";
    // once all resources have loaded
    if (document.readyState == "complete") {
        // get the library
        var randomString = window.app.libs.randomString;
        // logic...
    }
});
</script>
```

<a name="api"></a>
### API

- [➜ randomString()](#main-function)

<a name="main-function"></a>
➜ **randomString(`options`)** &mdash; Generates random string.

- `options` (`Object`, _Optional_)
    - `ambiguous` (`Bolean`, _Default_: `true`) Adds <code>~`_=+\&verbar;/</code> to charset.
    - `enclosures` (`Bolean`, _Default_: `true`) Adds `(){}[]<>` to charset.
    - `lowercase` (`Bolean`, _Default_: `true`) Adds `a-z` to charset.
    - `uppercase` (`Bolean`, _Default_: `true`) Adds `A-Z` to charset.
    - `numbers` (`Bolean`, _Default_: `true`) Adds `0-9` to charset.
    - `punctuation` (`Bolean`, _Default_: `true`) Adds `.?!,;:-'"` to charset.
    - `symbols` (`Bolean`, _Default_: `true`) Adds `@#$%^&*` to charset.
    - `similar` (`Bolean`, _Default_: `true`) Keeps `1iIlL0oO` characters in charset.
    - `spaces` (`Bolean`, _Default_: `false`) Allows spaces in charset.
    - `hexonly` (`Bolean`, _Default_: `false`) Only `A-F0-9` allowed in charset. May only be used with: `format`, `include`, `exclude`, & `length`. Other options are ignored.
    - `format` (`String`, _Default_: `""`) Format random string should follow. Question marks, `?`, are replaced with a random character.
    - `charset` (`String`, _Default_: `""`) String containing custom charset. May only be used with: `format`, `include`, `exclude`, & `length`. Other options are ignored.
    - `include` (`String`, _Default_: `""`) Characters to include in charset. `includes` are added after removing any `excludes`.
    - `exclude` (`String`, _Default_: `""`) Characters to exclude from charset. `excludes` are removed before adding any `includes`.
    - `length` (`Number`, _Default_: `20`) Length string should be.
- **Returns** randomly generated string.

<a name="usage"></a>
### Usage

<a name="example-default-options"></a>
**Default Options** &mdash; Generate a string with the default options.
```js
console.log(randomString()); // example output: k7pr+k$[<[dA8IxE2<R*
```

<a name="example-hexonly-length"></a>
**Hexonly With Custom Length** &mdash; Generate a string with only hex characters fixed at a 20 character length.
```js
console.log(randomString({
    "hexonly": true,
    "length": 20
})); // example output: 2A7AFC753320ECE14A28
```

<a name="example-alpha-numeric"></a>
**Alpha Numeric** &mdash; Generate a string with only uppercase letters and numbers.
```js
console.log(randomString({
    "ambiguous": false,
    "enclosures": false,
    "lowercase": false,
    "numbers": true, // <---
    "punctuation": false,
    "similar": false,
    "spaces": false,
    "symbols": false,
    "uppercase": true, // <---
    "hexonly": false
})); // example output: T3AGURN84R49KZJ89ECQ
```

<a name="example-special-format"></a>
**Special Format** &mdash; Generate a string with a custom format.
```js
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
```

<a name="example-custom-charset"></a>
**Custom Charset** &mdash; Generate a string with a custom character set.
```js
console.log(randomString({
    "charset": "01234567", // use these chars
    "include": "9", // include char(s) to the charset
    "exclude": "0" // exclude char(s) from the charset
})); // example output: 46947632571726792192
```

<a name="contributing"></a>
### Contributing

Contributions are welcome! Found a bug, feel like documentation is lacking/confusing and needs an update, have performance/feature suggestions or simply found a typo? Let me know! :)

See how to contribute [here](https://github.com/cgabriel5/random-string/blob/master/CONTRIBUTING.md).

<a name="license"></a>
### License

This project uses the [MIT License](https://github.com/cgabriel5/random-string/blob/master/LICENSE.txt).
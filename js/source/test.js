document.onreadystatechange = function() {
    "use strict";
    if (document.readyState == "complete") {
        // get the lib
        var randomString = window.app.libs.randomString;
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
    }
};

// =============================== Core Library Functions
/**
 * @description [Main function runs the generator function. Main function
 *               also gets attached to the global scope.]
 * @param  {Object} options [The user's provided options, if any.]
 * @return {String}         [The generated string]
 */
function main(options) {
    // make and return random string
    return generator(normalized(options));
}
/**
 * @description [Generates string.]
 * @param  {Object} options [The user's provided options, if any.]
 * @return {String}         [The generated string]
 */
function generator(options) {
    // create the charset
    var charset = build_charset(options);
    // generate normal random string
    if (!options.format) {
        // get the user provided string length
        var length = options.length;
        var string = [];
        // start building string...
        while (length >= 1) {
            // shuffle array
            string.push(random_item(shuffle(charset)));
            length--;
        }
        return string.join("");
    } else { // user provided a format the string should be in
        var format_chars = options.format.split("");
        // loop over format chars, replacing all ?'s with a random character
        for (var i = 0, l = format_chars.length; i < l; i++) {
            // replace question mark with random char
            if (format_chars[i] === "?") format_chars[i] = random_item(shuffle(charset));
        }
        return format_chars.join("");
    }
}
/**
 * @description [Normalizes the library options.]
 * @param  {Object} options [The user's provided options, if any.]
 * @return {Object}         [Object containing normalized options.]
 */
function normalized(options) {
    return Object.assign({
        "ambiguous": true,
        "enclosures": true,
        "lowercase": true,
        "numbers": true,
        "punctuation": true,
        "similar": true,
        "spaces": false,
        "symbols": true,
        "uppercase": true,
        "hexonly": false,
        "format": false,
        "charset": false,
        "include": false,
        "exclude": false,
        "length": 20
    }, options || {});
}
/**
 * @description [Builds the usable character set. This depends on the options the user specified.]
 * @param  {Object} options [The user's provided options, if any.]
 * @return {Array} [An array containing all possible characters to build string from.]
 */
function build_charset(options) {
    // if charset is provided use that instead
    if (options.charset) return _cludes(options, options.charset)
        .split("");
    // cache options
    var ambiguous = options.ambiguous,
        enclosures = options.enclosures,
        lowercase = options.lowercase,
        numbers = options.numbers,
        punctuation = options.punctuation,
        similar = options.similar,
        spaces = options.spaces,
        symbols = options.symbols,
        uppercase = options.uppercase,
        hexonly = options.hexonly;
    // define charsets
    var charset_letters = "abcdefghijklmnopqrstuvwxyz",
        charset_numbers = "0123456789",
        charset_punctuation = ".?!,;:-'\"",
        charset_enclosures = "(){}[]<>",
        charset_symbols = "@#$%^&*",
        charset_ambiguous = "~`_=+\\|/",
        charset_similar = "1iIlL0oO",
        charset_space = " ";
    // start building string
    var string = "";
    if (uppercase) string += charset_letters.toUpperCase();
    if (lowercase) string += charset_letters;
    if (numbers) string += charset_numbers;
    if (punctuation) string += charset_punctuation;
    if (enclosures) string += charset_enclosures;
    if (symbols) string += charset_symbols;
    if (ambiguous) string += charset_ambiguous;
    if (spaces) string += charset_space;
    // remove similar characters if flag provided
    if (!similar) string = string.replace(/[1iIlL0oO]/g, "");
    // when hexonly option is on only return hex characters
    if (hexonly) string = (charset_numbers + "ABCDEF");
    // finally return the built string in an array
    return _cludes(options, string)
        .split("");
}
/**
 * @description [Adds includes characters and removes exclude characters from the charset.]
 * @param  {Object} options [The user's provided options, if any.]
 * @param  {String} options [The charset.]
 * @return {String} [The modified charset.]
 */
function _cludes(options, string) {
    // get the includes/excludes from the options
    var includes = options.include;
    var excludes = options.exclude;
    // remove excludes if provided
    if (excludes) {
        var excludes_array = excludes.split("");
        for (var i = 0, l = excludes_array.length; i < l; i++) {
            string = string.replace(new RegExp(excludes_array[i], "g"), "");
        }
    }
    // add the includes if provided
    if (includes) string += includes;
    return string; // return modified charset
}

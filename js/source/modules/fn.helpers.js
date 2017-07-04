/**
 * @description [Shuffles provided array.]
 * @source [http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript]
 * @param {Array} array [The array to shuffle.]
 * @return {Array} array [Returns provided array now shuffled.]
 */
function shuffle(array) {
    var counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
/**
 * @description [Return a random item from an array.]
 * @param  {Array} provided_array [The array to get item from.]
 * @return {String} [In this case a character will be returned.]
 */
function random_item(provided_array) {
    return provided_array[Math.floor(Math.random() * provided_array.length)];
}

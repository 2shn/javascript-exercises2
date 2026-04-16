const reverseString = function(string) {
    let stringArray = string.split("")
    return stringArray.reverse().join("");
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');

// Do not edit below this line
module.exports = reverseString;

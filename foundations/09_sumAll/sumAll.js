const sumAll = function(a, b) {
    if (typeof a !== 'number' || !Number.isInteger(a) || a<0) return 'ERROR';
    if (typeof b !== 'number' || !Number.isInteger(b) || b<0) return 'ERROR';
    const [min, max] = (a<b) ? [a, b] : [b, a];
    let result = 0;
    for (i=min ; i<= max ; i++) {
        result += i;
    }
    return result;
};

sumAll(2, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(2.5, 4)
sumAll(10, "90")
sumAll(10, [90, 1])

// Do not edit below this line
module.exports = sumAll;

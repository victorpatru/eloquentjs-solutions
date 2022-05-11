// THE SUM OF A RANGE

function range(firstNumber, secondNumber, step = 1) {
    let rangeArray = []

    if (secondNumber > firstNumber) {
        for (let i = firstNumber; i <= secondNumber; i += step) {
            rangeArray.push(i)
        }
    } else if (firstNumber > secondNumber) {
        for (let i = firstNumber; i >= secondNumber; i += step) {
            rangeArray.push(i)
        }
    }
    

    return rangeArray
}

function sum(...[numbers]) {
    let additionOfTheArray = 0

    for (let i = 0; i < numbers.length; i++) {
        additionOfTheArray += numbers[i]
    }

    return additionOfTheArray
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 10, 2))

// REVERSING AN ARRAY

function reverseArray(...[inputedArray]) {
    let invertedArray = []
    for (let i = 1; i <= inputedArray.length; i++) {
        invertedArray.push(inputedArray[inputedArray.length - i])
    }
    
    return invertedArray
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - i - 1]
        array[array.length - i - 1] = old
    }

    return array
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// A LIST

function arrayToList(array) {
    let list
    for(let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list ?? null
        }
    }

    return list
}

function listToArray(list) {
    let array = []

    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array
}

function prepend(element, list) {
    let createdList = {
        value: element,
        rest: list
    }

    return createdList
}

function nth(list, number) {
    let array = listToArray(list)
    return array[number]
}

console.log(arrayToList([10, 20, 30, 40, 50]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// DEEP COMPARISON

function deepEqual(a, b) {
    if (a === b) return true // simple comparison is valid so no need to do deeper comparison
    
    if (a == null || typeof a !== 'object' || b == null || typeof b !== 'object') return false // if its either null or its not an object just return false

    let keysA = Object.keys(a), keysB = Object.keys(b) // get the keys out of the objects a and b

    if (keysA.length !== keysB.length) return false

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false
        }
        return true
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
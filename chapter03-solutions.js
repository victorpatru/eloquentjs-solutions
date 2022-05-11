/* Chapter 03 */

// Minimum

function min(num1, num2) {
    if (num1 > num2) {
        return num2
    } else {
        return num1
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

// Recursion

function isEven(number) {
    number = Math.abs(number)
    if (number % 2 === 0) {
        return true
    } else if (number % 2 === 1) {
        return false
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Bean Counting

function countChar(chosenWord, matchingCharacter) {
    let numberOfChars = 0;

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === matchingCharacter) {
            numberOfChars += 1
        }
    }
    return numberOfChars
}

console.log(countChar("BBC", "B"));
console.log(countChar("kakkerlak", "k"));

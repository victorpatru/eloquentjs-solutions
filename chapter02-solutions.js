// Looping a triangle
  
let pyramid = ''
for (let i = 0; i <= 6; i++) {
    pyramid += '#'
    console.log(pyramid)
}

// Fizz Buzz

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i %  5 !== 0) {
        console.log(`Fizz`)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(`Buzz`)
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log(`FizzBuzz`) 
    } else {
        console.log(`${i}`)
    }
}

// Chessboard
let initialBoard = ''
let size = 8

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            initialBoard += ' '
        } else {
            initialBoard += '#'
        }
    }

    initialBoard += '\n'
}

console.log(initialBoard)
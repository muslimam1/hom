//  1-masala;

// for
// function calculateSums() {
    // const array = arrayInput.split(',').map(Number);
// 
    // let positive = 0;
    // let negative = 0;
// 
    // for (let i = 0; i < array.length; i++) {
        // const num = array[i];
        // positive += (array[i] > 0) * array[i];
        // negative += (array[i] > 0) * array[i];
    // }
// 
    // console.log('Positive son', positive);
    // console.log('Negative son', negative);
// }
// 
// while
// 
// function calculateSums() {
    // const array = arrayInput.split(',').map(Number);
// 
    // let positive = 0;
    // let negative = 0;
// 
    // let i = 0;
    // while ( i < array.length) {
        // const num = array[i];
        // positive += (array[i] > 0) * array[i];
        // negative += (array[i] > 0) * array[i];
        // i++;
    // }
// 
    // console.log('Positive son', positive);
    // console.log('Negative son', negative);
// }


// 2-masala

// for

// function calculateEvenSum() {
// 
    // const array = arrayInput.split(',').map(Number);
// 
    // let evenSum = 0;
// 
    // for (let i = 0; i < array.length; i++) {
        // const num = array[i];
        // evenSum += (1 - num % 2) * num;
    // }
// 
    // console.log('Even Sum:', evenSum);
// }


// while

// function calculateEvenSum() {
// 
    // const array = arrayInput.split(',').map(Number);
// 
    // let evenSum = 0;
    // let i = 0;
// 
    // while (i < array.length) {
        // const num = array[i];
        // evenSum += (1 - num % 2) * num;
        // i++;
    // }
// 
    // console.log('Even Sum:', evenSum);
// }



// 3-masala

// for

let a = 1; // a ni istalgan qiymatga o'zgartirishingiz mumkin
let b = 10; // b ni istalgan qiymatga o'zgartirishingiz mumkin
let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i;
}

console.log("Sum from", a, "to", b, "is", sum);
// ================== PART 1 Fizzbuzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

// // // alternative Fizz Buzz solution
for (let num = 1; num <= 100; num++) {
    console.log((num % 3 === 0 ? 'Fizz ' : '') + (num % 5 === 0 ? 'Buzz' : '') || num);
}

// ================== PART 2 Prime Time
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

let n = 9;

// Loop indefinitely
for (let num = n + 1;;num++) {
    let isPrime = true;

    if (num > 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " is the next prime number");
            break;
        }
    }
}

// ================== PART 3 Feeling Loopy
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

// Example CSV string
// let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// Initialize variables to store cell values
let cell1 = '', cell2 = '', cell3 = '', cell4 = '';
let currentCell = 1; // track which cell is being populated

// Loop through each character in CSV string
for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];
    // if we encounter a comma, move to next cell
    if (char === ',') {
        currentCell++;
        continue;
    }

    // if we encounter a newline, log the row and reset for next row
    if (char === '\n') {
        console.log(cell1, cell2, cell3, cell4); // log each row of data
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
        currentCell = 1;
        continue;
    }

    // store characters in cell based on currentCell value
    if (currentCell === 1) {
        cell1 += char;
    } else if (currentCell === 2) {
        cell2 += char;
    } else if (currentCell === 3) {
        cell3 += char;
    } else if (currentCell === 4) {
        cell4 += char;
    }
}

// log the last row if it wasn't followed by a newline
console.log(cell1, cell2, cell3, cell4);

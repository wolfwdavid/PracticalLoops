//Part 1: Fizz Buzz

for (let i = 1; i <= 100; ++i) {
    const divBy3 = i % 3 === 0;
    const divBy5 = i % 5 === 0;
  
    if (divBy3 && divBy5) {
      console.log(`FizzBuzz`);
    } else if (divBy3) {
      console.log(`Fizz`);
    } else if (divBy5) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }

  // Part 2: Prime Time

  // Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // Eliminate even numbers
  
  // Check for factors from 3 to sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
  }
  return true;
}

// Function to find the next prime number greater than or equal to n
function findNextPrime(n) {
  let number = n;
  
  while (true) {
      if (isPrime(number)) {
          console.log(number);
          break;
      }
      number++;
  }
}

// Example usage
let n = 9; // You can change this number to test other cases
findNextPrime(n);


//Part 3

// Function to parse and log CSV data
function parseCSV(csvString) {
  let rows = csvString.split('\r\n'); // Split the CSV string into rows
  for (let row of rows) {
      let cells = row.split(','); // Split each row into cells
      console.log(cells.join(', ')); // Log each row's cells separated by a comma
  }
}

// Example CSV strings
let csvData1 = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let csvData2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\r\n1,0.00,0.050,0.050\r\n2,0.49,0.066,0.066\r\n3,0.98,0.087,0.080\r\n4,1.47,0.116,0.108\r\n5,1.96,0.142,0.138\r\n6,2.45,0.166,0.158\r\n7,2.94,0.193,0.174\r\n8,3.43,0.204,0.192\r\n9,3.92,0.226,0.205\r\n10,4.41,0.238,0.232";

// Test the function with the example CSV data
console.log("CSV Data 1:");
parseCSV(csvData1);

console.log("\nCSV Data 2:");
parseCSV(csvData2);

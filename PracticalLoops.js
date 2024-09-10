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

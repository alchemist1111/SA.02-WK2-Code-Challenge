// Function to check if a number is prime.
function isPrime(num) {
    // Prime numbers are greater than 1.
    if (num <= 1) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number.
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        // If the number is divisible by any other number, it's not prime.
        return false;
      }
    }
  
    // If the loop completes without finding a divisor, the number is prime.
    return true;
  }
  
  // Function to filter prime numbers from an array.
  function filterPrimes(arr) {
    // Initialize an empty array to store prime numbers.
    const primes = [];
  
    // Iterate through each number in the input array.
    for (let i = 0; i < arr.length; i++) {
      // Check if the current number is prime using the isPrime function.
      if (isPrime(arr[i])) {
        // If it's prime, add it to the primes array.
        primes.push(arr[i]);
      }
    }
  
    // Return the array of prime numbers.
    return primes;
  }
  
  // Test the function.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filterPrimes(numbers)); // Output is [ 2, 3, 5, 7 ].
  
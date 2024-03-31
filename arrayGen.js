function generateArray(start, end) {
    // Initialize an empty array to store the generated numbers.
    const result = [];
  
    // Determine the direction of generating numbers based on the start and end values.
    const step = start <= end ? 1 : -1;
  
    // Loop through the range of numbers from start to end using the for loop, inclusive.
    for (let i = start; i !== end + step; i += step) {
      // Push the current number to the result array.
      result.push(i);
    }
  
    // Return the generated array.
    return result;
  }
  
  // Test the function
  console.log(generateArray(4, 7));   // Output: [4, 5, 6, 7]
  console.log(generateArray(-4, 7));  // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
  


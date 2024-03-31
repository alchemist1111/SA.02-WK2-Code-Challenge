function swapCase(string) {
    // Create an empty string to store the swapped characters.
    let swappedString = '';
  
    // Loop through each character in the input string by using the for loop.
    for (let i = 0; i < string.length; i++) {
      // Get the character at the current index
      const char = string.charAt(i);
  
      // Check if the character is uppercase
      if (char === char.toUpperCase()) {
        // If it's uppercase, convert it to lowercase and append to swappedString.
        swappedString += char.toLowerCase();
      } else {
        // If it's lowercase, convert it to uppercase and append to swappedString.
        swappedString += char.toUpperCase();
      }
    }
  
    // Return the swapped string.
    return swappedString;
  }
  
  // Testing the function;
  const input = 'The Quick Brown Fox';
  console.log(swapCase(input)); // The output will be; 'tHE qUICK bROWN fOX'
  
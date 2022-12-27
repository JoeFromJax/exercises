function logOddNumbers(min, max) {
    // Iterate over the range of numbers from min + 1 to max - 1
    for (let i = min + 1; i < max; i++) {
      // If the current number is odd, log it to the console
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
  
  // Example usage: log all odd numbers between 1 and 10
  logOddNumbers(1, 10);
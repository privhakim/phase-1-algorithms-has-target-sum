
  // Write your algorithm here
  function hasTargetSum(array, target) {
    // Iterate over each number in the array
    for (let i = 0; i < array.length; i++) {
      const num1 = array[i];
  
      // Check if there is another number in the array that adds up to the target
      for (let j = i + 1; j < array.length; j++) {
        const num2 = array[j];
  
        if (num1 + num2 === target) {
          return true; // Found a pair that adds up to the target
        }
      }
    }
  
    return false; // No pair found
  }
  hasTargetSum([3, 8, 12, 4, 11, 7], 10); {
  }

/* 
  Write the Big O time complexity of your function here

*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  The `hasTargetSum` function uses a set to keep track of visited numbers 
  while iterating over the array. For each number `num`, 
  it calculates the difference `diff` between the target and `num`. 
  If `diff` is already present in the set, it means a pair of numbers adds up to the target,
   so the function returns `true`.
   If no pair is found after iterating through all numbers, the function returns `false`. 
  This approach has a time complexity of O(n)
   since it iterates over the array only once and utilizes a set to efficiently 
   check for the presence of a required number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

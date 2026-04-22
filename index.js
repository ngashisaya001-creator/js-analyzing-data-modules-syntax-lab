//my code
const dateJS = require('datejs');
 
// Task 2, Step 1: Create the combineUsers function
// We use ...args as a REST parameter to accept an indeterminate number of arrays
// Each argument passed in will be an array of usernames (strings)
function combineUsers(...args) {
 
  // Task 2, Step 2: Initialize the return object
  // We create an object called combinedObject with a 'users' key set to an empty array
  const combinedObject = {
    users: []
  };
 
  // Task 2, Step 3: Loop through args
  // args is now an array of arrays, so we loop through each inner array
  for (const array of args) {
 
    // Task 2, Step 4: Merge Arrays using the spread operator
    // The spread operator (...array) unpacks each inner array's elements
    // and merges them into the combinedObject.users array
    combinedObject.users = [...combinedObject.users, ...array];
  }
 
  // Task 2, Step 5: Get today's date using datejs
  // We format the date as M/d/yyyy as instructed (e.g., 4/22/2026)
  // Date.today() gives us the current date, .toString('M/d/yyyy') formats it
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');
 
  // Task 2, Step 7: Return the combinedObject
  // The object now contains the merged users array and the merge_date
  return combinedObject;
}
 
// Export the combineUsers function so it can be used/tested by other files (e.g., test suite)
module.exports = { combineUsers };
 

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
//my code
//creating a function using rest arrgument that merges all usernames into one array
function combineUsers(...args) {

//initializing the return object with a users key to an empty array
const combinedObject = { users: [] };

//looping through args and use the spread operator to merge the arrays
args.forEach(arg => {
combinedObject.users = [...combinedObject.users, ...arg];
});

//getting today's date and formatting it as M/d/yyyy
const {format} = require("date-fns");
combinedObject.merge_date = format(new Date(), "M/d/yyyy");

//step 7: returning the final object
return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
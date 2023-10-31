// The user is prompted for froyo flavors upon entering the website.
const input = prompt("Welcome to Joe's frozen palace. Please Enter a list of comma-separated froyo flavors:");
// The user's input string is split into an array of strings.
const flavors = input.split(",");
// An object is used to keep count of how many orders there are of each flavor.
const counter = {};
// A loop is used to iterate through the array of flavors.
for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i].trim();
    console.log(flavor);
// The program correctly counts the number of each flavor in the user's input.
// The console output changes depending on the user's input.
if (counter[flavor]) {
    counter[flavor]++;
  } else {
    counter[flavor] = 1;
  }
}
console.log(counter);



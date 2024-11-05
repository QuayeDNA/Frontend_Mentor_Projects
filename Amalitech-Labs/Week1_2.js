// Task 1 Solution

// 1. String Transformation
let string = "dave is a frontend developer";

// a. A function that capitalizes the first letter of each word in a string
const capitalize = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log("Capitalized String: ", capitalize(string));

// In the code above, the capitalize function takes a string as an argument 
/**
 * 1. The string is split into an array of words using the split method.
 * 2. The map method is used to iterate over each word in the array.
 * 3. The charAt(0) method is used to get the first character of each word.
 * 4. The toUpperCase method is used to convert the first character to uppercase.
 * 5. The slice method is used to get the rest of the word after the first character.
 * 6. The join method is used to join the words back together into a single string
 */



// b. A function that reverses a string
const reverse = (string) => {
    return string.split('').reverse().join('');
}
console.log("Reversed String: ", reverse(string));
/**
 * In the code above, the reverse function takes a string as an argument
 * 1. The string is split into an array of characters using the split method.
 * 2. The reverse method is used to reverse the order of the characters in the array.
 * 3. The join method is used to join the characters back together into a single string.
 */



// c. A function that checks if a string is a palindrome (reads the same backward as forward)
const isPalindrome = (string) => {
    return string === string.split('').reverse().join('');
}
console.log("Is Palindrome: ", isPalindrome("madam"));

/**
 * In the code above, the isPalindrome function takes a string as an argument
 * 1. The string is compared to the reverse of the string to check if they are equal.
 * 2. If the string is equal to its reverse, then it is a palindrome and the function returns true.
 * 3. If the string is not equal to its reverse, then it is not a palindrome and the function returns false.
 * 4. The split method is used to split the string into an array of characters.
 * 5. The reverse method is used to reverse the order of the characters in the array.
 * 6. The join method is used to join the characters back together into a single string.
*/


// d. A function that counts the number of words in a string
const countWords = (string) => {
    return string.split(' ').length;
}
console.log("Number of Words: ", countWords(string));
/**
 * In the code above, the countWords function takes a string as an argument
 * 1. The string is split into an array of words using the split method.
 * 2. The length property is used to get the number of words in the array.
 * 3. The number of words is returned as the result of the function.
 */



// 2. Array Transformation
let array = [1, 2, 3, 4, 5];

// a. A function that doubles all the numbers in an array
const double = (array) => {
    return array.map(num => num * 2);
}
console.log("Doubled Array: ", double(array));
/**
 * In the code above, the double function takes an array of numbers as an argument
 * 1. The map method is used to iterate over each number in the array.
 * 2. Each number is multiplied by 2 to double it.
 * 3. The result is an array of doubled numbers.
 */


// b. A function that filters all the even numbers in an array
const filterEven = (array) => {
    return array.filter(num => num % 2 === 0);
}
console.log("Even Numbers: ", filterEven(array));
/**
 * In the code above, the filterEven function takes an array of numbers as an argument
 * 1. The filter method is used to iterate over each number in the array.
 * 2. The % operator is used to check if the number is even.
 * 3. If the number is even, it is added to the result array.
 * 4. The result is an array of even numbers.
 */


// c. A function that sum all the numbers in an array
const sum = (array) => {
    return array.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of Numbers: ", sum(array));
/**
 * In the code above, the sum function takes an array of numbers as an argument
 * 1. The reduce method is used to iterate over each number in the array.
 * 2. The accumulator is used to keep track of the sum of the numbers.
 * 3. The current number is added to the accumulator.
 * 4. The initial value of the accumulator is set to 0.
 * 5. The result is the sum of all the numbers in the array.
 */


// d. A function that calculates the average of all the numbers in an array
const average = (array) => {
    return array.reduce((acc, num) => acc + num, 0) / array.length;
}
console.log("Average of Numbers: ", average(array));
/**
 * In the code above, the average function takes an array of numbers as an argument
 * 1. The reduce method is used to iterate over each number in the array.
 * 2. The accumulator is used to keep track of the sum of the numbers.
 * 3. The current number is added to the accumulator.
 * 4. The initial value of the accumulator is set to 0.
 * 5. The sum of all the numbers is divided by the length of the array to get the average.
 * 6. The result is the average of all the numbers in the array.
*/



// 3. Object Transformation
let people = [
    {
        firstName: "Dave",
        lastName: "Quaye",
        age: 25,
        occupation: "Frontend Developer"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 30,
        occupation: "Backend Developer"
    },
    {
        firstName: "John",
        lastName: "Smith",
        age: 22,
        occupation: "Full Stack Developer"
    }
];

let person = people[0];
// person variable is derived from the people array in array[0]

// a. A function that returns the full name of a person
const fullName = (person) => {
   console.log(`My name is ${person.firstName} ${person.lastName}`);
}
fullName(person);

/**
 * In the code above, the fullName function takes a person object as an argument
 * 1. The first name and last name of the person are interpolated to form the full name.
 * 2. The full name is printed to the console.
 */


// b. A function that checks if the person is an adult 18 years and above
const isAdult = (person) => {
    if (person.age >= 18) {
        console.log("I am an adult");
    } else {
        console.log("I am not an adult");
    }
}
isAdult(person);

/**
 * In the code above, the isAdult function takes a person object as an argument
 * 1. The age of the person is checked to see if it is greater than or equal to 18.
 * 2. If the age is greater than or equal to 18, then the person is an adult.
 * 3. If the age is less than 18, then the person is not an adult.
*/


// c. A function that filters an array of person objects to keep only those at least minAge years old
const filterAdults = (array, minAge) => {
    return array.filter(person => person.age >= minAge);
}
console.log("Adults: ", filterAdults(people, 18));
/**
 * In the code above, the filterAdults function takes an array of person objects and a minimum age as arguments
 * 1. The filter method is used to iterate over each person in the array.
 * 2. The age of each person is checked to see if it is greater than or equal to the minimum age.
 * 3. If the age is greater than or equal to the minimum age, then the person is added to the result array.
 * 4. The result is an array of person objects that are at least minAge years old.
 */



// 4. Function Composition

/** a. Using the compose(...fns) function (you can find implementations online)
 *  to combine your functions in interesting ways. For example, create a function 
 * to reverse and capitalize a string, or to double all the even numbers in an array. */

const compose = (...fns) => (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);

const reverseAndCapitalize = compose(capitalize, reverse);
console.log("Reversed and Capitalized String: ", reverseAndCapitalize(string));

const doubleEvenNumbers = compose(double, filterEven);
console.log("Doubled Even Numbers: ", doubleEvenNumbers(array));

/**
 * In the code above, the compose function takes an array of functions as arguments
 * 1. The reduceRight method is used to iterate over each function in the array.
 * 2. The result of each function is passed as an argument to the next function.
 * 3. The result of the last function is returned as the final result of the composition.
 * 4. The reverseAndCapitalize function is composed of the capitalize and reverse functions.
 * 5. The doubleEvenNumbers function is composed of the double and filterEven functions.
 */
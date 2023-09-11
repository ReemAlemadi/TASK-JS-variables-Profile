/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = "Reem Abdullah Alemadi";
let yearOfBirth = 1996;
let hobby = "Cooking";
let funFact = "I dont have any fun fact";
const image = "https://scontent.cdninstagram.com/v/t51.2885-19/327301833_145784764671084_8787229737389001289_n.jpg?stp=dst-jpg_s160x160&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4QHIKw3a34UAX-uz2ct&_nc_ht=scontent.cdninstagram.com&oh=00_AfAi0G2rNmdqlM9iJTfqoAGr1ZM9aFtl0UkZWHvPON05Gg&oe=6504B5CF";
let year = 2023;


/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${year - yearOfBirth} years old`;
const hobbyString = `My hobby is ${hobby}`;


/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars+=1
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars-=1
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars+=2
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars-=2
}

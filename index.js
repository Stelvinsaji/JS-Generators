// The only purpose of the * is to tell JS that it's a generator function. U can call the func anything but, if u put the * after the func, it means that it's a generated func.
// Inside the generator func we have 3 separate yield statements. yield is a special type of return keyword that's only useful inside of a generator. The purpose of a generator is to run some code & return a value until u get the end of all the code inside of the generator.
// In order to use a generator, we need to run the generated func which is gonna return to us a generated obj that allows us to manipulate & use the generator
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// After printing it, we're gonna get 3 functions: next, return & row.
const generatedObject = simpleGenerator();
console.log(generatedObject);

// The next func allows us to execute the code inside of the generator
const generatedObject = generatedObject.next(); // It ran all the code inside of our generator up to the first yield.
console.log(obj);
// If we print this, we're gonna get an obj that has a value of 1 & done: false. Anytime u have a generator, it's gonna have a value & done property.
// done property is either gonna be true/false. true means there's nothing & false means that there's still more code to run & the value is gonna be whatever is yielded.

// if we run the generatedObject.next() twice, we're gonna get 2 values
const generatedObject = simpleGenerator();
console.log(generatedObject.next());
console.log(generatedObject.next());

// When u call a generator the very first time, all it does is set's up the generator obj. It creates an obj that has a next property & the property allows u to execute through all the code inside of the generator
function* simpleGenerator() {
  console.log("BEFORE 1");
  yield 1;
  console.log("AFTER 1");
  console.log("BEFORE 2");
  yield 2;
  console.log("AFTER 2");
  console.log("BEFORE 3");
  yield 3;
  console.log("AFTER 3");
}

const generatedObject = simpleGenerator();
console.log(generatedObject.next()); // If u call next once, it's gonna print out BEFORE 1 & the value 1 because it runs the code from the start all the way to the very first yield
console.log(generatedObject.next()); // If we run it second time, it's gonna print out AFTER 1 BEFORE 2 & out value 2 & that's because when we call next the second time, it starts right where we finished at the yield & goes all the way to the next yield which allows us to print after that
console.log(generatedObject.next()); // If we run it the third time, we'll get AFTER 2 & BEFORE 3 printed in the console
console.log(generatedObject.next()); // If we run it the fourth time, AFTER 3 is gonna print out.

/* Multiple Generators */

// It's gonna print out value 1 & 2 & it starts back at value 1 for our second generator obj. When u call the generator func to create a gen obj, you've essentially creating a new instance a separate obj that has it's own version of the func that can iterate through things on it's own.
// It allows u to do the iterations on their own
// Whenever u create a generator obj, it separates from all the other generator obj that u create
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generatedObject1 = simpleGenerator();
const generatedObject2 = simpleGenerator();
console.log(generatedObject1.next());
console.log(generatedObject2.next());

/* Infinite Loop */

// With a generator, u can create an infinite loop that dosen't stop ur PC & freeze the program because ur executing it one step at a time.
// It's great to generate Id's

function* generateId() {
  let id = 1;

  // The way this generator works is the first time we call it we're gonna have our id set to 1. Then we're gonna enter the while loop & ww're gonna yield 1.
  // The next time we call it, we're gonna add 1 to our id, jump back to the start of our while loop & yield out the new id which will be 2. We just do it over & over.
  while (true) {
    yield id;
    id++;
  }
}

const generateObject = generateId();
console.log(generatedObject.next());
console.log(generatedObject.next()); // This will print the value 1, 2, 3, 4
console.log(generatedObject.next());
console.log(generatedObject.next());

// If u wanna reset ur id, create a new generatorObject & when u call it, it's gonna start at the value of 1
// It's a great way of creating unique identifiers
const generatorObject2 = generateId();
console.log(generatorObject2.next());

/* Iterators */

// It's a func or obj such as generatorObject that has a next property that we can call on it & the next property is gonna give us a value & a done flag to let us know if we're done iterating or if we can continue

// This is a common use case for iterators. This is mostly used when ur writing libraries
while (object.next().done != false) {}

// U can also create a generator for an array
// This is a easy way to convert an aeeay into an iterator
function* generator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const generatorObject = generator([1, 3, 5]);
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generateObject.next());
console.log(generateObject.next());

/* Imp things about generators */

// It takes the value of 1 and generates a new integer every time it is called, until an error occurs or the function returns false
function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const generatorObject = generateId();
console.log(generateObject.next());
console.log(generateObject.next(4)); // The first value in our object is 1, then 5, then 6. It's adding by 4 because it's iterating over each number and multiplying it by 4 before moving on to the next one
console.log(generateObject.next());

// NOTE: Passing a value to next on the first iteration does nothing because there's no yield to return

/* Return in Generator */

// It allows u to exit out of a generator. It will return whatever value u pass

function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

// The code starts by creating a generator object
// The next() method is called on the generator object and it returns an integer value, which is then printed to the console
// Next, the code calls next() again with 10 as its argument
// This time, instead of returning an integer value, it returns undefined .
// Then finally, the code calls next() one last time and this time it does not return anything because there are no more values in the sequence that can be returned from this function call
const generatorObject = generateId();
console.log(generateObject.next());
console.log(generateObject.next(10));
console.log(generateObject.next());
console.log(generateObject.next());

/* Throw Function */

// This is gonna allow us to throw an error

function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

// The code starts by creating a generator object.
// The generator object is then used to create an infinite sequence of numbers.
// Next, the next() method is called on the generator object which returns another number in the sequence.
// This process continues until an error occurs and throws an exception
const generatorObject = generateId();
console.log(generateObject.next());
console.log(generateObject.next());
console.log(generateObject.throw(new Error("Whoops!, something went wrong!!")));
console.log(generateObject.next());

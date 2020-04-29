# JS Toolbox


## To Keep in Mind

Helpful tidbits from the lecture.

- A function without arguments is executed anyway if the number of arguments is different to the function definition
- In if statements: write the literal to the left of the '===' (e.g. if ( 3 === a) { ... })

e.g. for curried function using lambda expressions (brackets are optional, added here for readability):
`const doit2 = (callme => (arg => callme(arg)));`

### Various

Display the contents of an array as table:
`console.table(...)`

Works analogously for objects: `let { a } = { a: 1, b:2 }`. 

In JSON (different from JavaScript Objects!), all property names have to be surrounded by double quotes and only simple data expressions are allowed.
`JSON.stringify` and `JSON.parse` are available.

HOF: map, filter, reduce

Create range array: `Array.from({length:10}).map((el, idx) => idx)`

#### Looping

`arr.forEach( (value, index) => { ... }`

`Object.keys(obj).forEach(key => console.log(key))`

#### Objects

Avoid the use of `this` whenever possible.

#### Funktionskomposition

`const compose = f => g => x => g(f(x))`

## Links

### CSS3

[CSS-Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

### Validation
[W3 Validator](https://validator.w3.org/)

## My Programming Errors



## Goodies

Array Destructuring:

```javascript
let [a, b] = [1, 2, 3, 4]; // a==1, b==2;
const [a,...b] = [1,2,3]; // a==1, b==[2,3];
let [a, b] = foo(); // function can have multiple return values
const head = ( [a] ) => a; // head([1,2,3,4]) == 1
```

Object Destructuring: Often used for function arguments to have named parameters instead of positional parameters.

```javascript
const { a, b, c } = { a: 1, b: 2, c: 3 };
```

Array and Object Constructors:
```javascript
// Arrays
const a = [2,3];
[7,a] === [7, [2,3]];
[7, ...a] === [7,2,3];
[...a, ...a] === [2,3,2,3]

// Objects
const obj1 = {a: 1, b: 2};
const b = { c: 3, ...obj1 }; // b === {c: 3, a: 1, b: 2}
const getX = () => 1;
const c = {getX: getX} // equivalent to c = {getX}
 
```

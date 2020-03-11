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

Destructuring: Little bit like pattern matching in Haskell.
`const [a,b,c] = [1,2,3]` binds a to 1, b to 2 and c to 3. 
Works analogously for objects: `let { a } = { a: 1, b:2 }`. 

In JSON (different from JavaScript Objects!), all property names have to be surrounded by double quotes and only simple data expressions are allowed.
`JSON.stringify` and `JSON.parse` are available.

## Links

### CSS3

[CSS-Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

### Validation
[W3 Validator](https://validator.w3.org/)

## My Programming Errors


## Goodies

Array Destructuring:

```javascript
let [a, b] = [1, 2, 3, 4] // a==1, b==2;
let [a, b] = foo(); // function can have multiple return values
const head = ( [a] ) => a; // head([1,2,3,4]) == 1
```

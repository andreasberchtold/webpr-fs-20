const id = x => x;

const fst = x => y => x;
const snd = x => y => y;
const M   = f => f (f); // Mockingbird (Y-Combinator)

const konst = fst;

// Church encoding of boolean variables
const T = p => q => p;
const F = p => q => q;

const and = first => second => first (second)(first );
const or  = M;

const not = p => p(F)(T);


const Pair = x => y => f => f(x)(y);
const firstname = fst;
const lastname  = snd;

const Triple = x => y => z => Pair ( Pair(x)(y))(z);
// ??




const flip = f => x => y => f(y)(x);
const beq = p => q => p(q)(not(q));


// Week 3 Assignment ---------------------------------------
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);
const safeDiv = num => divisor =>
    divisor === 0 ? Left ("Cannot divide by 0") : Right (num / divisor);

const eShow = r => either (r)(id)(x=> "Result is: " + x);
//----------------------------------------------------------



// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];





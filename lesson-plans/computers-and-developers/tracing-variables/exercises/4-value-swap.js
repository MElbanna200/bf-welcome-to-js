'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// declare variables a, b, t and initialize it to the value 'y', 'x', ''
let a = 'y';
let b = 'x';
let t = '';

//read variables a, b, t
console.log(a, b, t);

// declare variables t, a, b and initialize it to the value a , b , t
t = a;
a = b;
b = t;

//read variables a, b, t
console.log(a, b, t);

/*

1- what did you do in this program?

swap value

2- what are the final values of `a` and `b`?

a = x and b = ''

3- how are they changed from the initial values

swiched

4- is it possible to swap a and b without using t?

no

*/
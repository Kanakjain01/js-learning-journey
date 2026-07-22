// getName();
// console.log(x);

// var x = 7;

// function getName() {
//   console.log("namaste idiots");
// }
// ------------------------

// var x = 7;

// function getName() {
//   console.log("namaste idiots");
// }

// console.log(getName);

// ----------------
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log("namaste idiots");
// }

// ----------------
// var x = 7;

// function getName() {
//   console.log("namaste idiots");
// }

// getName();
// console.log(x);
// console.log(getName);

// ------------------ given 'x'value is undefined because of hoisting, function declaration is hoisted to the top of the scope, so it can be called before its definition. However, variable declarations are also hoisted but not their assignments, so 'x' is undefined when logged before its assignment.
// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log("namaste Js");
// }

//----------------------x is not present in the global scope, so it will throw a ReferenceError(or is not defined) when trying to log it before its declaration. However, function declarations are hoisted, so getName can be called before its definition.
// getName();
// console.log(x);
// console.log(getName);

// function getName() {
//   console.log("namaste Js");
// }

//---------------------- we using a getname as the arrow function, it will not be hoisted, so it will throw a ReferenceError when trying to call it before its definition.
// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// var getName = () => {
//   // this is an arrow function, which is not hoisted like regular function declarations. Therefore, calling getName() before its definition will result in a ReferenceError.
//   console.log("namaste Js");
// };

// --------------------
// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName2() {}
// var getName = () => {
//   console.log("namaste Js");
// };

// -------------------
getName();
console.log(x);

console.log(getName);

var x = 7;

var getName2 = function () {};
var getName = () => {
  console.log("namaste Js");
};

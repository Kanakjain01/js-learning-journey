// // jo function k andr nhi hai wo sb global variable hote hai.
// // Agar aapko kisi function ke andar variable chahiye to aapko usko function ke andar declare karna padega.
// // Global variables ko avoid karna chahiye kyunki ye code ko complex aur difficult to maintain bana dete hai.

// global space called global scope.it is accessible from anywhere in the code
 
// A global space is the environment or memory area where global items live, while a global variable is a specific named data item stored inside that space.


var a = 10; // global variable
function b() {
    var x = 10; // local variable
}
console.log(window.a); // 10
console.log(a); // 10
console.log(x); // ReferenceError: x is not defined
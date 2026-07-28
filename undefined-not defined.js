// console.log(a); // ReferenceError: a is not defined
// var a = 8;
// console.log(a); // ReferenceError: x is not defined

// ----------------------------------------------------------------------------
// var a;

// console.log(a); // undefined

// ------------------------------------------------------- not putting value of variable is called undefined
// var a;

// console.log(a);

// if (a === undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is not undefined");
// }

// ------------------------------put value of variable is called defined
// var a;

// console.log(a);
// a = 10;

// if (a === undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is not undefined");
// }

// -------------javascript is a loosely typed language means aapko variable declare karne ke time uska type define karna jaruri nhi hai. Aap variable me kisi bhi type ka value store kar sakte ho.

var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
a = "hello world";
console.log(a); // hello world

// Ye code ek important cheez dikhata hai — JavaScript mein ek variable ka data type fix nahi hota. Same variable a:

// Pehle undefined tha
// Phir number (10) ban gaya
// Phir string ("hello world") ban gaya

// var (aur let bhi) se declare kiya gaya variable, kisi bhi data type ki value hold kar sakta hai, aur time ke saath type change bhi kar sakta hai. Isi wajah se JavaScript ko "dynamically typed language" kaha jaata hai.
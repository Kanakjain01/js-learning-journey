// same variable name hone par bhi har function ka apna variable environment hota hai. Isliye, jab hum `a()` aur `b()` functions ko call karte hain, to unke andar ke `x` variables alag alag hote hain aur global scope ke `x` se alag hote hain.

var x = 5; //global variable
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 20;
  console.log(x);
}
// Har function apna khud ka scope (variable environment) banata hai. Agar ek variable function ke andar var se declare hota hai, toh wo sirf usi function tak limited rehta hai — bahar wale (global) ya doosre functions ke same-naam variables ko affect nahi karta

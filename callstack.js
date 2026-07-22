// HOW THAT EXECUTION CONTEXT AND CALL STACK WORKS
var x = 7;
function getName() {
  console.log("hi everyone");
}
getName();
console.log(x);
console.log(getName);

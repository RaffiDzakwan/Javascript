// Deklaration  Function
function calculateArea(length, width) {
  return length * width;
}


// Expression Function :
const calculateArea1 = function (length, width) {
  return length * width;
};
console.log(calculateArea1(4, 2));


// Arrow Function :
const calculateArea2 = (length, width) => length * width;
console.log(calculateArea2(8,2));

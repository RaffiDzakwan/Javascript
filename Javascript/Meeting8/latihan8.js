// 1. if else and Ternary
// Metode if...else Statement :
let nilaiAndi = 81;
if (nilaiAndi >= 91) {
  console.log("Grade A");
} else if (nilaiAndi >= 81) {
  console.log("Grade B");
} else if (nilaiAndi >= 71) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// Metode Ternary (Multiple ?)
let nilaiIt = 81;
let grade =
  nilaiIt >= 91
    ? "Grade A"
    : nilaiIt >= 81
    ? "Grade B"
    : nilaiIt >= 71
    ? "Grade C"
    : "Grade D";

console.log(grade);

// 2. Switch Statement
let buah = "nangka";
switch (buah) {
  case "nangka":
    console.log("Nangka");
    break;
  case "chery":
    console.log("Chery");
    break;
  case "salak":
    console.log("Salak");
    break;
  default:
    console.log("Nuruddin tidak membeli buah apapun");
    break;
}

// 3. Konversi Boolean dalam if
let saklar = undefined;
if (saklar) {
  console.log("Saklarnya Hidup");
} else {
  console.log("Saklarnya mati");
}

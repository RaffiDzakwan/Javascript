// 1. Deklarasi Fungsi
function greet() {
    console.log("Hello, World!");
}
greet();


// 2. Variabel Lokal
function  showMessage() {
    let varLocalMessage = "Ini adalah pesan lokal";
    console.log(varLocalMessage);
    
}
showMessage();


// 3. Variabel Luar
let userName = "Guest";
function  varluar() {
    console.log(userName);

    // Proses update
    userName = "Admin";
    
}
varluar()
console.log(userName);


// 5.  Nilai Default
function greet(name = "fulan") 
{ console.log(`Hello, ${name}!`); }  
greet("fulan")  


// 6.  Alternatif Nilai Default Parameter
function setUser(userName) {
    userName ||= "Guest";
    console.log(userName);
    
}
setUser("Rafi"); 


//  7. Mengembalikan Nilai
function add(one, two) {
    return one + two;
}
console.log(add(10,7));

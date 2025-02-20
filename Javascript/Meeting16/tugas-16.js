"use strict";
//! Soal 1
let umur = 25;
console.log(umur);
console.log(umur);

//! Soal 2
x = 10;
console.log(x); // Apa yang terjadi? : ERROR

//! Soal 3
let data = "Halo";
console.log(typeof data); //  outputnya : 'string'

data = 42;
console.log(typeof data); //  outputnya : 'number'

data = true;
console.log(typeof data); //  outputnya : 'boolean'

//! Soal 4
let name = prompt("Masukkan nama anda");
        alert(`"Hello ${name} ,Selamat datang di Pondok" `);

//! Soal 5
var result = confirm("Apakah pengguna ingin melanjutkan ke halaman lain ?");
        
        if (result) {
           alert("Anda memilih untuk melanjutkan") 
        }else  {
            alert( "Anda membatalkan tindakan")
        }

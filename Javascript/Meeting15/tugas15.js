//! Soal 1: Data Penduduk (Object & Destructuring)

let penduduk = {
  namaDepan: "Slamet",
  namaBelakang: "Santoso",
  umur: 45,
  pekerjaan: "Petani",
};

//* menambahkan property baru
penduduk.kota = "Yogyakarta";

//* Mengambil dan menampilkan namaBelakang dengan teknik destructuring
const { namaBelakang } = penduduk;
console.log(namaBelakang);

//* Mengambil dan menampilkan pekerjaan dengan cara dot notation
console.log(penduduk.pekerjaan);



//! Soal 2: Buah Kesukaan (Array & Manipulasi Data)

let buahFavorit = ["Mangga", "Jeruk", "Apel"];
console.log(buahFavorit);

//* Menambahkan buah "pisang" ke dalam daftar buahFavorit
buahFavorit.push("Pisang");
console.log(buahFavorit);

//* Mengganti buah "jeruk" dengan "anggur"
buahFavorit[1] = "anggur";
console.log(buahFavorit);

//* Menghapus buah terakhir dalam array
buahFavorit.pop();
console.log(buahFavorit);

//* Mencetak daftar buah favorit yang baru
console.log(buahFavorit);



//! Soal 3: Menu Restoran (Map & Operasi Map)

let menuRestoran = new Map([
  ["Nasi Goreng", 15000],
  ["Mie Ayam", 13000],
  ["Es Teh Manis", 5000],
]);
console.log(menuRestoran);

//* Menambahkan menu baru: "Ayam Bakar" dengan harga 2000
menuRestoran.set("Ayam Bakar", 2000);
console.log(menuRestoran);

//* Menampilkan harga "Mie Ayam"
let getMenu = menuRestoran.get("Mie Ayam");
console.log(menuRestoran.get("Mie Ayam"));

//* Menghapus menu "Es Teh Manis" dari daftar menu
menuRestoran.delete("Es Teh Manis");
console.log(menuRestoran);

//* Mencetak menu yang tersisa
console.log(menuRestoran);



//! Soal 4: Klub Buku (Set & Operasi Set)

let koleksiBuku = new Set(["Laskar Pelangi", "Bumi", "Hujan"]);
console.log(koleksiBuku);

//* Menambahkan buku "Filosofi Teras"
koleksiBuku.add("Filosofi Teras");
console.log(koleksiBuku);

//* Mencoba menambahkan kembali "Bumi"
koleksiBuku.add("Bumi");
console.log(koleksiBuku);
// Tidak ada / tidak bisa ditambahkan

//* Menghapus buku "Hujan"
koleksiBuku.delete("Hujan");
console.log(koleksiBuku);

//* Menampilkan koleksi buku yang baru
console.log(koleksiBuku);



//! Soal 5: Gabungan Data (Spread Operator)

let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
let pakaianWanita = ["Blouse", "Rok", "Cardigan"];

//* Menggabungkan kedua array
let pakaianToko = [...pakaianPria, ...pakaianWanita];
console.log(pakaianToko);

//* Menambahkan produk "kaos" ke dalam pakaian toko
pakaianToko = [...pakaianToko, "Kaos"];
console.log(pakaianToko);

//* Mencetak isi dari pakaian toko
console.log(pakaianToko);



//! Soal 6: Pesanan Makanan (Rest Operator)

function pesanMakanan(...params) {
  console.log(params);
}
pesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh Manis");

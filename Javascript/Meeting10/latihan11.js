// 1.Perulangan "While"
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}


// 2. Perulangan “do...while”
let b = 10;
do {
  console.log(b);
  b--;
} while (b >= 1);


// 3. Perulangan “for” genap
for (let c = 2; c <= 20; c += 2) {
  console.log(c);
}


// 4. Melewatkan bagian perulangan (menggunakan continue)
for (let d = 1; d <= 10; d++) {
  if (d == 5) continue;
  console.log(d);
}


// 5. Menghentikan perulangan (menggunakan break)
for (let e = 1; e <= 10; e++) {
    if (e === 6) break;
    console.log(e);
  }
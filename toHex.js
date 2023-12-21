// PROBLEM ---------------------------------------------------------------------------------------------------------------------------------------
// Given an integer num, return a string representing its hexadecimal representation. For negative integers,
// two’s complement method is used.
// All the letters in the answer string should be lowercase characters, and there should not be any leading
// zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

// Example 1:
// Input: num = 26
// Output: "1a"

// Example 2:
// Input: num = -1
// Output: "ffffffff"

// IDE ------------------------------------------------------------------------------------------------------------------------------------------

// TEORI
// Heksadesimal adalah sistem bilangan berbasis 16, yang menggunakan 16 simbol atau digit.
// Simbol-simbol yang digunakan dalam heksadesimal adalah 0-9 dan A-F (dengan A=10, B=11, C=12, D=13, E=14, dan F=15).
// Misal kita ingin mengubah angka 255 menjadi heksadesimal. Caranya sebagai berikut:
// - 255 dibagi 16 sama dengan 15 dengan sisa 15
// - Lalu kita rangkai hasil pembagian 15 dengan sisanya 15 sehingga menjadi FF.

// ALGORITMA
// 1. Kita pastikan input angka bukan undefined ataupun null, lalu ubah input angka menjadi bilangan non-negatif
//    - (num ?? 0): memastikan nilai num bukan undefined ataupun null dan menetapkan nilai default num = 0
//    - >>> 0: Mengubah num menjadi bilangan non-negatif
// 2. Kita cek apakah input angkanya >= 16 atau < 16.
//    - Jika >= 16 kita jalankan metode bagi dan sisa bagi
//      Dahulukan proses pengambilan sisa agar num yang dibagi pada setiap iterasinya menjadi semakin mengecil,
//      sehingga saat di unshift(), array akan berisi angka sesuai urutan digit (satuan, puluhan, ratusan dst)
//    - Jika < 16 langsung dikonversi ke dalam bentuk heksadesimal
// 3. Return setiap elemen dalam array berdasarkan nilai indeksnya ke simbol-simbol heksadesimal, lalu join hasilnya
//    sehingga menjadi string gabungan. Misalnya:
//    - 345 setelah melalui metode bagi dan sisa bagi akan menghasilkan array [0,1,5,9]
//    - Dengan map() kita ubah setiap elemennya menjadi string yang terdapat di dalam "0123456789abcdef" berdasarkan
//      posisi indeks yang sama, lalu di join() sehingga menghasilkan string "159"
//

// METODE BAGI DAN SISA BAGI
function toHex(num) {
  // Pastikan input angka agar tidak undefined, null dan negatif
  num = (num ?? 0) >>> 0;
  // Membuat array untuk menampung sisa pembagian num dengan 16
  const hex = [];

  // Ketika nilai num >= 16
  while (num >= 16) {
    // Mengambil sisa pembagian lalu disimpan dalam array hex
    hex.unshift(num % 16);
    // Mengambil hasil bagi num dengan 16 untuk iterasi selanjutnya
    num = Math.floor(num / 16);
  }

  // Ketika nilai num < 16
  hex.unshift(num);

  // Return hasil konversi sesuai posisi indeks
  return hex.map((el) => "0123456789abcdef"[el]).join("");
}

// Cara penggunaan
const inputInt = toHex(345);
console.log(inputInt);

//
//
//

// METODE DENGAN BUILD IN FUNCTION toString()

// toString() mengonversi nilai num ke bentuk heksadesimal dengan menggunakan basis 16.
// Hasilnya adalah string yang mewakili nilai heksadesimal dari num.

function toStringHex(num) {
  return num.toString(16);
}

// Cara penggunaan
const toStr = toStringHex(255);
console.log(toStr);

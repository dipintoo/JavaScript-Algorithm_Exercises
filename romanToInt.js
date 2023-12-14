// PROBLEM
// Mengubah angka romawi menjadi angka

// ALGORITMA
// 1. Inisialisasi Pasangan Simbol dan Nilai masing - masing dalam sebuah objek
// 2. Pisahkan setiap karakter romawi yang diinput agar dapat diketahui nilai setiap simbolnya menggunakan split()
// 3. Gunakan metode reduce untuk mengakumulasi nilai dari setiap simbol Romawi. Dalam setiap iterasi terjadi:
//    a. Ambil nilai numerik dari simbol saat ini dan simbol berikutnya
//    b. Jika nilai simbol saat ini lebih kecil dari nilai simbol berikutnya, kurangkan nilai simbol saat ini dari hasil
//    c. Jika tidak, tambahkan nilai simbol saat ini ke hasil
// Hasil akhir merupakan bilangan bulat yang merupakan konversi dari angka Romawi

// CODE

function romanToInt(symbols) {
  const romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return symbols.split("").reduce((acc, curr, i) => {
    const currVal = romanNumeral[curr];
    const accVal = romanNumeral[symbols[i + 1]];
    return accVal > currVal ? acc - currVal : acc + currVal;
  }, 0);
}

const roman = romanToInt("C");
console.log(roman);

// PROBLEM
// Diberikan input string yang hanya berisi brackets. Tentukan input tersebut valid atau tidak
// Bracket buka harus ditutup oleh bracket tutup dengan tipe yang sama
// Urutannya harus benar "diawali dengan buka dulu baru ditutup"
// Setiap bracket harus memiliki hubungan dengan tipe yang sama

// IDE
// 1. Karena problemnya mementingkan suatu urutan operasi metode stack sepertinya cocok
// 2. Buat object berisi pasangan key (kurung buka) dan value (kurung tutup)

// 3. // KALAU INPUT KURUNG BUKA, misal:
//    - Input: "["
//    - Cek, char ini ada ga di dalam daftar key yang ada pada objek bracketMap
//    - Jika Ada, Kita push ke stack
//    - stack = ["["]

//    KALAU INPUT KURUNG TUTUP, misal:
//    - Input: "]"
//    - Kita ambil input terakhir yang ada di dalam stack ("[")
//    - Cek, char saat ini cocok ga dengan char terakhir dalam stack
//    - Jika cocok (pasangan kurung buka tutup), reset stack menjadi kosong
//      karena char sudah menemukan pasangannya
//    - stack = [ ]
//    - Jika ga, return false karena tidak ada pasangannya

// CODE
function isValid(s) {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    // Jika char kurung buka
    if (char in bracketMap) {
      stack.push(char);

      // Jika char kurung tutup
    } else {
      // Ambil char terakhir dari dalam stack
      const lastOpenBracket = stack.pop();
      // Cek kecocokan pasangan berdasarkan char terakhir dalam stack (lastOpenBracket) dengan key dalam bracketMap
      if (char !== bracketMap[lastOpenBracket]) {
        return false;
      }
    }
  }

  // Jika pasangan cocok maka kosongkan stack
  return stack.length === 0;
}

const input = isValid("[()]{}");
console.log(input);

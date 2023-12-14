// PROBLEM
// Tulis fungsi yang bisa menemukan pola huruf yang sama diantara semua string dalam suatu array.
// Jika tidak ada yang sama kembalikan string kosong. Jika ada kembalikan pola huruf (prefix) yang sama itu

// ALGORITMA
// 1. Urutkan dulu string yang ada dalam array sesuai urutan alfabet
// 2. Karena sudah berurutan berdasarkan alfabet maka kita cukup tahu string pada urutan pertama dan terakhir saja
// 3. Periksa karakter huruf yang terdapat pada setiap string dengan looping dan pastikan looping berjalan berdasarkan string pertama dan terpendek
// 4. Return pola karakter awal (prefix) yang sama tersebut

// CODE
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  strs.sort();

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  let i = 0;
  while (i < firstStr.length && firstStr[i] === lastStr[i]) {
    i++;
  }

  return firstStr.slice(0, i);
}

const prefix = longestCommonPrefix(["flow", "flower", "flight"]);
console.log(prefix);

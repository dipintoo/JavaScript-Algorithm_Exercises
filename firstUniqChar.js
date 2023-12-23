// PROBLEM ---------------------------------------------------------------------------------------------------------
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// IDE -------------------------------------------------------------------------------------------------------------
// 1. Kita lakukan for loop pada string input
// 2. Kita gunakan indexOf() untuk kemunculan pertama char dan lastIndexOf() untuk kemunculan terakhir char
//    pada setiap iterasi di dalam for loop
// 3. - Jika char yang kita cari menggunakan indexOf() dan lastIndexOf() ditemukan pada indeks yang sama,
//      berarti char tersebut hanya muncul sekali dalam string dalam artian dia adalah karakter unik.
//    - Jika ditemukan pada indeks yang berbeda, berarti char tersebut muncul lebih dari satu kali
// 4. Jika char merupakan karakter unik kita return langsung indeksnya, sedangkan jika tidak kita return -1

// CODE ------------------------------------------------------------------------------------------------------------

function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    // Jika kemunculan char cuma sekali
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  // Jika kemunculan char lebih dari sekali
  return -1;
}

// Contoh penggunaan
const string1 = firstUniqChar("loveleetcode");
console.log(string1);

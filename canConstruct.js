// PROBLEM ------------------------------------------------------------------------------------------------------------
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using
// the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// IDE ----------------------------------------------------------------------------------------------------------------
// 1. Kita lakukan iterasi untuk setiap char dalam magazine
// 2. Periksa apakah ada char yang sama di dalam ransomNote
// 3. Jika ada hapus dari string menggunakan replace()
// 4. Jika ransomNote sudah merupakan string kosong maka return !ransomNote
//    - Negasi dari string kosong akan memberikan nilai true

// CODE ---------------------------------------------------------------------------------------------------------------
function canConstruct(ransomNote, magazine) {
  for (const char of magazine) {
    // Jika char terdapat pada keduanya maka replace dengan string kosong
    ransomNote = ransomNote.replace(char, "");
  }
  // Periksa apakah ransomNote merupakan string kosong. Jika iya return true
  return !ransomNote;
}

// Contoh penggunaan
const input = canConstruct("aa", "aab");
console.log(input);

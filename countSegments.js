// PROBLEM -----------------------------------------------------------------
// Given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1

// IDE ----------------------------------------------------------------------
// 1. Kita split() kalimat input menjadi array yang berisikan segmen-segmen kata
// 2. Kita filter() juga string kosong (jika ada) agar tidak ikut terhitung
// 3. Hitung panjang array (.length)

function countSegments(s) {
  // Membagi kalimat menjadi segmen kata dan memfilter string kosong
  return s.split(" ").filter((char) => char !== "").length;
}

// Contoh penggunaan
const sentence = countSegments("Hello,   my name is John");
console.log(sentence);

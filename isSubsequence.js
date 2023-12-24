// PROBLEM --------------------------------------------------------------------------------------------------------
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
// of the characters without disturbing the relative positions of the remaining characters.

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// CODE -----------------------------------------------------------------------------------------------------------

function isSubsequence(s, t) {
  let sIndex = 0;

  // Periksa apakah char saat ini sama dengan char pada sIndex di dalam s. Jika ya, lanjut ke iterasi berikutnya
  for (const char of t) {
    if (char === s[sIndex]) sIndex++;
  }

  // Jika semua char dalam s cocok dengan char di dalam t
  return sIndex === s.length;
}

// Contoh penggunaan
const string = isSubsequence("axc", "abcde");
console.log(string);

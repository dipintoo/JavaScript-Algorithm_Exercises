// PROBLEM ------------------------------------------------------------------------------------------------------
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome
// that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// IDE ---------------------------------------------------------------------------------------------------------
// 1. Kita butuh pasangan key (huruf) dan value (frekuensi)
// 2. Dari hubungan key dan value ini kita bisa menghitung frekuensi kemunculan setiap huruf
// 3. Cek frekuensi kemunculan huruf genap atau ganjil
// 4. Kita asumsikan kalau frekuensi kemunculannya genap, maka dia punya pasangan (palindrome)
// 5. Jika ganjil, kita sisipkan hurufnya di tengah2 kumpulan huruf yang frekuensi kemunculannya genap
//    agar tidak menganggu pola palindrome-nya

// CODE --------------------------------------------------------------------------------------------------------
function longestPalindrome(s) {
  // Membuat Map
  const charFreq = new Map();

  // Menghitung frekuensi kemunculan setiap huruf
  for (const char of s) {
    charFreq.set(char, (charFreq.get(char) ?? 0) + 1);
  }

  // Inisialisasi panjang palindrome
  let length = 0;
  let OddFreq = false;

  for (const [_, freq] of charFreq) {
    // Memeriksa panjang palindrome ganjil atau genap
    length += Math.floor(freq / 2) * 2;
    // Jika ganjil
    if (freq % 2 === 1) {
      OddFreq = true;
    }
  }

  return OddFreq ? length + 1 : length + 0;
}

// Contoh penggunaan
const obj = longestPalindrome("zccccdd");
console.log(obj);

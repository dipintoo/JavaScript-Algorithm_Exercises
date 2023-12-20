// PROBLEM --------------------------------------------------------------------------------------------------------------
// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

function guessNumber(n) {
  // Inisialisasi Batas Kiri dan Kanan
  let left = 1;
  let right = n;

  // Looping dengan Binary Search
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // Memanggil fungsi guess
    const result = guess(mid);

    // Mencari angka yang sesuai dengan pick pada fungsi guess
    if (result === 0) return mid;
    if (result === 1) left = mid + 1;
    else right = mid - 1;
  }
}

// Fungsi guess
function guess(num) {
  const pick = 13; // Ganti dengan nilai pick yang sesuai
  return num === pick ? 0 : num < pick ? 1 : -1;
}

// Cara penggunaan
const numb = guessNumber(15);
console.log(numb);

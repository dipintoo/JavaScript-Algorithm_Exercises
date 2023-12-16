// PROBLEM ----------------------------------------------------------------------------------------------------
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where
// the ith row has exactly i coins. The last row of the staircase may be incomplete.
// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:
// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

// Example 2:
// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

// IDE -------------------------------------------------------------------------------------------------------
// 1. Kita akan membangun tangga dengan biaya masing-masing anak tangga adalah 1 coin
// 2. Pastikan cek ketersediaan koin sebelum proses pembangunan anak tangga (n >= stair + 1)
// 3. Saat satu anak tangga berhasil dibangun (stair + 1), maka koin akan berkurang 1 (n-1)
// 4. Jika koin habis, return stair yang sudah terbangun menjadi staircase

// CODE
function arrangeCoins(n) {
  // Inisialisasi awal anak tangga sebelum dibangun
  let stair = 0;

  // Memastikan koin masih tersedia minimal 1 coin agar bisa membangun anak tangga
  while (n >= stair + 1) {
    // Pembangunan anak tangga
    stair++;
    // Pembayaran coin
    n -= stair;
  }

  // Staircase yang jadi
  return stair;
}

const staircase = arrangeCoins(8);
console.log(staircase);

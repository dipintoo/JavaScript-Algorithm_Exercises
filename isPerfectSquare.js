// PROBLEM ------------------------------------------------------------------------------------------------------
// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

// Example 1:
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

// Example 2:
// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

// IDE ---------------------------------------------------------------------------------------------------------
// 1. Karena tidak diperbolehkan menggunakan build in function seperti sqrt, kita akan menggunakan metode binary search
// 2. Dalam binary search kita harus menentukan nilai left, mid, dan right untuk menemukan nilai yang diinginkan
// 3. Nilai Left yang umum digunakan biasanya adalah 0, untuk right sesuai dengan input num dan mid adalah (left + num)/2
// 4. Kondisi:
//    a. Jika mid^2 = num, maka return true
//    b. Jika mid^2 < num, maka left = mid + 1
//       (berarti mid berada sebelum angka yang dicari, maka dari itu ditambah satu agar menuju angka yang dicari)
//    c. Jika mid^2 > num, maka right = mid - 1
//       (berarti mid berada setelah angka yang dicari, maka dari itu dikurangi satu agar menuju angka yang dicari)

// CODE --------------------------------------------------------------------------------------------------------

function isPerfectSquare(num) {
  // Kondisi khusus untuk angka 0 dan 1
  if (num === 0 || num === 1) {
    return true;
  }

  // Nilai left, mid, right
  let left = 0;
  let right = num;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid ** 2;

    // Mencari angka yang diinginkan
    if (square === num) return true;
    if (square < num) left = mid + 1;
    else right = mid - 1;
  }

  // Jika angka tidak ditemukan
  return false;
}

// Cara penggunaan
const binSqrt = isPerfectSquare(16);
console.log(binSqrt);

//
//
//

// CODE DENGAN BUILD IN FUNCTION -----------------------------------------------------------------------------

// Cara ini memeriksa apakah akar kuadrat Math.sqrt() dari num adalah bilangan bulat Number.isInteger()
// Jika bukan return false

function isPerfectSqrt(numb) {
  return Number.isInteger(Math.sqrt(numb)); // True
}

// Cara penggunaan
const sqrt = isPerfectSqrt(9);
console.log(sqrt);

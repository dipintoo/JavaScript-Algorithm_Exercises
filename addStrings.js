// PROBLEM ----------------------------------------------------------------------------------------------------------
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"

// Example 2:
// Input: num1 = "456", num2 = "77"
// Output: "533"

// IDE -------------------------------------------------------------------------------------------------------------
// 1. Kita convert input string menjadi angka menggunakan Number()
// 2. Jumlahkan num1 dengan num2 setelah di convert menjadi angka
// 3. Ubah kembali format angka ke string menggunakan toString()

function addStrings(num1, num2) {
  return (Number(num1) + Number(num2)).toString();
}

// Contoh penggunaan
const addNumber = addStrings("250", "250");
console.log(addNumber);

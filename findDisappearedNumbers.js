// PROBLEM -------------------------------------------------------------------------------
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array
// of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

// IDE -----------------------------------------------------------------------------------
// 1. Karena angka hilang merupakan angka unik, maka kita bisa menggunakan Set()
//    yang memiliki sifat seperti kumpulan nilai unik tanpa urutan tertentu dan tidak
//    mengizinkan elemen duplikat.
// 2. Kita membutuhkan akses ke indeks tertentu dalam deret untuk angka yang hilang,
//    maka akan lebih cocok menggunakan iterasi for loop
// 3. Kita bisa menggunakan has() untuk mengecek apakah dalam deret terdapat
//    angka tertentu atau tidak

// ALGORITMA -----------------------------------------------------------------------------
// 1. Tetapkan nums sebagai Set
// 2. Siapkan array untuk menampung hasil angka yang hilang
// 3. Lakukan for loop pada input deret angka (nums)
// 4. Cek! dalam nums, apakah pada indeks tertentu ada angka yang hilang atau tidak
//    mengunakan has(). Set akan otomatis memberikan nilai unik angka yang hilang
//    sesuai dengan for loop yang kita tentukan yaitu ascending looping.
//    Misal: nums = [1, 2, ..., 4], maka missingNums = [3]
//    Set akan mencarikan angka unik di antara 2 dan 4 yaitu 3.
// 5. Jika ada angka hilang, push ke missingNums

// CODE ----------------------------------------------------------------------------------
function findDisappearedNumbers(nums) {
  // Tetapkan nums menjadi sebagai Set
  const numsSet = new Set(nums);
  const missingNums = [];

  // Cek angka hilang melalui looping
  for (let i = 1; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      missingNums.push(i);
    }
  }

  // Output angka hilang
  return missingNums;
}

// Contoh penggunaan
const inputNums = findDisappearedNumbers([1, 2, 5, 6]);
console.log(inputNums);

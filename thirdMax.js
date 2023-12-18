// PROBLEM -------------------------------------------------------------------------------------------------------
// Given an integer array nums, return the third distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

// IDE ------------------------------------------------------------------------------------------------------------
// 1. Untuk menghapus nilai-nilai duplikat, kita perlu membuat Set() dari nums, lalu
// 2. Kita perlu membuat nums menjadi array, supaya bisa diurutkan secara descending dengan sort().
//    Membuat array bisa dengan Array.from atau menggunakan spread operator [...]
// 3. Jika elemen ke-3 (index ke-2) tidak ada (undefined), return angka terbesar (index ke-0)
//    Jika ada, return elemen ke-3 tersebut.

function thirdMax(nums) {
  const numsSet = [...new Set(nums)];
  numsSet.sort((a, b) => b - a);
  return numsSet[2] === undefined ? numsSet[0] : numsSet[2];
}

// Contoh penggunaan
const arr = thirdMax([3, 5, 6]);
console.log(arr);

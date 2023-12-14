// PROBLEM
// Kamu diberikan array berisi integer (nums) dan integer (target). Buat fungsi yang bisa menemukan pasangan integer dalam array nums
// yang ketika dijumlahkan hasilnya akan sama dengan target lalu return indeks dari integer tersebut

// IDE
//  a. Untuk mendapatkan indeks dari integer dengan 'nilai yang sama' kita bisa gunakan get()
//  b. Karena butuh pasangan kunci-nilai dalam hal ini adalah pasangan integer-indeks kita bisa membuat Map()
//  c. Untuk menambahkan integer (kunci) ke dalam Map kita bisa gunakan set()
//  d. Untuk mendapatkan integer yang saat dijumlahkan hasilnya sama dengan target, kita bisa melakukan pengurangan.
//     Misal 2 + x = 9, untuk mendapatkan nilai x kita bisa melakukan operasi 9 - 2 = 7
//  e. Untuk mengetahui di dalam Map() terdapat kunci tetentu atau tidak, kita bisa gunakan has()
//  f. Untuk dapat menggunakan iterator berupa pasangan kunci-nilai, kita bisa menggunakan entries()

// CODE
function twoSum(nums, target) {
  const intMap = new Map();

  //   for (let i = 0; i < nums.length; i++) {
  //     const currInt = nums[i];

  for (const [i, currInt] of nums.entries()) {
    const diff = target - currInt;

    if (intMap.has(diff)) {
      return [intMap.get(diff), i];
    }

    intMap.set(currInt, i);
  }

  return null;
}

const keys = twoSum([2, 7, 11, 15], 9);
console.log(keys);

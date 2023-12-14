// PROBLEM
// Kamu diberikan sebuah array yang berisi integer (nums). Ambil nilai maksimum pertama (i) dan kedua (j) dari array tersebut,
// lalu kembalikan nilainya setelah kedua nilai tersebut dioperasikan dalam rumus (nums[i]-1)*(nums[j]-1)

// ALGORITMA
// 1. Urutkan nilai dalam array dari besar ke kecil supaya kita bisa mendapatkan nilai terbesar di urutan pertama dan kedua
// 2. Ambil indeks pertama sebagai i dan indeks kedua sebagai j
// 3. Operasikan i dan j ke dalam rumus (nums[i]-1)*(nums[j]-1) lalu return hasil perhitungannya

// CODE
function maxProduct(nums) {
  const sortedNums = nums.sort((a, b) => b - a);

  const max_i = sortedNums[0];
  const max_j = sortedNums[1];

  return (max_i - 1) * (max_j - 1);
}

const arr = maxProduct([1, 24, 3, 40]);
console.log(arr);

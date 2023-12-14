// PROBLEM
// Diberikan 2 array (nums1 dan nums2) yang berisi integer yang tidak berurutan dan 2 integer (m dan n)
// yang merepresentasikan panjang dari nums1 dan nums2. Gabungkan nums2 ke nums1 sehingga menjadi satu array berurutan.
// Untuk mengakomodasi hal ini, nums1 memiliki panjang m + n, di mana elemen pertama m menunjukkan elemen yang harus
// digabungkan, dan n elemen terakhir disetel ke 0 dan harus diabaikan. nums2 memiliki panjang n.
// Misal nums1 = [1,2,3,0,0,0]; nums2 = [2,5,6]; m = 3; n = 3
// Hasilnya menjadi nums1 = [1,2,2,3,5,6]

// IDE
// a. Kita bisa menggunakan splice 'splice(start, deleteCount, item)' untuk menghapus angka nol jika ada sesuai dengan nilai m dan n
// b. Untuk menambahkan nums2 ke nums1 kita bisa menggunakan rest parameter '...nums2'
// c. Urutkan dengan sort()

// CODE
function merge(nums1, nums2, m, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

merge(nums1, nums2, m, n);

console.log(nums1);

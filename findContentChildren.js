// PROBLEM ---------------------------------------------------------------------------------------------------------
// Assume you are an awesome parent and want to give your children some cookies.
// But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with;
// and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i
// will be content. Your goal is to maximize the number of your content children and output the maximum number.

// Example 1:
// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

// Example 2:
// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
// You have 3 cookies and their sizes are big enough to gratify all of the children,
// You need to output 2.

// IDE ------------------------------------------------------------------------------------------------------------
// 1. Urutkan dulu input secara ascending
// 2. Telusuri setiap cookie di dalam s
// 3. Cek kepuasan anak berdasarkan ukuran cookie yang mereka inginkan.
// 4. Return anak yang mendapatkan bagian cookie terbesar (Sisa kue tidak termasuk)
//    Misal: g = [1,2], s = [1,2,3]
//      - Anak dengan tingkat greed 1 'g[1]' puas karena dapat cookie ukuran 1 s[1]
//      - Anak dengan tingkat greed 2 'g[2]' puas karena dapat cookie ukuran 2 s[2]
//    Jadi yang di return adalah 2. 3 tidak termasuk karena sisa dan mungkin anak kenyang.

// CODE
function findContentChildren(s, g) {
  // Sortir input secara ascending
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);

  // Inisialisasi awal tingkat greed anak sebelum diberi cookie
  let childGreed = 0;

  // Cek tingkat greed anak setelah diberi cookie sesuai keinginan atau tidak
  for (const cookie of s) {
    if (cookie >= g[childGreed]) {
      childGreed++;
    }
  }

  return childGreed;
}

// Contoh penggunaan
const kue = [1, 2, 3];
const puas = [1, 2, 3, 4];
const kuePuas = findContentChildren(kue, puas);
console.log(kuePuas);

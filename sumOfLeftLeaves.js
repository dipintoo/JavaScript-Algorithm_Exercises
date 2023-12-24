// PROBLEM ----------------------------------------------------------------------------------------------------
// Given the root of a binary tree, return the sum of all left leaves.
// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Example 2:
// Input: root = [1]
// Output: 0

// CODE -------------------------------------------------------------------------------------------------------

function sumOfLeftLeaves(root) {
  // Jika input null atau undefined berikan nilai default nol
  root = root ?? 0;

  // Inisialisasi Stack dan akumulator
  const stack = [root];
  let sum = 0;

  // Saat stack belum kosong
  while (stack.length > 0) {
    // Ambil node paling atas
    const node = stack.pop();

    // Periksa node left
    if (node.left) {
      // Jika node left tidak punya anak kiri dan kanan akumulasikan nilai ke sum
      if (!node.left.left && !node.left.right) sum += node.left.val;
      // Jika node left tidak punya anak kiri dan kanan, tambahkan ke stack
      else stack.push(node.left);
    }

    // Periksa node right, jika punya anak kiri dan kanan, tambahkan ke stack
    if (node.right) stack.push(node.right);
  }

  // Return akumulasi terakhir
  return sum;
}

// Contoh penggunaan

const tree1 = {
  val: 3,
  left: { val: 9 },
  right: {
    val: 20,
    left: { val: 15 },
    right: { val: 7 },
  },
};

const tree2 = { val: 3 };

console.log(sumOfLeftLeaves(tree1));
console.log(sumOfLeftLeaves(tree2));

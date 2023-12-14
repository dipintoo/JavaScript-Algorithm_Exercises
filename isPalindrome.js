// PROBLEM
// Cek apakah input integer yang diberikan adalah palindrome atau tidak

// ALGORITMA
// 1. Ubah format input dari integer ke string
// 2. Bandingkan string itu dengan string yang sudah dibalik, jika sama maka dia polindrome dan mengembalikan nilai true

// CODE
function isPalindrome(x) {
  const xToStr = String(x);
  return xToStr === xToStr.split("").reverse("").join(""); // True
}

const str = isPalindrome(100000001);
console.log(str);

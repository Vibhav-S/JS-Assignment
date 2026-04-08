// Question 3: Mirror Corridor
// Find smallest X >= 0 such that N+X is palindrome and divisible by K

var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

function isPalindrome(n) {
    var s = "" + n;
    var rev = "";
    for (var i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    return s == rev;
}

var result = -1;
for (var X = 0; X <= 100000; X++) {
    var val = N + X;
    if (isPalindrome(val) && val % K == 0) {
        result = X;
        break;
    }
}

alert(result);

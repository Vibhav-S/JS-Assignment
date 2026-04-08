// Question 1: Digit Gatekeeper
// Count integers x where L <= x <= R, divisible by K,
// digit sum is prime, and x has no digit 0

var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function digitSum(n) {
    var sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function hasZero(n) {
    while (n > 0) {
        if (n % 10 == 0) return true;
        n = Math.floor(n / 10);
    }
    return false;
}

var count = 0;
for (var x = L; x <= R; x++) {
    if (x % K == 0 && !hasZero(x) && isPrime(digitSum(x))) {
        count++;
    }
}

alert(count);

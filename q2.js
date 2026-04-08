// Question 2: Roll-Seed Lock
// Apply 3 steps to N using seed rules, then check result

var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var current = N;

for (var i = 0; i < 3; i++) {
    if (current % 2 == 0) {
        current = Math.floor(current / 2) + seed;
    } else {
        current = current * 3 - seed;
    }
}


if (current >= 100 && current <= 999) {
    var middleDigit = Math.floor(current / 10) % 10;
    if (middleDigit == seed) {
        alert("YES, " + current);
    } else {
        alert("NO, " + current);
    }
} else {
    alert("NO, " + current);
}

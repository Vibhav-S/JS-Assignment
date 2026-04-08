// Question 5: Skipping Numbers
// Find smallest m such that sum of 1..m excluding multiples of (seed+2) >= N

var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var skip = seed + 2;
var sum = 0;
var m = 0;

while (sum < N) {
    m++;
    if (m % skip != 0) {
        sum += m;
    }
}

alert(m + " " + sum);

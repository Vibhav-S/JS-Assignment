
for questin no 1
Loop through every integer from L to R and check three conditions: divisibility by K, no zero digit, and prime digit sum. Primality is checked by trial division up to sqrt(n) and the time complexity is O((R-L) * digits * sqrt(digitSum))

for question no 2
Apply the transformation exactly 3 times in a loop using an if/else on even/odd. Then check the range and middle digit and the time complexity is O(1)

for question no 3
Iterate X from 0 to 100000, build the candidate value N+X, reverse its string representation, and compare. Return the first X satisfying both palindrome and divisibility and the time complexity is O(100000 * digits)

for question no 4
Straight formula-based calculation with conditional checks applied in order. Ceiling to multiple of 5 done using modulo and the time complexity is O(1)

for question no 5
Keep a running sum, incrementing m each step and adding m only if it is not divisible by (seed+2). Stop as soon as sum reaches N and the time complexity is O(m) where m is the answer

for question no 6
Compute score with the formula, clamp to 0 if negative, deduct 10 if total questions exceed 50, then check against threshold and the time complexity is  O(1)

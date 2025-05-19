const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
const nDivisor = [];
const mDivisor = [];
const largerNumber = n > m? n : m;
for (let i=2; i<largerNumber; i++) {
    if (i < n && n % i == 0) {
        nDivisor.push(i)
    }
    if (i < m && m % i == 0) {
        mDivisor.push(i)
    }
}
const uniqueNumbers = nDivisor.filter((d) => !mDivisor.includes(d))
mDivisor.forEach((d) => !nDivisor.includes(d) ? uniqueNumbers.push(d) : undefined)

const result = uniqueNumbers.reduce((acc, curr)=> {
   if (acc % curr !== 0) {
    return acc *= curr
   }
}, 1)
console.log(result)

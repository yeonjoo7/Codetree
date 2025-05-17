const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.
if (n > m) {
    const temp = n;
    n = m;
    m = temp;
}

const nDivisor = [];
const mDivisor = [];
for (let i=1; i<=n; i++) {
    const isNDivided = n % i;
    if (isNDivided === 0) {
        nDivisor.push(i);
    }
}
for (let i=1; i<=m; i++) {
    const isMDivided = m % i;
    if (isMDivided === 0) {
        mDivisor.push(i);
    }
}

for (let i=nDivisor.length-1; i>=0; i--) {
    if (mDivisor.includes(nDivisor[i])) {
        console.log(nDivisor[i]);
        break;
    }
}
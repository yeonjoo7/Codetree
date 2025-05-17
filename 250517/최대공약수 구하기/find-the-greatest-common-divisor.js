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

let i = m - 1;
let result;
while (!result) {
    const temp1 = n % i;
    const temp2 = m % i;
    if (temp1 == 0 && temp2 == 0) {
        result = i;
    }
    i--;
    if (i < 0) break;
}
console.log(result);
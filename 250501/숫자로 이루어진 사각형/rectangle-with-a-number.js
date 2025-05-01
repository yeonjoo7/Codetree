const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

((n) => {
    let num = 1;
    for (let i=0; i<n; i++) {
        let row = '';
        for (let j=0; j<n; j++) {
            if (num > 9) num = 1
            row += `${num++} `
        }
        console.log(row)
    }
})(N)
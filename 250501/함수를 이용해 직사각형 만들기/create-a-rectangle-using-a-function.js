const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.
function printRect(n,m) {
    for (let i=0; i<n; i++) {
        let row = ''
        for (let j=0; j<m; j++) {
            row += '1'
        }
        console.log(row);
    }
}
printRect(n,m);
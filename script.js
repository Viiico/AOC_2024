import fs from 'fs'
const inp = fs.readFileSync("inputs/Day1.txt", 'utf-8').replaceAll("\r", "").split(" ").filter(Boolean).join(" ").split("\n")
let col1 = []
let col2 = []
for (const row of inp){
    const [val1, val2] = row.split(" ")
    col1.push(+val1)
    col2.push(+val2)
}
col1.sort()
col2.sort()
let total = 0;

for(let i=0; i<col1.length; i++){
    total += Math.abs(col1[i] - col2[i])
}
console.log(total);
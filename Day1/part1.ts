import fs from "fs";
const input: string[] = fs
  .readFileSync("inputs/inp1.txt", "utf-8")
  .split(" ")
  .filter(Boolean)
  .join(" ")
  .split("\n");

const codeStart = performance.timing.navigationStart + performance.now()
let col1: number[] = [];
let col2: number[] = [];
for (const row of input) {
  const [val1, val2] = row.split(" ");
  col1.push(parseInt(val1));
  col2.push(parseInt(val2));
}
col1.sort();
col2.sort()

let sum: number = 0;
for(let i=0; i<col1.length; i++){
    sum += Math.abs(col1[i] - col2[i])
}
const codeEnd = performance.timing.navigationStart + performance.now()
console.log(sum, codeEnd-codeStart);
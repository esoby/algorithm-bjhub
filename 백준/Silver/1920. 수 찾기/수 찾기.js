let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let n = parseInt(input[0]);
let dict = input[1].split(" ").map((v) => parseInt(v));
let m = parseInt(input[2]);
let srch = input[3].split(" ").map((v) => parseInt(v));

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

dict.sort((a, b) => a - b);

let ans = [];
for (target of srch) {
  ans.push(binarySearch(dict, target, 0, n) !== -1 ? 1 : 0)
}
for (i of ans){
  process.stdout.write(i + ' ');
}

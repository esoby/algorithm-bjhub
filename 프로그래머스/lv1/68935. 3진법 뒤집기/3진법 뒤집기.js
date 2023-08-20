// function solution(n) {
//     const arr = [];
//     while (n){
//         arr.push(n % 3);
//         n = parseInt(n / 3);
//     }
//     return arr.reverse().map((v, i) => v * Math.pow(3, i)).reduce((a, c) => a + c, 0);
// }

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
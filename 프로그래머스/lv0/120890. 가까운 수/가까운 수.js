function solution(array, n) {
    let gap = array.map((v) => Math.abs(v - n)).sort((a, b)=> a-b)[0];
    return array.indexOf(n - gap) !== -1 ? n - gap : n + gap
}
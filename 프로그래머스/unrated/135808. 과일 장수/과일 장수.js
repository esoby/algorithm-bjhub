function solutionX(k, m, score) {
    var answer = [];
    
    score.sort((a, b) => b - a)
    
    let tmp = [];
    while(score.length >= m){
        tmp = score.splice(0, m)
        answer.push(Math.min(...tmp) * m)
    }
    return answer ? answer.reduce((a, c) => a+c, 0) : 0;
}
function solution(k, m, score) {
    var answer = [];
    
    let arr = new Array(k).fill(0)
    score.forEach((v, i) => {
        arr[v-1]++;
    })
    
    let cnt = 0;
    for(let i = arr.length-1; i > -1; i--){
        cnt += parseInt(arr[i] / m) * m * (i + 1)
        arr[i-1] += arr[i] % m
    }
    return cnt;
}
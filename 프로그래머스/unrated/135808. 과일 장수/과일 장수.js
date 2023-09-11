function X_solution(k, m, score) {
    score.sort((a, b) => b - a)
    
    let sum = 0;
    while(score.length >= m){
        let tmp = score.splice(0, m)
        sum += Math.min(...tmp) * m;
    }
    return sum;
}
// sort 시간 초과

function solution(k, m, score) {
    const arr = new Array(k).fill(0)
    score.forEach(v => arr[v-1]++)
    
    let cnt = 0;
    for(let i = arr.length-1; i > -1; i--){
        cnt += parseInt(arr[i] / m) * m * (i + 1)
        arr[i-1] += arr[i] % m
    }
    return cnt;
}
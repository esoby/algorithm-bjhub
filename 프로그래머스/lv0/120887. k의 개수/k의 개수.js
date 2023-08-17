function solution(i, j, k) {
    let answer = '';
    for(let idx = i; idx <= j; idx++){ answer += idx; }
    return answer.split('').filter((e) => {
        return parseInt(e) === k ? true : false
    }).length
}
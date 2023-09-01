function solution(s) {
    var answer = [];
    
    const map = new Map();
    [...s].forEach((c, i) => {
        answer.push(map.get(c) > -1 ? i - map.get(c) : -1)
        map.set(c, i)
    })
    
    return answer;
}
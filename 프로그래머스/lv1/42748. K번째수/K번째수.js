function solution(array, commands) {
    var answer = [];
    
    commands.forEach((vArr) => {
        let [i, j, k] = vArr;
        answer.push(array.slice(i-1, j).sort((a,b)=>a-b)[k-1])
    })
    return answer;
}
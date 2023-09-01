function solutionX(s) {
    var answer = [];
    
    const myset = new Set();
    let arr = s.split('')
    arr.forEach((c, idx) => {
        if(!myset.has(c)) {
            answer.push(-1)
            myset.add(c)
        } else {
            let i = 0;
            for(i = idx - 1; i > 0; i--) if(c == arr[i]) break;
            answer.push(idx - i)
        }
    })
    return answer;
}

function solution(s) {
    var answer = [];
    const map = new Map();
    s.split('').forEach((c, i) => {
        answer.push(map.get(c) > -1 ? i - map.get(c) : -1)
        map.set(c, i)
    })
    return answer;
}
function solution(s) {
    var answer = [];
    
    const myset = new Set();
    let arr = s.split('')
    arr.forEach((c, idx) => {
        
        if(myset.has(c)) {
            let i = 0;
            for(i = idx - 1; i > 0; i--){
                if(c == arr[i]) break;
            }
            answer.push(idx - i)
        } else {
            answer.push(-1)
            myset.add(c)
        }
    })
    return answer;
}
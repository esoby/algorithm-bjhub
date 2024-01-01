function solution(s) {
    let len = s.length
    s = s.repeat(3)
    let cnt = 0
    let flag = 0
    
    for (let j = 0; j < len; j++){
        let stack = []
        s.slice(flag, len + flag++).split('').forEach(v => {
            stack.push(v)
            let tmp = stack.slice(stack.length - 2).join('')
            if (tmp === '[]' || tmp === '()' || tmp === '{}') for(let i = 0; i < 2; i++) stack.pop()
        })
        if(stack.length === 0) cnt += 1 
    }
    return cnt;
}
function solution(msg) {
    // 사전 초기화
    let dict = new Array(27).fill('A') 
    dict = dict.map((v, i) => String.fromCharCode(v.charCodeAt() + i-1))
    
    let ans = []
    
    for (let s = 0; s < msg.length;){
        let e = s + 1
        let sub = ''
        let last = 0
        for (; e < msg.length + 1; e++){
            sub = msg.slice(s, e)
            idx = dict.indexOf(sub)
            
            // 사전에 없는 단어
            if (idx == -1) break
            last = idx
        }
        ans.push(last)
        dict.push(sub)
        s += sub.length - 1
        if (e == msg.length + 1) s += 1
    }
    
    return ans
}
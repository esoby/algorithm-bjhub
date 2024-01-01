function solution(elements) {
    let set = new Set()
    
    for (let len = 1; len <= elements.length; len++){
        let flag = 0
        for (let i = 0; i < elements.length; i++){
            let part = elements.slice(flag, len + flag)
            let tmp = part.length === len ?
                part : [...part, ...elements.slice(0, len - part.length)]
            set.add(tmp.reduce((a, c) => a + c, 0))
            flag++
        }
    }
    return set.size;
}
function solution(elements) {
    let set = new Set()
    
    for (let len = 1; len <= elements.length; len++){
        let flag = 0
        for (let i = 0; i < elements.length; i++)
            set.add(elements.concat(elements).slice(flag, len + flag++).reduce((a, c) => a + c, 0))
    }
    return set.size;
}
function solution(k, tangerine) {
    let cnt = 0
    let obj = {}
    
    tangerine.forEach(v => obj[v - 1] ? obj[v - 1]++ : obj[v - 1] = 1)
    obj = Object.values(obj).sort((a, b) => a - b)
    
    let tmp = obj.length
    while (cnt < k) cnt += obj.pop()

    return tmp - obj.length;
}
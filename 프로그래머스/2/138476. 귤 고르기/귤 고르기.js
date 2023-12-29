function solution(k, tangerine) {
    let obj = {}
    tangerine.forEach(v => obj[v - 1] ? obj[v - 1]++ : obj[v - 1] = 1)
    obj = Object.values(obj).sort((a, b) => a - b)
    
    let cnt = 0
    let level = obj.length
    while (cnt < k) cnt += obj.pop()

    return level - obj.length;
}
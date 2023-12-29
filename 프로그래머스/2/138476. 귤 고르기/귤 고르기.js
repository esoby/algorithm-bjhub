function solution(k, tangerine) {
    let cnt = 0
    let obj = {}
    tangerine.forEach(v => obj[v - 1] ? obj[v - 1]++ : obj[v - 1] = 1)
    obj = Object.values(obj).sort((a, b) => a - b)
    
    let ans = 0
    while (cnt < k) {
        cnt += obj.pop()
        ans++
    }

    return ans;
}
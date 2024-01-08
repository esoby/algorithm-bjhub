function solution(citations) {
    const arr = [0]
    
    citations.forEach(v => {
        let len = citations.filter(ct => ct >= v).length
        if(v >= len) arr.push(len)
    })
    
    return Math.max(...arr)
}
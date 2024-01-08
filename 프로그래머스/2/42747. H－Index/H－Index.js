function solution(citations) {
    let arr = [0]
    
    citations.sort((a, b) => b - a)
    
    citations.forEach(v => {
        if(v >= citations.filter(ct => ct >= v).length)
            arr.push(citations.filter(ct => ct >= v).length)
    })
    
    return Math.max(...arr)
}
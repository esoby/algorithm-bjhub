function solution(n, left, right) {
    let arr = []
    
    for (let idx = left; idx <= right; idx++)
       arr.push( Math.max(idx % n, Math.floor(idx / n)) + 1 )
        
    return arr;
}
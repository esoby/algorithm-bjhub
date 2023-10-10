function solution(n) {
    const arr = []
    
    arr.push(0)
    arr.push(1)
    
    for(let i = 2; i < n + 1; i++)
        arr.push((arr[i-1] + arr[i-2]) % 1234567);
    
    return arr[n]
}
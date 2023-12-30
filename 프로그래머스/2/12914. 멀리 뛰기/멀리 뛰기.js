function solution(n) {
    let a = 2
    let b = 3
    
    for (let i = 4; i <= n; i++) [a, b] = [b, (a + b) % 1234567]
    
    return n < 4 ? n : b
}
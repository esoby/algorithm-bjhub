function solution(A,B){
    A.sort((a, b) => b - a)
    B.sort((a, b) => a - b)
    
    return A.reduce((a, c, i) => a + c * B[i], 0)
}
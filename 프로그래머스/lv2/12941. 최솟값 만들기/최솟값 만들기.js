function solution(A,B){
    A.sort((a, b) => b - a)
    B.sort((a, b) => a - b)
    
    return A.map((v, i) => v * B[i]).reduce((a, c) => a + c, 0)
}
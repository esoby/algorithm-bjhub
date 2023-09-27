function solution(A,B){
    var answer = 0;
    
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    return A.map((v, i) => v * B[i]).reduce((a, c) => a + c, 0)
}
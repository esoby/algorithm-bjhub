function solution(a, b, n) {
    var answer = 0;
    
    while (n >= a) {
        let retCnt = parseInt(n / a);
        answer += retCnt * b;
        n = n % a + b * retCnt;
    }
    return answer;
}
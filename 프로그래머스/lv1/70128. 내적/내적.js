function solution(a, b) {
    return a.reduce((a, c, idx) => a + c * b[idx], 0);
}
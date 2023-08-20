function solution(n) {
    return n.toString(3).split('').map((v, i) => v * Math.pow(3, i)).reduce((a, c) => a + c, 0);
}
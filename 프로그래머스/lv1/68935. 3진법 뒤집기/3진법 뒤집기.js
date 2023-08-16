function solution(n) {
    const arr = [];
    while (true){
        arr.push(n % 3)
        if (n < 3) break;
        n = parseInt(n / 3);
    }
    return arr.reverse().map((v, i) => v * Math.pow(3, i)).reduce((a, c) => a+c, 0);
}
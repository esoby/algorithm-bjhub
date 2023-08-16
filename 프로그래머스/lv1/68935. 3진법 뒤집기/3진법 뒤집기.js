function solution(n) {
    const arr = [];
    while (true){
        arr.push(n % 3)
        if (n < 3) break;
        n = parseInt(n / 3);
    }
    arr.reverse().forEach((v, i) => {
        arr[i] = arr[i] * Math.pow(3, i)
    })
    return arr.reduce((a, c) => a+c, 0);
}
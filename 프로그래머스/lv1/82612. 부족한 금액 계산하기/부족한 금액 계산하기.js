function solution(price, money, count) {
    let n = money - count * (count + 1) / 2 * price;
    return n !== Math.abs(n) ? n * -1 : 0;
}
function solution(left, right) {
    var sum = 0;
    for (let i = left; i <= right; i++) sum += Number.isInteger(Math.sqrt(i)) ? -1 * i : i;
    return sum;
}
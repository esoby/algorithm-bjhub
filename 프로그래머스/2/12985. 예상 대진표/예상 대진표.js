function solution(n, n1, n2){
    let cnt = 1;

    let a = Math.min(n1, n2)
    let b = Math.max(n1, n2)
    
    while (!(a % 2 === 1 && a + 1 === b)) {
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        cnt += 1
    }
    return cnt;
}
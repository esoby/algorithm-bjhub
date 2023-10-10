function solution(n) {
    let res = n + 1
    for( ; ; res++)
        if (n.toString(2).split('').filter(v => v == 1).length ===
        res.toString(2).split('').filter(v => v == 1).length)
            break;
    return res;
}
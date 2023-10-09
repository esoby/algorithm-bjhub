function solution(n) {
    let res = 0
    for(res = n + 1; ; res++){
        if (n.toString(2).split('').filter(v => v == 1).length ===
        res.toString(2).split('').filter(v => v == 1).length)
            break;
    }
    return res;
}
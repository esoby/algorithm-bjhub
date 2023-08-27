function solution(t, p) {
    let cnt = 0;
    
    t.split('').forEach((v, i) =>{
        let n = t.slice(i, i + p.length);
        if (n.length === p.length && parseInt(n) <= parseInt(p)) cnt++;
    })
    
    return cnt;
}
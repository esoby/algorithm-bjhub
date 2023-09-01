function solution(n, y, ps) {
    return ps.map(p => {
        p = p.map(v => n.indexOf(v) !== -1 ? y[n.indexOf(v)] : 0)
        return p.reduce((a, c) => a + c, 0);
    })
}
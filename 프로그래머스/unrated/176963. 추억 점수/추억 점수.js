function solution(n, y, ps) {
    return ps.map(p => {
        return p.map(v => n.indexOf(v) !== -1 ? y[n.indexOf(v)] : 0)
                .reduce((a, c) => a + c, 0);
    })
}
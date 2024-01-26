function solution(n, t, m, p) {
    let num = 0
    const lst = []
    
    for (; lst.length < m * t; num++)
        lst.push(...num.toString(n).split('').map(v => v.toUpperCase()))
    
    return lst.filter((v, i) => i % m == p - 1).slice(0, t).join('')
}
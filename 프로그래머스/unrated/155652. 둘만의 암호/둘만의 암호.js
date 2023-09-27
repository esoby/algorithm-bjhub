function solution(s, skip, index) {
    s = s.split('')
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    skip.split('').forEach(v => alpha.splice(alpha.indexOf(v), 1))
    
    s = s.map(v => {
        return alpha[(alpha.indexOf(v) + index) % alpha.length]
    })
    return s.join('')
}
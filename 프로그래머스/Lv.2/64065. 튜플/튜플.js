function solution(s) {
    s = s.replaceAll('{', ' ')
        .replaceAll('}', ' ')
        .split(' ')
        .filter(v => v !== '' && v !== ',')
        .map(v => v.split(','))
        .map(v => v.map(n => parseInt(n)))
        .sort((a, b) => a.length - b.length)
    
    const ans = []
    
    s.forEach(v => {
        v.forEach(n => {
            if(ans.indexOf(n) === -1) ans.push(n)
        })
    })
    
    return ans
}
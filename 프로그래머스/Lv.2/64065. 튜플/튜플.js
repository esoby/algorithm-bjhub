function solution(s) {
    s = s.slice(2, s.length-2)
        .split('},{')
        .map(v => v.split(','))
        .map(v => v.map(n => parseInt(n)))
        .sort((a, b) => a.length - b.length)
    
    console.log(s)
    const ans = []
    
    s.forEach(v => v.forEach(n => ans.indexOf(n) === -1 ? ans.push(n) : ''))
    return ans
}
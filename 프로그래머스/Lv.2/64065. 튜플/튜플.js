function solution(s) {
    s = s.replaceAll('{', ' ')
        .replaceAll('}', ' ')
        .split(' ')
        .filter(v => v !== '' && v !== ',')
        .map(v => v.split(','))
        .map(v => v.map(num => parseInt(num)))
        .sort((a, b) => a.length - b.length)
    //	[ [ 2 ], [ 2, 1 ], [ 2, 1, 3 ], [ 2, 1, 3, 4 ] ]
    
    const ans = []
    
    s.forEach(arr => {
        arr.forEach(v => {
            if(ans.indexOf(v) === -1) ans.push(v)
        })
    })
    
    return ans
}
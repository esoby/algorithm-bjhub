function solution(keymap, targets) {
    let map = new Map();
    
    keymap.forEach(str => {
        str.split('').forEach((v, i) => {
            map.set(v, Math.min(i + 1, map.get(v) ?? i + 1));
        })
    })
    targets = targets.map(tg => {
        tg = tg.split('').map(v => map.get(v)).reduce((a,c) => a + c,0)
        if (!tg) return -1
        else return tg
    })
    
    return targets;
}
function solution(want, number, discount){
    let cnt = 0
    
    for (let i = 0; i < discount.length - 9; i++){
        let dis = discount.slice(i, i + 10)
    
        let map = new Map()
        want.forEach((v,i) => map.set(v, number[i]))
        dis.forEach(v => { if(map.has(v)) map.set(v, map.get(v) - 1)})
        
        const iter = map.values();
        for(let j = 0; j < map.size; j++) {
            if (iter.next().value > 0) break
            if (j === map.size - 1) cnt += 1
        }
    }
    return cnt
}
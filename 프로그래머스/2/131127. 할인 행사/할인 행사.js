function solution(want, number, discount){
    let result = 0
    
    
    for (let i = 0; i < discount.length; i++){
        let dis = discount.slice(i, i + 10)
        
        let tmp = new Map()
        want.forEach((v,i) => tmp.set(v, number[i]))
        
        dis.forEach(v => {
            if (tmp.has(v)) tmp.set(v, tmp.get(v) - 1)
        })
        
        const arr = []
        const iter = tmp.values();
        for(let j = 0; j < tmp.size; j++) arr.push(iter.next().value)
        
        if (arr.filter(v => v !== 0).length < 1) result += 1
    }
    return result
}
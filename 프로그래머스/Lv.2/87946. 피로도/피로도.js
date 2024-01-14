function permute(nums) {
    let result = []
    
    if (nums.length === 1) return [nums]
    
    for (let i = 0; i < nums.length; i++) {
        let tmp = nums.slice()
        tmp.splice(i, 1)
        let rest = permute(tmp)
        
        for(let j = 0; j < rest.length; j++) {
            result.push([nums[i]].concat(rest[j]));
        }
    }
    return result;
}

function solution(k, dungeons) {
    let cnt = 0
    const first_k = k
    let dmap = new Map()
    dungeons.forEach((v, i) => dmap.set(i, v))

    let permutations = permute([...dmap.keys()]) 

    for (let p of permutations) {
        let k = first_k
        let visited = 0
        
        for (let i of p) {
            let dg = dmap.get(i)
            
            if (k >= dg[0]) {
                k -= dg[1]
                visited++
            } else break
        }
        cnt = Math.max(cnt, visited)
    }
    return cnt;
}

function solution(k, tangerine) {
    let size = {}
    let result = 0
    let count = 0
    tangerine.map(e => {
        size[e-1] ? size[e-1]++ : size[e-1] = 1 
    })
    let value = Object.values(size)
    value.sort((a,b) => b-a)
    for(let i = 0; i < value.length; i++){
        result += value[i]
        count++
        if(result >= k){
            break;
        }
    }
    return count
}
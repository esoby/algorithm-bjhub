function solution(clothes) {
    let map = new Map()
    let answer = 1
    
    clothes.forEach((cl, i) => 
        map.set(cl[1], map.get(cl[1]) ? map.get(cl[1]) + 1 : 1))
    
    map.forEach(v => answer *= v + 1)
    return answer - 1
}
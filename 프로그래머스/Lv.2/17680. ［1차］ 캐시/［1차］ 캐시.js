function solution(cacheSize, cities) {
    let ans = 0;
    let arr = []
    
    if (!cacheSize) return cities.length * 5
    
    cities.forEach(city => {
        let idx = arr.indexOf(city.toLowerCase())
        
        if (idx > -1) {
            ans += 1
            arr.splice(idx, 1)   
        } else ans += 5
        
        if (cacheSize && arr.length >= cacheSize)
            arr.shift()
        
        arr.push(city.toLowerCase())
    })
    
    return ans;
}
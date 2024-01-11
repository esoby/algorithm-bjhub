function solution(cacheSize, cities) {
    let ans = 0;
    let arr = []
    
    if (!cacheSize) return cities.length * 5
    cities.forEach((city, idx) => {
        let index = arr.indexOf(city.toLowerCase())
        if (index > -1) {
            ans += 1
            arr.splice(index, 1)   
        } else ans += 5
        if (cacheSize && arr.length >= cacheSize)
            arr.shift()
        arr.push(city.toLowerCase())
    })
    
    return ans;
}
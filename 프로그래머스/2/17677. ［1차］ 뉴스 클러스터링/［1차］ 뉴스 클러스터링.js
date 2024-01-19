function solution(str1, str2) {
    let arr1 = strToArr(str1)
    let arr2 = strToArr(str2)
    
    function strToArr(str){
        let arr = []
        for(let i = 0; i < str.length - 1; i++)
            if(str.slice(i, i+2).search(/[^A-Za-z]/) == -1)
                arr.push((str[i] + str[i + 1]).toLowerCase())
        return arr
    }
    
    let inter = 0
    let union = arr2.length
        
    arr1.forEach(v =>{
        idx = arr2.indexOf(v)
        if(idx > -1){
            arr2[idx] = '/'
            inter++
        } else union++
    })

    return union === 0 ? 65536 : Math.floor(inter / union * 65536);
}
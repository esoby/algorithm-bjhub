function solution(str1, str2) {
    let arr1 = []
    let arr2 = []
    
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    for(let i = 0; i < str1.length - 1; i++)
        if(str1.slice(i, i+2).search(/[^a-z]/) == -1)
            arr1.push(str1[i] + str1[i + 1])
    
    for(let i = 0; i < str2.length - 1; i++)
        if(str2.slice(i, i+2).search(/[^a-z]/) == -1)
            arr2.push(str2[i] + str2[i + 1])

    
    let inter = 0
    let union = arr2.length
        
    for(let i = 0; i < arr1.length; i++){
        let flag = inter
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr2[j] = '/'
                inter++
                break
            }
        }
        if(flag == inter) union++
    }
    if (!inter && !union) return 65536
    return Math.floor(inter / union * 65536)
}
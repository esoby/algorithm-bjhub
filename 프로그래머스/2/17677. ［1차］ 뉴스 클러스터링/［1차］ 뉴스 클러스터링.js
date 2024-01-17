function solution(str1, str2) {
    let arr1 = []
    let arr2 = []
    
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    for(let i = 0; i < str1.length - 1; i++){
        tmp = str1[i] + str1[i + 1]
        if(tmp.search(/[^a-z]/) == -1)
            arr1.push(str1[i] + str1[i + 1])
    }
    for(let i = 0; i < str2.length - 1; i++){
        tmp = str2[i] + str2[i + 1]
        if(tmp.search(/[^a-z]/) === -1)
            arr2.push(str2[i] + str2[i + 1])
    }
    
    inter = []
    union = [...arr2]
    for(let i = 0; i < arr1.length; i++){
        let flag = false
        cnt = arr2.length
        while(arr2.length && cnt){
            cnt--
            let tmp = arr2.shift()
            if(arr1[i] === tmp){
                flag = true
                inter.push(arr1[i])
                break
            }else {
                arr2.push(tmp)
            }
        }
        if(!flag){
            union.push(arr1[i])
        }
        
    }
    if (!inter.length && !union.length){
        return 65536
    }
    return Math.floor(inter.length / union.length * 65536);
}
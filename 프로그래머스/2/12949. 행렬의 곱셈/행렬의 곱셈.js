function solution(arr1, arr2) {
    let ans = []
    
    for(let i = 0; i < arr1.length; i++){
        let a = arr1[i]
        let tmp = []
        for(let j = 0; j < arr2[0].length; j++){
            let b = []
            for(let k = 0; k < arr2.length; k++){
                b.push(arr2[k][j])
            }
            tmp.push(a.map((v, i) => v * b[i]).reduce((a,c) => a+c, 0))
        }
        ans.push(tmp)
    }
    
    return ans;
}
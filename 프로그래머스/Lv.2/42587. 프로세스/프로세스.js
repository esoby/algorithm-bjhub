function solution(pr, loc) {
    task = []
    pr.forEach((_, i) => task.push(i))
    
    
    function chkPrMin(num, pr){
        let flag = true
        pr.forEach(v =>{
            if(v > num) flag = false
        })
        return flag
    }
    
    cnt = 0
    while (pr.length) {
        tmp = pr.shift()
        tmp_idx = task.shift()
        
        if(chkPrMin(tmp, pr)){
            cnt++
            if (tmp_idx === loc) return cnt
        } else {
            pr.push(tmp)
            task.push(tmp_idx)
        }
    }
    return 0;
}
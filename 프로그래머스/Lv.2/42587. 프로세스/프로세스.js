function solution(pr, loc) {
    let cnt = 0
    
    while(pr.length) {
        loc--
        tmp = pr.shift()
        
        if(Math.max(...pr) <= tmp) {
            cnt++
            if(loc == -1) return cnt
        } else {
            pr.push(tmp)
            if(loc == -1) loc = pr.length - 1
        }
    }
}
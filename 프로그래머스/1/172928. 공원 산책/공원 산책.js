function solution(park, routes) {
    let res = [0, 0];
    let op = ''
    let n = 0
    
    // 시작 지점 찾기
    park.forEach((v, i) => {
        v.split('').forEach((val, idx) => {
            if (val === 'S') res = [i, idx]
        })
    })
    
    routes.forEach(route => {
        [op, n] = route.split(' ')
        let tmp = res
        n = parseInt(n)
        
        
        if (op === 'E' && res[1] + n < park[0].length){ 
            let flag = true
            for (let i = 1; i <= n; i++){
                if (park[res[0]][res[1] + i] === 'X') flag = false
            }
            if(flag) res[1] += n
        }
        else if (op === 'W' && res[1] - n >= 0) {
            let flag = true
            for (let i = 1; i <= n; i++){
                if (park[res[0]][res[1] - i] === 'X') flag = false
            }
            if(flag) res[1] -= n
        } 
        else if (op === 'N' && res[0] - parseInt(n) >= 0) {
            let flag = true
            for (let i = 1; i <= n; i++){
                if (park[res[0] - i][res[1]] === 'X') flag = false
            }
            if(flag) res[0] -= n
        } 
        else if (op === 'S' && res[0] + n < park.length){
            let flag = true
            for (let i = 1; i <= n; i++){
                if (park[res[0] + i][res[1]] === 'X') flag = false
            }
            if(flag) res[0] += n
        }
    })
    return res;
}
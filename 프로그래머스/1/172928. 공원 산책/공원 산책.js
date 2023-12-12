function solution(park, routes) {
    let res = [0, 0];
    let op = ''
    let n = 0
    
    park.forEach((v, i) => v.split('').forEach((val, idx) => val === 'S' ? res = [i, idx] : ''))
    
    routes.forEach(route => {
        [op, n] = route.split(' ')
        n = parseInt(n)
        
        const checkX = (y, y_sign, x, x_sign) => {
            let flag = true
            for (let i = 1; i <= n; i++)
                if (park[y + (y_sign * i)][x + (x_sign * i)] === 'X') flag = false;
            return flag
        }

        if (op === 'E' && res[1] + n < park[0].length && checkX(res[0], 0, res[1], 1)) res[1] += n;
        else if (op === 'W' && res[1] - n >= 0 && checkX(res[0], 0, res[1], -1)) res[1] -= n;
        else if (op === 'S' && res[0] + n < park.length && checkX(res[0], 1, res[1], 0)) res[0] += n;
        else if (op === 'N' && res[0] - parseInt(n) >= 0 && checkX(res[0], -1, res[1], 0)) res[0] -= n;
    })
    
    return res;
}
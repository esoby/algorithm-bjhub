function solution(dirs) {
    let answer = 0;
    
    let visited = []
    let curr = [0, 0]
    dirs.split('').forEach(dir => {
        let tmp = curr.slice()
        if (dir === 'U' && curr[1] + 1 <= 5) curr[0] += 0, curr[1] += 1
        else if (dir === 'D' && curr[1] - 1 >= -5) curr[0] += 0, curr[1] -= 1
        else if (dir === 'R' && curr[0] + 1 <= 5) curr[0] += 1, curr[1] += 0
        else if (dir === 'L' && curr[0] - 1 >= -5) curr[0] -= 1, curr[1] += 0

        if (JSON.stringify(curr) !== JSON.stringify(tmp)) {
            let flag = true
            visited.forEach(visit => {
                if (JSON.stringify(visit) === JSON.stringify(tmp.concat(curr))
                    || JSON.stringify(visit) === JSON.stringify(curr.concat(tmp))) 
                    flag = false
            })

            if (flag) {
                answer++
                visited.push(tmp.concat(curr))
            }
        }
    })
    
    return answer;
}
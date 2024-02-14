function solution(dirs) {
    let answer = 0;
    const visited = []
    const curr = [0, 0]
    
    dirs.split('').forEach(dir => {
        let before = curr.slice()
        if (dir === 'U' && curr[1] + 1 <= 5) curr[0] += 0, curr[1] += 1
        else if (dir === 'D' && curr[1] - 1 >= -5) curr[0] += 0, curr[1] -= 1
        else if (dir === 'R' && curr[0] + 1 <= 5) curr[0] += 1, curr[1] += 0
        else if (dir === 'L' && curr[0] - 1 >= -5) curr[0] -= 1, curr[1] += 0
        
        if (!(before[0] === curr[0] && before[1] === curr[1])) {
            let flag = true
            visited.forEach(visit => {
                if (JSON.stringify(visit) === JSON.stringify(before.concat(curr))) flag = false
            })
            if (flag) {
                answer++
                visited.push(before.concat(curr))
                visited.push(curr.concat(before))
            }
        }
    })
    
    return answer;
}
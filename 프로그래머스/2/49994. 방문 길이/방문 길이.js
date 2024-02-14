function solution(dirs) {
    let answer = 0;
    const curr = [0, 0]
    const visited = {}
    
    for (let i = 0; i < dirs.length; i++) {
        let dir = dirs[i]
        let before = curr.slice().toString()
        
        if (dir === 'U' && curr[1] + 1 <= 5) curr[0] += 0, curr[1] += 1
        else if (dir === 'D' && curr[1] - 1 >= -5) curr[0] += 0, curr[1] -= 1
        else if (dir === 'R' && curr[0] + 1 <= 5) curr[0] += 1, curr[1] += 0
        else if (dir === 'L' && curr[0] - 1 >= -5) curr[0] -= 1, curr[1] += 0
        
        let str_curr = curr.toString()
        if (before === str_curr) continue
        
        if (!visited[before+str_curr] && !visited[str_curr+before]) {
            answer++
            visited[before+str_curr] = 1
            visited[str_curr+before] = 1
        }
    }
    
    return answer;
}
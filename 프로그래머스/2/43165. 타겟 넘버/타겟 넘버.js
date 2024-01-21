function solution(numbers, target) {
    let cnt = 0
    
    function dfs(num, visit) {
        if (visit === numbers.length) {
            if (num === target) cnt += 1
            return
        }
        
        dfs(num + numbers[visit], visit + 1)
        dfs(num - numbers[visit], visit + 1)
    }
    
    dfs(0, 0)
    return cnt
}

function solution(k, dungeons) {
    let ans = 0
  
    function dfs(k, visited){
        if(k < 0) return
        ans = Math.max(ans, visited.length)
        
        for(let i = 0; i < dungeons.length; i++)
            if(!visited.includes(i) && dungeons[i][0] <= k)
                dfs(k - dungeons[i][1], [...visited, i])
    }
    
    dfs(k, [])
    return ans
}

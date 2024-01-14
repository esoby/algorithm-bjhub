function solution(k, dungeons) {
    let answer = 0;
  
    function dfs(k, visited){
        if(k < 0) return;
        answer = Math.max(answer, visited.length);
        
        for(let i = 0; i < dungeons.length; i++) {
            if(!visited.includes(i) && dungeons[i][0] <= k) {
                dfs(k - dungeons[i][1], [...visited, i]);
            }
        }
    }
    dfs(k, []);
    return answer;
}

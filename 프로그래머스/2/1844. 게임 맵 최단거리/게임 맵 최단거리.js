function solution(maps) {
    
    let n = maps.length;
    let m = maps[0].length;
    
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    let queue = [[0, 0]];

    while(queue.length > 0) {
        let [x, y] = queue.shift();
        
        for(let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            
            if(0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny] === 1) {
                queue.push([nx, ny]);
                maps[nx][ny] = maps[x][y] + 1;
            }
        }
    }

    return maps[n-1][m-1] === 1 ? -1 : maps[n-1][m-1];
}

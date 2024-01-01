function X_solution(n, left, right) {
    let arr = []
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(Math.max(i, j) + 1)
         }
    }
    return arr.slice(left, right + 1);
}

function solution(n, left, right) {
    let arr = []
    
    for (let idx = left; idx <= right; idx++){
       arr.push( Math.max(idx % n, Math.floor(idx / n)) + 1 ) 
    }
        
    return arr;
}
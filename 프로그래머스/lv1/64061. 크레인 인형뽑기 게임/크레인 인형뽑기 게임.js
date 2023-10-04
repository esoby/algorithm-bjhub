function solution(board, moves) {
    var answer = 0;
    
    let newB = board.map(v => [...v]);
    
    board.forEach((v,i) => {
        v.forEach((vv,j) => newB[j][i] = vv)})
    
    let arr = [];
    moves.forEach((loc, _) => {
        for(let i = 0; i < newB[loc-1].length; i++){
            if(newB[loc-1][i]) {
                if(arr[arr.length-1] === newB[loc-1][i]) {
                    arr.splice(arr.length-1,1);
                    answer += 2;
                }else arr.push(newB[loc-1][i]);
                newB[loc-1][i] = 0;
                break;
            }
        }
    })
    return answer;
}
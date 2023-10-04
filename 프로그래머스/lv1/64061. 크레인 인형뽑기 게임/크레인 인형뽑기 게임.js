function solution(board, moves) {
    let answer = 0;
    const arr = [];
    moves.forEach((loc, _) => {
        let i = 0;
        for(; i < board.length; i++) if(board[i][loc-1]) break;
        if (board[i]) {
            if(arr[arr.length-1] === board[i][loc-1]) {
                arr.splice(arr.length-1,1);
                answer += 2;
            } else arr.push(board[i][loc-1]);
            board[i][loc-1] = 0;}
    })
    return answer;
}
function solution(k, score) {
    const honor = [];
    
    return score.map(v => {
        if( honor[0] < v || honor.length < k) {
            if(honor.length === k) honor.shift();
            honor.push(v);
            honor.sort((a, b) => a - b);
        }
        return honor[0];
    })
}
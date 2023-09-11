function solution(k, m, score) {
    score.sort((a, b) => b - a)
    
    let sum = 0;
    // while(score.length >= m){
    //     let tmp = score.splice(0, m)
    //     sum += Math.min(...tmp) * m;
    // }
    
    let count = Math.floor(score.length / m);

    for(let i=1; i<=count; i++) {
        sum += score[m*i-1] * m;  
    }
    return sum;
}
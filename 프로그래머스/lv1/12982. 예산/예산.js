function solution(d, budget) {
    let sum = 0;
    let cnt = 0;
    
    d.sort((a, b) => a - b).forEach((v, i) => {
        if (sum + v <= budget){
            cnt++;
            sum += v;
        }  
    })
    return cnt;
}
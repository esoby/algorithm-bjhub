function solution(number, limit, power) {
    let arr = new Array(number).fill(0)
    let sum = 0;
    arr.forEach((v, idx) => {
        let cnt = 0;
        if((idx+1) % Math.sqrt(idx+1) === 0) cnt++;
        for(let i = 1; i < Math.sqrt(idx+1); i++) if((idx+1) % i === 0) cnt += 2;
        if(cnt > limit) sum += power; else sum += cnt; 
    })
    return sum;
}
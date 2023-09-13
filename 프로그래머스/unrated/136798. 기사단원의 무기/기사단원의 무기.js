function solution(number, limit, power) {
    let sum = 0;
    for(let idx = 1; idx <= number; idx++) {
        let cnt = 0;
        if(idx % Math.sqrt(idx) === 0) cnt++;
        for(let i = 1; i < Math.sqrt(idx); i++) if(idx % i === 0) cnt += 2;
        if(cnt > limit) sum += power; else sum += cnt; 
    }
    return sum;
}
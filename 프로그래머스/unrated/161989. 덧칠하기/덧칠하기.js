function solution(n, m, sec) {
    let cnt = 1;

    // for(const el of sec){
    //     if(el === 0) continue;
    //     let stand = el + m;
    //     cnt++;
    //     for(let j = sec.indexOf(el); j < sec.length; j++) 
    //         if(sec[j] < stand) sec[j] = 0;
    // }
    let stand = sec[0] + m - 1
    for(const el of sec){
        if (stand < el) {
            stand = el + m - 1
            cnt++;
        }
    }
    
    return cnt;
}
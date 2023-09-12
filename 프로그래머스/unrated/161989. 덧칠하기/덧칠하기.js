function solution(n, m, sec) {
    let cnt = 0;

    for(const el of sec){
        if(el === 0) continue;
        let stand = el + m;
        cnt++;
        for(let j = sec.indexOf(el); j < sec.length; j++) 
            if(sec[j] < stand) sec[j] = 0;
    }
    
    return cnt;
}
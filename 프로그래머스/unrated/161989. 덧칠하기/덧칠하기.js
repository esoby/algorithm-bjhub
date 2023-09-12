function solution(n, m, sec) {
    //while (1 < sec[0]) sec = sec.map(v => v - 1);
    
    let cnt = 0;
    for(let i = 0; i < sec.length; i++) {
        if(sec[i]!== 0){
            cnt++;
            let stand = sec[i];
            for(let j=i; j < sec.length; j++){
                if(sec[j] < stand + m) sec[j] = 0;
            }
        }
    }
    return cnt;
}
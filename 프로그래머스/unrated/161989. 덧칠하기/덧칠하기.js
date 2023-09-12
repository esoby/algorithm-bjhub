function solution(n, m, sec) {
    let cnt = 1;
    let stand = sec[0] + m - 1;
    
    for(const el of sec){
        if (stand < el) {
            stand = el + m - 1;
            cnt++;
        }
    }
    return cnt;
}
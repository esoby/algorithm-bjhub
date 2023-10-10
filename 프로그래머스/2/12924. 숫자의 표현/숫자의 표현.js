function solution(n) {
    let cnt = 0;
    if (n == 1) return 1;
    for(let i = 1; i < n; i++){
        let total = 0
        for(let j = i; j <= n; j++){
            total += j
            if(total > n) break;
            if(total == n){
                cnt++;
                break;
            }
        }
    }


    return cnt + 1;
}

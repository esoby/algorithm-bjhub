function solution(num) {
    var cnt = 0;
    for(let i = 0; i < num.length; i++){
        for(let j = i + 1 ; j < num.length; j++){
            for(let k = j + 1 ; k < num.length; k++) if (!(num[i] + num[j] + num[k])) cnt++;
        }
    }
    return cnt;
}
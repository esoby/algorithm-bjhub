function solution(A, B) {
    let cnt = 0;
    while(cnt < A.length){
        if(A == B) return cnt;
        let c = A.slice(-1)
        A = (c + A).slice(0, A.length)
        cnt++;
    }
    return -1;
}
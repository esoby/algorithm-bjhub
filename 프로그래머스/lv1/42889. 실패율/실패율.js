function solution(N, stages) {
    const fail = []
    
    for(let curr = 1; curr <= N; curr++){
        let cnt1 = 0, cnt2 = 0;
        stages.forEach(v => {
            if(curr === v) cnt1++;
            if(curr <= v) cnt2++;
        })
        fail.push([curr, cnt1 / cnt2])
    } 
    
    return fail.sort((a, b) => b[1] - a[1]).map(v => v[0])
}
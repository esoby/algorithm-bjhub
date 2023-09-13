function solution(N, stages) {
    const fail = []
    for(let curr = 1; curr <= N; curr++){
        let cnt1 = 0, cnt2 = 0;
        stages.forEach(v => {
            if(curr === v) cnt1++;
            if(curr <= v) cnt2++;
        })
        fail.push(cnt1 / cnt2)
    } 
    let map = new Map()
    fail.forEach((v, i) => { map.set(i, v) })
    return [...map].sort((a, b) => b[1] - a[1]).map(v => v[0] + 1)
}
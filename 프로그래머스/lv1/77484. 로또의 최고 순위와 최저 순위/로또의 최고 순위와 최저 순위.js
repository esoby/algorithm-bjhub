function solution(lottos, win_nums) {
    let cnt = 0;
    lottos.forEach(v => {
        if(win_nums.indexOf(v) !== -1) cnt++;
    })
    let max = lottos.filter(v => v === 0).length + cnt
    return [max === 0 ? 6 : 7-max, cnt === 0 ? 6 : 7-cnt];
}
function solution(babbling) {
    let answer = 0;
    const lang = ['aya','ye','woo','ma'];
    for(let i = 0; i < lang.length; i++){
        babbling = babbling.map(el => el.replaceAll(lang[i],0))
    };
    for(let i = 0; i < lang.length; i++){
        babbling = babbling.map(el => el.replaceAll(0,''))
    };
    babbling.forEach((v) => { if (v.length === 0) answer += 1; })
    return answer;
}
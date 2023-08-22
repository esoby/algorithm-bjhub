function solution(babbling) {
    let answer = 0;
    const lang = ['aya','ye','woo','ma'];
    lang.forEach((v) => {
        babbling = babbling.map(el => el.replaceAll(v,0))
    })
    babbling = babbling.map(el => el.replaceAll(0,''))
    babbling.forEach((v) => { if (!v.length) answer += 1; })
    return answer;
}
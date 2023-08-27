function solution(t, p) {
    let arr = [];
    let len = p.length;
    t = t.split('')
    t.forEach((v, i) =>{
        if(t[i+len-1]) arr.push(t.slice(i, i+len).join(''));
    })
    return arr.filter(v => parseInt(v) <= parseInt(p)).length;
}
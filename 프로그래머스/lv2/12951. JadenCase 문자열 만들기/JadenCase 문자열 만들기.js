function solution(s) {
    s = s.split('')
    
    let flag = true;
    s.forEach((v, i) => {
        if (flag && v !== ' ') {
            flag = false;
            s[i] = s[i].toUpperCase();
        }
        else if (v === ' ') flag = true;
        else s[i] = s[i].toLowerCase();
    })
    
    return s.join('');
}
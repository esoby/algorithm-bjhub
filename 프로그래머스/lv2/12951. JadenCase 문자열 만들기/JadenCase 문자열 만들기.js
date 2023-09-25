function solution(s) {
    s = s.toLowerCase().split('');
 
    let flag = true;
    s.forEach((v, i) => {
        if (flag && v !== ' ') {
            flag = false;
            s[i] = s[i].toUpperCase();
        }
        else if (v === ' ') flag = true;
    })
    
    return s.join('');
}
function solution(s) {
    var answer = 0;
    s = s.split('');
    let x = s[0]
    
    let a = 0;
    let b = 0;
    let cnt = 0;
    s.forEach((v,i) => {
        if(v === x) a++;
        else b++;
        if(a === b) {
            cnt++; 
            x = s[i+1];
            a = 0; b = 0;
        }
    })
    
    return a === b ? cnt : cnt+1;
}
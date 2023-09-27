function solution(s) {
    let cnt = 0;
    let zero = 0;
    
    while(!(s == 1)){
        cnt++;
        
        zero += s.split('').filter(v => v == 0).length
        let c = s.split('').filter(v => v == 1).length
        s = c.toString(2)
    }
    
    
    return [cnt, zero];
}
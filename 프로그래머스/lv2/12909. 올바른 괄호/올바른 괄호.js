function solution(s){
    let left = 0;
    let right = 0;
    let flag = true
    
    if(s.length < 2) return false;
    
    s.split('').forEach(v => {
        if(v === '('){
            left++;
            if(left === right) {
                flag = false
                return false
            }
        }else {
            right++;
            if(left === right) {
                left = 0;
                right = 0;
            }
        }
    })
    return left === right ? flag : false
}
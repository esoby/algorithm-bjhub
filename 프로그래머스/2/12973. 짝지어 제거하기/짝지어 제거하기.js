function solution(s){
    const stack = [];
    
    for(let i = 0; s.length > i; i++){
        if(!s) break;
        let c = s.charAt(i);
        if(c === stack[stack.length-1]) stack.pop();
        else stack.push(c);
    }
    return stack.length ? 0 : 1
}
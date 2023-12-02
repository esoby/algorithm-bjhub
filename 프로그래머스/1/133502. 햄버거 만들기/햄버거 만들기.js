function solution(ingredient) {
    let cnt = 0;
    const stack = [];
    
    ingredient.forEach((data) => {
        stack.push(data);
        const len = stack.length;
        
        if (len >= 4 && stack.slice(len - 4, len).join('') === '1231') {
            for(let i = 0; i < 4; i++) stack.pop();
            cnt += 1;
        }
    })
    return cnt;
}
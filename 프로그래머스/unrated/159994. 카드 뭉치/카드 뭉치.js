function solution(cards1, cards2, goal) {
    let flag = true;
    let trycard = 0;
    
    goal.forEach(v => {
        if(cards1[0] === v) cards1.shift();
        else if(cards2[0] === v) cards2.shift();
        else if(trycard === Math.min(cards1.length, cards2.length)){
                flag = false;
                trycard = 0;
        } else trycard++;
    }) 

    return flag ? 'Yes' : 'No';
}
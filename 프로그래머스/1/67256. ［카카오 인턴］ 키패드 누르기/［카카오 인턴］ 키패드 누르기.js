function solution(numbers, hand) {
    var answer = '';
    
    let left = [1, 4]
    let right = [3, 4]
    
    const setCoor = (ans, coor) => {
        answer += ans;
        ans === 'L'? left = coor : right = coor;
    }
    
    numbers.forEach(num => {
        if ('147'.includes(num)) setCoor('L', [1, parseInt(num / 3) + 1]);
        else if ('369'.includes(num)) setCoor('R', [3, parseInt(num / 3)]);
        else {
            let des = [2, num ? parseInt(num / 3) + 1 : 4]
            let l = des.reduce((a, c, i) => a + Math.abs(c - left[i]), 0)
            let r = des.reduce((a, c, i) => a + Math.abs(c - right[i]), 0)
                
            if (l > r || (l === r && hand === 'right')) setCoor('R', des);
            else if (l < r || (l === r && hand === 'left')) setCoor('L', des);
        }
    })
    return answer;
}
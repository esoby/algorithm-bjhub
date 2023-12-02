function solution(numbers, hand) {
    var answer = '';
    let left = [1, 4]
    let right = [3, 4]
    
    numbers.forEach((v, i) => {    
        switch (v) {
            case 1 : case 4 : case 7 :
                left = [1, parseInt(v / 3) + 1];
                answer += 'L';
                break;
            case 3 : case 6 : case 9 :
                right = [3, parseInt(v / 3)];
                answer += 'R';
                break;
            default :
                let des = [2, v ? parseInt(v / 3) + 1 : 4]
                let l = des.reduce((a, c, i) => a + Math.abs(c - left[i]), 0)
                let r = des.reduce((a, c, i) => a + Math.abs(c - right[i]), 0)
                
                if (l > r) {
                    right = des;
                    answer += 'R';
                }
                else if (l < r) {
                    left = des;
                    answer += 'L';
                }
                else {
                    if (hand === 'right') {
                        right = des;
                        answer += 'R';
                    } else {
                        left = des;
                        answer += 'L';
                    }
                }
            }
    })
    return answer;
}
function solution(dartResult) {
    let answer = [];
    let curr = 0;
    dartResult = dartResult.split('');
    dartResult.forEach((v, i) => {
        if('0123456789'.indexOf(v) > -1) {
            let idx = i+1;
            
            if('0123456789'.indexOf(dartResult[i-1]) > -1) return false;
            
            for(let j = i + 1; j < dartResult.length; j++){
                if('0123456789'.indexOf(dartResult[j]) === -1) {idx = j; break;}
            }
            v = dartResult.slice(i, idx).join('')
            switch (dartResult[idx]){
                case 'S' : answer.push(parseInt(v)); curr++; break;
                case 'D' : answer.push(v * v); curr++; break;
                case 'T' : answer.push(v * v * v); curr++; break;
            }
        } else if(v === '*'){
            if(curr-1 > -1) answer[curr-1] *= 2;
            if(curr-2 > -1) answer[curr-2] *= 2;
        } else if(v === '#'){
            if(curr-1 > -1) answer[curr-1] *= -1;
        } 
    })
    return answer.reduce((a,c) => a + parseInt(c), 0);
}
function solutionX(n) { 
    let cnt = 0
    for(let i = 3; i < n; i++){
        flag = true;
        for(let j = 2; j < i; j++) {
            if (i !== j && !((i+1) % (j+1))) flag = false;
        }
        if(flag) cnt++;
    }
    return cnt + 1;
}
function solution(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    answer[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (answer[j] === 0) continue;
    for (let k = j + j; k <= n; k += j) {
      answer[k] = 0;
    }
  }

  return answer.filter((el) => el).length;
}
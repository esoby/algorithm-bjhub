function solution(progresses, speeds) {
    var answer = [];

    while(progresses.length){
        if(progresses[0] >= 100) {
            let cnt = 0;
            for (i of progresses){
                if (i < 100) break;
                cnt++;
            }
            answer.push(cnt);
            progresses.splice(0, cnt);
            speeds.splice(0, cnt);
        }
        progresses = progresses.map((d, i) => d + speeds[i]);

    }
    return answer;
}
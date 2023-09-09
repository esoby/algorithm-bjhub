function solution(answers) {
    var answer = [];
    
    const one = '12345'.repeat(answers.length).split('');
    const two = '21232425'.repeat(answers.length).split('');
    const thr = '3311224455'.repeat(answers.length).split('');
    
    let len = [
        one.filter((v, i) => v == answers[i]).length,
        two.filter((v, i) => v == answers[i]).length,
        thr.filter((v, i) => v == answers[i]).length
    ]
    
    let m = Math.max(...len)
    len.forEach((v, i) => v == m ? answer.push(i+1) : '')
    
    return answer;
}
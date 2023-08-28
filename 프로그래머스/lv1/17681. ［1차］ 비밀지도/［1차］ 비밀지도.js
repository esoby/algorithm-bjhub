function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1.forEach((_, i) => {
        let line = (arr1[i] | arr2[i]).toString(2);
        answer.push(('0'.repeat(n - line.length) + line)
                    .replaceAll('1', '#')
                    .replaceAll('0', ' '))
    })
    
    return answer;
}
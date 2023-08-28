function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1.forEach((v, i) => {
        let item = (arr1[i] | arr2[i]).toString(2);
        while (item.length < n) item = '0' + item;
        answer.push(item.replaceAll('1', '#').replaceAll('0', ' '))
    })
    
    return answer;
}
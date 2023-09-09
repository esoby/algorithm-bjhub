function solution(answers) {
    const one = [1, 2, 3, 4, 5]  
    const two = [2, 1, 2, 3, 2, 4, 2, 5]  
    const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]  
    
    const len = [
        answers.filter((v, i) => v === one[i % 5]).length,
        answers.filter((v, i) => v === two[i % 8]).length,
        answers.filter((v, i) => v === thr[i % 10]).length ]
    
    let max = Math.max(...len)
    return len.map((v, i) => v == max ? i+1 : '').filter(v => v)
}


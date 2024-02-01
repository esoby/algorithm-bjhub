function solution(word) {
    const alpha = ['A', 'E', 'I', 'O', 'U']
    const step = [781, 156, 31, 6, 1]
    
    return word.split('')
        .reduce((a, c, i) => a + alpha.indexOf(c) * step[i] + 1, 0)
}
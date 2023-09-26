function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((_, i) => {
        arr.forEach((a, j) => {
            babbling[i] = babbling[i].replaceAll(a, j)
        })
        arr.forEach((a, j) => {
            babbling[i] = babbling[i].replaceAll((j+'').repeat(2), 'z')
        })
        babbling[i] = babbling[i].replaceAll(/[\d]/g,'')
    })
    return babbling.filter(v => !v).length;
}
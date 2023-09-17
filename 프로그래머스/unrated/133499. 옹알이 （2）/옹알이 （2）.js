function solution(babbling) {
    const arr = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((_, i) => {
        arr.forEach((a, j) => {
            babbling[i] = babbling[i].replaceAll(a, j)
        })
        babbling[i] = babbling[i].replaceAll('00', 'z')
                            .replaceAll('11', 'z')
                            .replaceAll('22', 'z')
                            .replaceAll('33', 'z')
                            .replaceAll(/[\d]/g,'')
    })
    return babbling.filter(v => !v).length;
}
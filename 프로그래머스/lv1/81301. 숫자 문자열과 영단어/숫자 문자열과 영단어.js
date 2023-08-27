function solutionX(s) {
    s = s.replaceAll('zero', 0)
        .replaceAll('one', 1)
        .replaceAll('two', 2)
        .replaceAll('three', 3)
        .replaceAll('four', 4)
        .replaceAll('five', 5)
        .replaceAll('six', 6)
        .replaceAll('seven', 7)
        .replaceAll('eight', 8)
        .replaceAll('nine', 9)

    return parseInt(s);
}

function solution(s) {
    const num = ['zero','one','two','three','four','five','six','seven','eight','nine']

    
    num.forEach((n, i) => {
        let tmp = s.split(n);
        s = tmp.join(i);
    })
    
    return parseInt(s);
}
function isPrime(n) {
    for(let i = 2; i <= Math.sqrt(n); i++) 
        if (n % i === 0) return false;
    return true
}

function solution(n, k) {
    let lst = n.toString(k).split('0')
    let cnt = 0
    lst.forEach(v => {
        if(v !== '' && v !== '1' & isPrime(parseInt(v))) cnt += 1
    })
    return cnt
}
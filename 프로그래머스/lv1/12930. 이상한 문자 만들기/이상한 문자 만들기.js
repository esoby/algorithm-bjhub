function solution(s) {
    var ans = [];
     s.split(' ').forEach((arr) => {
        ans.push(arr.split('').map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join(''))
    })
    return ans.join(' ')
}
function solution(citations) {
    let ans = 0

    citations.sort((a, b) => b - a)

    for(let i = 0; i < citations.length; i++) {
        if (citations[i] > i) ans++
        else break
    }

    return ans
}
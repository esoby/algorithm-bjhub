function solution(topping) {
    let answer = 0
    let pos = Array(10001).fill(-1)
    let rightCnt = Array(topping.length).fill(0)
    let cnt = 0
    for (let i = topping.length - 1; i >= 0; i--) {
        if (pos[topping[i]] === -1) {
            pos[topping[i]] = i
            cnt++
        }
        rightCnt[i] = cnt
    }
    cnt = 0
    pos.fill(-1)
    for (let i = 1; i < topping.length; i++) {
        if (pos[topping[i-1]] === -1) {
            pos[topping[i-1]] = i
            cnt++
        }
        if (cnt === rightCnt[i]) answer++
    }
    return answer
}

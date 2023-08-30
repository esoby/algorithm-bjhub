function solution(numbers) {
    const set = new Set()
    numbers.forEach((v, i) => {
        numbers.forEach((v2, i2) => { if (i !== i2) set.add(v + v2); })
    })
    return [...set].sort((a, b) => a - b)
}

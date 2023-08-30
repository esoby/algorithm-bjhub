function solution(numbers) {
  let newArray = [];
    numbers.forEach((v, i) => {
        numbers.forEach((v2, i2) => {
            if (i !== i2) newArray.push(v + v2);
        })
    })
    newArray.sort((a,b) => a-b)
    
    const setArray = new Set(newArray)
    const answer = [...setArray]
    return answer
}

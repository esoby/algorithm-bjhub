function solution(array, commands) {
    return commands.map((vArr) => {
        let [i, j, k] = vArr;
        return array.slice(i-1, j).sort((a,b)=>a-b)[k-1];
    })
}
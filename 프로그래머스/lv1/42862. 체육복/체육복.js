function solution(n, lost, reserve) {
    let arr = new Array(n).fill(1)
    
    reserve.forEach(v => arr[v-1] += 1)
    lost.forEach(v => arr[v-1] -= 1)

    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] === 2) {
            if(arr[i-1] === 0) {
                arr[i-1]++;
                arr[i]--;
            } else if(arr[i+1] === 0) {
                arr[i+1]++;
                arr[i]--;
            }
        }
    }
    return arr.filter(v => v).length;
}
function solution(arr) {
    let unit = [2, 3, 5, 7, 11, 13]
    
    for (let idx = 0; idx < arr.length; idx++) {
        if(!arr[idx + 1]) break;
        let v = arr[idx]
        let v2 = arr[idx + 1]
        let lcm = 1;
        
        for (let i = 0; i < unit.length; i++) {
            while (v % unit[i] === 0 || v2 % unit[i] === 0) {
                if (v % unit[i] === 0 && v2 % unit[i] === 0) {
                    lcm *= unit[i]
                    v /= unit[i]
                    v2 /= unit[i]
                } else if (v % unit[i] === 0) {
                    lcm *= unit[i]
                    v /= unit[i]
                } else if (v2 % unit[i] === 0) {
                    lcm *= unit[i]
                    v2 /= unit[i]
                }
            }
        }
        lcm *= v !== v2 ? v * v2 : v
        arr[idx + 1] = parseInt(lcm)
            console.log(arr)
    }
    return arr[arr.length - 1];
}
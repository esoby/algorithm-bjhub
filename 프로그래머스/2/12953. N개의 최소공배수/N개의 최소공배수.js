function solution(arr) {
    let unit = [2, 3, 5, 7, 11, 13]
    
    for (let idx = 0; idx < arr.length; idx++) {
        if(!arr[idx + 1]) break;
        let v1 = arr[idx]
        let v2 = arr[idx + 1]
        let lcm = 1;
        
        for (let i = 0; i < unit.length; i++) {
            while (v1 % unit[i] === 0 || v2 % unit[i] === 0) {
                if (v1 % unit[i] === 0 && v2 % unit[i] === 0) {
                    lcm *= unit[i]
                    v1 /= unit[i]
                    v2 /= unit[i]
                } else if (v1 % unit[i] === 0) {
                    lcm *= unit[i]
                    v1 /= unit[i]
                } else if (v2 % unit[i] === 0) {
                    lcm *= unit[i]
                    v2 /= unit[i]
                }
            }
        }
        lcm *= v1 !== v2 ? v1 * v2 : v1
        arr[idx + 1] = lcm
    }
    return arr[arr.length - 1];
}
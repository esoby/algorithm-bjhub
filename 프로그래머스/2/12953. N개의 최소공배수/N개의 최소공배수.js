function solution(arr) {
    let prime = [2, 3, 5, 7, 11, 13]
    
    for (let idx = 0; idx < arr.length - 1; idx++) {
        let n1 = arr[idx]
        let n2 = arr[idx + 1]
        let lcm = 1;
        
        for (let i = 0; i < prime.length; i++) {
            let pr = prime[i]
            while (n1 % pr === 0 || n2 % pr === 0) {
                if (n1 % pr === 0 && n2 % pr === 0) [n1, n2] = [n1 / pr, n2 / pr]
                else if (n1 % pr === 0) n1 /= pr
                else if (n2 % pr === 0) n2 /= pr
                lcm *= pr
            }
        }
        lcm *= n1 !== n2 ? n1 * n2 : n1
        arr[idx + 1] = lcm
    }
    return arr[arr.length - 1];
}
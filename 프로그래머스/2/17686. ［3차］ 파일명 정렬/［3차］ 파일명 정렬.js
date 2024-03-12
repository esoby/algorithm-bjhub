function solution(files) {
    files = files.map(file => {
        let tmp = file.toLowerCase()
        let head = ''
        while('abcdefghijklmnopqrstuvwxyz- .'.includes(tmp[0])){
            head += file[0]
            file = file.slice(1)
            tmp = tmp.slice(1)
        }
        let num = ''
        while('0123456789'.includes(tmp[0])){
            num += file[0]
            file = file.slice(1)
            tmp = tmp.slice(1)
        }
        return [head, num, file]
    })
    
    files.sort((a, b) => {
        let res = a[0].toLowerCase().localeCompare(b[0].toLowerCase())
        if (res == 0) return parseInt(a[1]) - parseInt(b[1])
        return res  
    });
    return files.map(v => v.join(''));
}
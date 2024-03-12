function solution(files) {
    files = files.map(file => {
        const match = file.match(/^([^\d]+)(\d+)/)
        const tail = file.slice(match[1].length + match[2].length)
        return [match[1], match[2], tail]
    })
    
    files.sort((a, b) => {
        let res = a[0].toLowerCase().localeCompare(b[0].toLowerCase())
        if (res == 0) return parseInt(a[1]) - parseInt(b[1])
        return res  
    })
    
    return files.map(v => v.join(''));
}
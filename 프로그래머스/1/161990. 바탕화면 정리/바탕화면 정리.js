function solution(wallpaper) {
    let x = []
    let y = []
    
    wallpaper.forEach((line, idx) => {
        if (line.includes('#')) x.push(idx);
        line.split('').forEach((v, idx) => v === '#' ? y.push(idx) : '')
    })
    
    return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1];
}
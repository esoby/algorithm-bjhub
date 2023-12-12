function solution(wallpaper) {
    let x = []
    let y = []
    
    wallpaper.forEach((line, idx) => {
        if (line.includes('#')) {
            x.push(idx);
            y.push(line.indexOf('#'));
            y.push(line.lastIndexOf('#'));
        }
    })
    
    return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1];
}
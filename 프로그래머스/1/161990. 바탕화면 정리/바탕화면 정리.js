function solution(wallpaper) {
    let line_cnt = []
    let val_cnt = []
    wallpaper = wallpaper.map(v => v.split(''))
    wallpaper.forEach((line,index) => {
        if (line.includes('#')) line_cnt.push(index);
        line.forEach((v,i) => {
            if (v === '#') val_cnt.push(i);
        })
    })
    return [Math.min(...line_cnt), Math.min(...val_cnt), Math.max(...line_cnt) + 1, Math.max(...val_cnt) + 1];
}
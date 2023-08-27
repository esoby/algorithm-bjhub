function solution(sizes) {
    let sizes_max = sizes.map(v => v = Math.max(v[0], v[1]))
    let sizes_min = sizes.map(v => v = Math.min(v[0], v[1]))

    return Math.max(...sizes_max) * Math.max(...sizes_min);
}
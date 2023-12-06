function solution(id) {
    // 1
    id = id.toLowerCase()
    // 2
    id = id.replaceAll(/[^a-z0-9\-\_\.]/g,'')
    // 3
    while(id.includes('..')) id = id.replaceAll('..', '.');
    // 4
    id = id[0] === '.' ? id.slice(1, id.length) : id
    // 5    
    id = id === '' ? 'a' : id
    // 6
    id = id.slice(0, 15)
    id = id[id.length - 1] === '.' ? id.slice(0, id.length - 1) : id
    // 7
    return id.length < 3 ? id + id[id.length - 1].repeat(3 - id.length) : id
}
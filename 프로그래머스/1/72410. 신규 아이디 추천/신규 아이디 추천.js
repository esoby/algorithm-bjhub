function solution(new_id) {
    // 1
    new_id = new_id.toLowerCase()
    // 2
    new_id = new_id.replaceAll(/[^a-z0-9\-\_\.]/g,'')
    // 3
    while(new_id.includes('..')) new_id = new_id.replaceAll('..', '.');
    // 4
    new_id = new_id.split('');
    if(new_id[0] === '.') new_id.shift();
    if(new_id[new_id.length - 1] === '.') new_id.pop();
    // 5
    if(!new_id[0]) new_id.push('a');
    // 6
    while(new_id.length > 15) new_id.pop();
    if(new_id[new_id.length - 1] === '.') new_id.pop();
    // 7
    while(new_id.length < 3) new_id.push(new_id[new_id.length - 1])
    
    return new_id.join('')
}
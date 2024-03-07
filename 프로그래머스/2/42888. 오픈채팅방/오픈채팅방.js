function solution(record) {
    const result = [];
    
    let finalName = new Map()
    record.forEach(r => {
        let [com, id, name]= r.split(' ')
        if(com !== 'Leave') finalName.set(id, name)
    })
    
    record.forEach(r => {
        let [com, id, name]= r.split(' ')
        if (com === 'Enter') {
            result.push(finalName.get(id) + '님이 들어왔습니다.')
        } else if (com === 'Leave') {
            result.push(finalName.get(id) + '님이 나갔습니다.')
        }  
    })
    
    
    return result;
}
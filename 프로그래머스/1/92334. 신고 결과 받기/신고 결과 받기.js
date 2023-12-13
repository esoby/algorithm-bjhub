function solution(id_list, report, k) {
    var answer = [];
    
    for(const i of id_list) answer.push(0)
    
    const map = new Map()
    report.forEach(des => {
        let [act, pas] = des.split(' ')
        map.set(pas, map.get(pas) ? new Set([...map.get(pas), act]) : new Set([act]))
    })
    
    map.forEach((set, key) => {
        if (set.size >= k) {
            set.forEach(v => answer[id_list.indexOf(v)] = answer[id_list.indexOf(v)] + 1)
        }
    })
    
    return answer;
}
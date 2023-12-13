function solution(id_list, reports, k) {
    var mail = [];
    for(const i of id_list) mail.push(0)
    
    const map = new Map()
    reports.forEach(report => {
        let [rep, sus] = report.split(' ')
        map.set(sus, map.get(sus) ? new Set([...map.get(sus), rep]) : new Set([rep]))
    })
    
    map.forEach((set, key) => {
        if (set.size >= k)
            set.forEach(v => mail[id_list.indexOf(v)] += 1);
    })
    
    return mail;
}
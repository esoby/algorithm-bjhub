function solution(today, terms, privacies) {
    today = String(today).split('.').map(Number)
    today = today[0] * 28 * 12 + today[1] * 28 + today[2]
    
    const obj_terms = {}
    terms.forEach(v => {
        v = v.split(' ')
        obj_terms[v[0]] = parseInt(v[1]) * 28
    })
    
    privacies = privacies.map((v, i) => {
        v = v.split(' ')
        let date = v[0].split('.').map(Number)
        return date[0] * 28 * 12 + date[1] * 28 + date[2] + obj_terms[v[1]]
    })
    
    return privacies.map((v, i) => v - today <= 0 ? i + 1 : 0).filter(v => v)
}
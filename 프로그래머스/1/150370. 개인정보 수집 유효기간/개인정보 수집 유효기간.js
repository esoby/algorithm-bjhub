function solution(today, terms, privacies) {
    today = String(today).split('.')
    today = parseInt(today[0].slice(2)) * 28 * 12 + parseInt(today[1]) * 28 + parseInt(today[2])
    
    obj_terms = {}
    terms.forEach(v => obj_terms[v.split(' ')[0]] = parseInt(v.split(' ')[1]) * 28)
    
    privacies = privacies.map(v => v.split(' '))
    privacies = privacies.map((v, i) => {
        let date = v[0].split('.')
        return parseInt(date[0].slice(2)) * 28 * 12 + 
            parseInt(date[1]) * 28 + parseInt(date[2]) + obj_terms[v[1]]
    })
    return privacies.map((v, i) => v - today <= 0 ? i + 1 : 0).filter(v => v)
}
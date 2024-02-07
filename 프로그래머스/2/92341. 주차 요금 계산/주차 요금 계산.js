function solution(fees, records) {
    const [기본시간, 기본요금, 단위시간, 단위요금] = fees
    
    const 입차목록 = new Map()
    const 누적시간 = new Map()
    
    records.forEach(record => {
        let [시각, 차량번호, 내역] = record.split(' ')
        let [시, 분] = 시각.split(':')
        let minute = parseInt(시) * 60 + parseInt(분)
        
        if (내역 == 'IN') {
            입차목록.set(차량번호, minute)
        } else if (내역 == 'OUT') {
            if (!누적시간.get(차량번호)) 누적시간.set(차량번호, 0)
            누적시간.set(차량번호, 누적시간.get(차량번호) + minute - 입차목록.get(차량번호))
            입차목록.set(차량번호, -1)
        }
    })
    입차목록.forEach((minute, 차량번호) => {
        if (minute > -1){
            if (!누적시간.get(차량번호)) 누적시간.set(차량번호, 0)
            누적시간.set(차량번호, 누적시간.get(차량번호) + 23 * 60 + 59 - minute)
        }
    })
    const arrs = Array.from(누적시간).sort((a, b) => a[0] - b[0])
    
    return arrs.map(arr => {
        let 주차시간 = arr[1]
        if (주차시간 <= 기본시간) return 기본요금
        else return Math.ceil((주차시간 - 기본시간) / 단위시간) * 단위요금 + 기본요금
    })
}
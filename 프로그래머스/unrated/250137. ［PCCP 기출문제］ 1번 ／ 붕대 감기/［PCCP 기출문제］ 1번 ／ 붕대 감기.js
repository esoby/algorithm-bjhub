function solution(bandage, 현재체력, attacks) {
    const  [시전시간, 초당회복량, 추가회복량] = bandage
    const 최대체력 = 현재체력
    let 직전공격시간 = 0
    
    for (let [공격시간, 피해량] of attacks) {
        let 회복시간 = 공격시간 - 직전공격시간 - 1
        
        현재체력 += 초당회복량 * 회복시간 + 추가회복량 * Math.floor(회복시간 / 시전시간)
        if (현재체력 > 최대체력) 현재체력 = 최대체력
        
        현재체력 -= 피해량
        if (현재체력 <= 0) return -1
        
        직전공격시간 = 공격시간
    }
    return 현재체력
}
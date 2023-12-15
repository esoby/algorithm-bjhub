function solution(bandage, 현재체력, attacks) {
    const 최대체력 = 현재체력
    let 직전공격시간 = 0
    let  [시전시간, 초당회복량, 추가회복량] = bandage
    
    for (let [공격시간, 피해량] of attacks) {
        let 회복시간 = 공격시간 - 직전공격시간 - 1
        현재체력 += 초당회복량 * 회복시간 + 추가회복량 * (회복시간 / 시전시간 >= 1 ? parseInt(회복시간 / 시전시간) : 0)
        if (현재체력 > 최대체력) 현재체력 = 최대체력
        
        현재체력 -= 피해량
        if (현재체력 <= 0) return -1
        
        직전공격시간 = 공격시간
    }
    return 현재체력
}
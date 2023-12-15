function solution(band, hp, attacks) {
    const sec = attacks[attacks.length-1][0]
    const max_hp = hp
    let cnt = 0
    
    for (let i = 0; i <= sec; i++){
        if (attacks[0][0] === i) {
            hp -= attacks.shift()[1]
            cnt = 0
            if (hp <= 0) return -1
        } else if (cnt === band[0] - 1) {
            hp += band[2] + band[1]
            cnt = 0
        } else {
            hp += band[1]
            cnt += 1
        }
        if (hp > max_hp) hp = max_hp
    }
    return hp
}
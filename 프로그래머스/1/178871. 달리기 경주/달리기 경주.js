function solution(players, callings) {
    const map = new Map()
    players.forEach((player, idx) => map.set(player, idx))
    
    callings.forEach(call => {
        const idx = map.get(call);
        
        map.set(players[idx - 1], idx)
        map.set(call, idx - 1)
        players[idx] = players[idx - 1];
        players[idx - 1] = call;

    })
    return players;
}
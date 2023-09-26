function createMap(arr) {
  const map = new Map()
  for(const el of arr) {
    map.set(el, (map.get(el) ?? 0) + 1)
  }
  return map
}

function solution(par, com) {
  const parMap = createMap(par)
  const comMap = createMap(com)
  
  for(const [person, cnt] of parMap) {
    if(comMap.get(person) !== cnt) return person
  }
}
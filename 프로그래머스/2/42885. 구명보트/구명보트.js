function solution(people, limit) {
    let cnt = 0;
    
    people.sort((a, b) => a - b)
    
    while(true){
        if (!people[1]) break;
        if(people[0] + people[people.length - 1] <= limit){
            people.pop()
            people.shift()
        } else {
            people.pop()
        }
        cnt += 1
    }
    return cnt + people.length;
}
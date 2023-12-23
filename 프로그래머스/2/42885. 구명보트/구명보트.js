function solution(people, limit) {
    let cnt = 0;
    
    people.sort((a, b) => a - b)
    
    while (people[1]){
        if (people[0] + people[people.length - 1] <= limit) people.shift();
        people.pop()
        cnt += 1
    }
    return cnt + people.length;
}
function solution(skill, skill_trees) {
    var answer = 0;
    
    skill_trees.forEach(tree => {
        let learned = []
        let flag = true
        
        tree.split('').forEach(sk => {
            let idx = skill.indexOf(sk)
            if (idx > 0) {
                for (let i=0; i < idx; i++)
                    if (learned.indexOf(skill[i]) === -1) flag = false
            }
            learned.push(sk)
        })
        
        if (flag) answer++
    }) 
    return answer;
}
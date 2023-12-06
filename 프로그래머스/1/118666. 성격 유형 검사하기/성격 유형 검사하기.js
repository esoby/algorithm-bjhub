function solution(survey, choices) {
    const score = [-3, -2, -1, 0, 1, 2, 3];
    const type = ['RT', 'CF', 'JM', 'AN'];
    const res = [0, 0, 0, 0];
    
    choices.forEach((choice, i) =>{
        if (survey[i] === 'RT') res[0] += score[choice - 1]
        else if (survey[i] === 'TR') res[0] -= score[choice - 1]
        else if (survey[i] === 'CF') res[1] += score[choice - 1]
        else if (survey[i] === 'FC') res[1] -= score[choice - 1]
        else if (survey[i] === 'JM') res[2] += score[choice - 1]
        else if (survey[i] === 'MJ') res[2] -= score[choice - 1]
        else if (survey[i] === 'AN') res[3] += score[choice - 1]
        else if (survey[i] === 'NA') res[3] -= score[choice - 1]
    })
    
    return res.map((v, i) => v > 0 ? type[i][1] : type[i][0]).join('');
}
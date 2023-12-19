function solution(n, words) {
    const ans = [words[0]];
    
    for (let idx = 1; idx < words.length; idx++) {
        let word = words[idx]
        if (ans.indexOf(word) === -1 && 
            words[idx - 1][words[idx - 1].length - 1] === word[0]) 
            ans.push(word);
        else return [(idx + 1) % n ? (idx + 1) % n : n, Math.ceil((idx + 1) / n)];
    }
    return [0, 0];
}
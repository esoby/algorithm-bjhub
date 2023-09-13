function solution(s) {
    let len = s.length;
    return s.slice(len / 2 - !(len % 2), len / 2 + 1);
}

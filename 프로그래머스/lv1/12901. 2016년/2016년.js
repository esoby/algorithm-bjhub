function solution(a, b) {
    const days = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const cnt = b + month.slice(0, a - 1).reduce((a, c) => a + c, 0)
    return days[cnt % 7 ? cnt % 7 - 1 : 6];
}
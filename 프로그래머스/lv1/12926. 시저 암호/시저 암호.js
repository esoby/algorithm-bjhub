function solution(s, n) {
    var answer = '';
    
    for (let i = 0; i < s.length; i++){

        if (s.slice(i, i+1) === ' '){
            answer += ' '
        } else if (s.charCodeAt(i) < 91 && s.charCodeAt(i) + n > 90){
            answer += String.fromCharCode('A'.charCodeAt(0) + s.charCodeAt(i) + n - 91)
        } else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123 && s.charCodeAt(i) + n > 122){
            answer += String.fromCharCode('a'.charCodeAt(0) + s.charCodeAt(i) + n - 123)
        } else {
            answer += String.fromCharCode(s.charCodeAt(i) + n)
        }
    }
    
    
    return answer;
}
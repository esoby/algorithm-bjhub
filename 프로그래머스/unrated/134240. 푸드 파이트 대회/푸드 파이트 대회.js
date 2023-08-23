function solution(food) {
    var str = '';
    food.forEach((v, i) => { 
        str += (i+'').repeat(parseInt(v / 2)); 
    })
    return str + '0' + str.split('').reverse().join('');
}
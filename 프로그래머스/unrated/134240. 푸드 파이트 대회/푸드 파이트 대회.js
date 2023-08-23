function solution(food) {
    var str = '';
    food.forEach((v, i) => {
        if(v / 2 >= 1) str += (i+'').repeat(parseInt(v / 2));
    })
    return str + '0' + str.split('').sort().reverse().join('');
}
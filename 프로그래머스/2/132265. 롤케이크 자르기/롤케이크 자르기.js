function solution(topping) {
    let answer = 0;
    let firstPos = Array(10001).fill(-1);
    let rightTopping = Array(topping.length).fill(0);
    let rightToppingCount = 0;

    for (let i = topping.length - 1; i >= 0; i--) {
        if (firstPos[topping[i]] === -1) {
            firstPos[topping[i]] = i;
            rightToppingCount++;
        }
        rightTopping[i] = rightToppingCount;
    }

    let leftToppingCount = 0;
    firstPos.fill(-1);

    for (let i = 1; i < topping.length; i++) {
        if (firstPos[topping[i-1]] === -1) {
            firstPos[topping[i-1]] = i;
            leftToppingCount++;
        }
        if (leftToppingCount === rightTopping[i]) {
            answer++;
        }
    }

    return answer;
}

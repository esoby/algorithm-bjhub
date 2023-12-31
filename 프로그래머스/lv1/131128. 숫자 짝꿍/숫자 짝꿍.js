function solution(X, Y) {
  const arrX = X.split('');
  const arrY = Y.split('');
    
  let result = '';
  for(let i = 9; i >= 0; i--) {
    const cntX = arrX.filter(v => v == i).length;
    const cntY = arrY.filter(v => v == i).length;

    result += String(i).repeat(Math.min(cntX, cntY));
  }
    
    return !result ? '-1' : !parseInt(result) ? '0' : result;
}
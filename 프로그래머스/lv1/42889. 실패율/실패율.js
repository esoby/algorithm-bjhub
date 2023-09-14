function solution(N, stages) {
  const fails = [];
  for(let i = 1; i <= N; i++) {
    const num1 = stages.filter(v => v === i).length;
    const num2 = stages.filter(v => v >= i).length;
    fails.push([i, num1 / num2]);
  }
  return fails.sort((a,b) => b[1] - a[1]).map(v => v[0]);
}
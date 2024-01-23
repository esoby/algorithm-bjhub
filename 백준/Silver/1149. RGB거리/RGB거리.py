n = int(input())

costs = []
for _ in range(n):
    costs.append(list(map(int, input().split())))

dp = [[0] * 3 for _ in range(n)]
dp[0] = costs[0]

for i in range(1, n):
    for idx in range(3):
        dp[i][idx] = min(dp[i-1][:idx] + dp[i-1][idx+1:]) + costs[i][idx]

print(min(dp[n-1]))
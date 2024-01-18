n = int(input())

roads = list(map(int, input().split()))
costs = list(map(int, input().split()))

res = costs[0] * roads[0]
for i in range(1, n - 1):
    if costs[i] > costs[i - 1]:
        res += costs[i - 1] * roads[i]
        costs[i] = costs[i - 1]
    else:
        res += costs[i] * roads[i]

print(res)
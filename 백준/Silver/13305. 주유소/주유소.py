n = int(input())

roads = list(map(int, input().split()))
costs = list(map(int, input().split()))

min_cost = min(costs[:n-1])
res = 0
for i in range(n - 1):
    if costs[i] == min_cost:
        res += sum(roads[i:]) * min_cost
        break
    res += costs[i] * roads[i]

print(res)
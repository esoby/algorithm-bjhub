from math import inf
from heapq import heappush, heappop

n, m, x = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    s, e, t = map(int, input().split())
    graph[s].append((e, t))

dists = []
for i in range(n + 1):
    dist = [inf] * (n + 1)

    q = []
    heappush(q, (0, i))
    dist[i] = 0

    while q:
        acc, cur = heappop(q)

        if dist[cur] < acc:
            continue

        for adj, d in graph[cur]:
            cost = acc + d
            if cost < dist[adj]:
                dist[adj] = cost
                heappush(q, (cost, adj))

    dists.append(dist)


tmp = dists[x][1:]

for i in range(n):
    tmp[i] += dists[i+1][x]

print(max(tmp))
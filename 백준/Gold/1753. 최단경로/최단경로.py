from math import inf
from heapq import heappush, heappop

v, e = map(int, input().split())
start = int(input())

graph = [[] for _ in range(v + 1)]

for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))

dist = [inf] * (v + 1)

q = []
heappush(q, (0, start))
dist[start] = 0

while q:
    acc, cur = heappop(q)

    if dist[cur] < acc:
        continue

    for adj, d in graph[cur]:
        cost = acc + d
        if cost < dist[adj]:
            dist[adj] = cost
            heappush(q, (cost, adj))

for d in dist[1:]:
    if d == inf:
        print('INF')
    else:
        print(d)
from heapq import heappop, heappush

# 컴퓨터의 수 (정점 개수)
n = int(input())
# 연결할 수 있는 선의 수 (간선 개수)
m = int(input())
# a 컴퓨터와 b 컴퓨터를 연결하는데 비용이 c / a == b 가능
edges = [tuple(map(int, input().split())) for _ in range(m)]
# [(1, 2, 5), (1, 3, 4), (2, 3, 2), (2, 4, 7), (3, 4, 6), (3, 5, 11), (4, 5, 3), (4, 6, 8), (5, 6, 8)]

# 그래프 그리기
# 왜 n+1이지? 1~6번 컴퓨터니까
graph = [[] for _ in range(n + 1)]
for idx, adj, cost in edges:
    # 양방향
    graph[idx].append((cost, adj))
    graph[adj].append((cost, idx))
# [[], [(5, 2), (4, 3)], [(5, 1), (2, 3), (7, 4)], [(4, 1), (2, 2), (6, 4), (11, 5)], ...
# 컴퓨터별 인접 노드와 간선의 가중치

# 방문 여부 확인용
visited = [False] * (n + 1)
# 시작점 설정
visited[1] = True

heap = []
# 시작점과 연결된 간선 먼저 힙에 집어넣기 - 힙의 초기값 설정이랄까나
for cost, adj in graph[1]:
    heappush(heap, (cost, adj))

# 최소 비용
answer = 0
# 지나친 간선의 수, while 제어용
used_edges = 0

# n개를 잇는 데에 필요한 간선은 n - 1개
while used_edges < n - 1:
    cost, idx = heappop(heap)
    # 이미 방문한 정점 재방문 X
    if visited[idx]:
        continue
    # 처음 온 정점 처리
    visited[idx] = True
    answer += cost
    used_edges += 1
    # 현 정점의 인접 노드로 이동하고자 heap에 추가
    for adj_cost, adj in graph[idx]:
        heappush(heap, (adj_cost, adj))

print(answer)
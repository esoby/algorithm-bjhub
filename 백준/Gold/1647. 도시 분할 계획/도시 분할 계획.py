from heapq import heappop, heappush

# 정점, 간선
n, m = map(int, input().split())
edges = [tuple(map(int, input().split())) for _ in range(m)]

# 그래프 그리기
graph = [[] for _ in range(n + 1)]
for idx, adj, cost in edges:
    graph[idx].append((cost, adj))
    graph[adj].append((cost, idx))

# 방문 여부 확인용
visited = [False] * (n + 1)
# 시작점 설정
visited[1] = True

heap = []
# 시작점과 연결된 간선 먼저 힙에 집어넣기 (힙의 초기값 설정)
for cost, adj in graph[1]:
    heappush(heap, (cost, adj))

# 최소 비용
answer = 0
# 사용한 간선의 수
used_edges = 0
max_cost = 0

while used_edges < n - 1:
    # heappop이기 때문에 최소 cost를 가진 간선 pop
    cost, idx = heappop(heap)
    # 이미 방문한 정점 재방문 X
    if visited[idx]:
        continue
    # 처음 온 정점 처리
    visited[idx] = True
    answer += cost
    used_edges += 1
    # 최대 비용 보관
    max_cost = max(cost, max_cost)
    # 현 정점의 인접 노드로 이동하고자 heap에 추가
    for adj_cost, adj in graph[idx]:
        heappush(heap, (adj_cost, adj))

print(answer - max_cost)
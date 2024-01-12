from collections import deque

n = int(input())
graph = [[] for _ in range(n + 1)]
parents = [0] * (n + 1)

# 그래프 구성하기
for _ in range(n - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# BFS 함수 정의
def bfs(curr):
    q = deque([curr])
    while q:
        node = q.popleft()
        for next_node in graph[node]:
            if parents[next_node] == 0:
                parents[next_node] = node
                q.append(next_node)


# 루트 노드에서 시작하여 BFS 수행
bfs(1)

# 부모 노드 출력
for i in range(2, n + 1):
    print(parents[i])

# 런타임 에러 뜨는데 해결 못함;;;; 뭐가 문제일까요
import sys
from collections import defaultdict, deque

node_count, edge_count, first_node = map(int, sys.stdin.readline().split())
graph = defaultdict(list)

# 연결 형태
for i in range(edge_count):
    node1, node2 = map(int, sys.stdin.readline().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

# 오름차순 정렬
for key in graph.keys():
    graph[key].sort()

# 방문 노드 리스트
visited_DFS = [0 for _ in range(node_count + 1)]
visited_BFS = [0 for _ in range(node_count + 1)]
answer_DFS = []
answer_BFS = []


def DFS(n):
    # 방문
    visited_DFS[n] = 1
    answer_DFS.append(n)

    for node in graph[n]:
        if visited_DFS[node] != 1:
            DFS(node)


def BFS(n):
    q = deque([n])
    visited_BFS[n] = 1
    answer_BFS.append(n)

    while q:
        node = q.popleft()
        for i in graph[node]:
            if visited_BFS[i] == 0:
                q.append(i)
                answer_BFS.append(i)
                visited_BFS[i] = 1

DFS(first_node)
BFS(first_node)

print(*answer_DFS)
print(*answer_BFS)
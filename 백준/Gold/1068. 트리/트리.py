import sys
from collections import defaultdict
n = int(sys.stdin.readline())
m = list(map(int, sys.stdin.readline().split()))
delete = int(sys.stdin.readline())

_dict = defaultdict(list)
count = 0
root = 0

# 노드 연결
for node in range(n):
    _dict[node] = []

for index, value in enumerate(m):
    if value != -1:
        _dict[value].append(index)
    else:
        root = index # 루트 노드 0

# 연결 해제
for key in _dict.keys():
    if delete in _dict[key]:
        _dict[key].remove(delete)

# 삭제 노드가 루트 노드면 0 출력 후 끝
if delete == root:
    print(count)
else:
    def DFS(x):
        global count
        # 리프 노드 도착
        if len(_dict[x]) == 0:
            count += 1
            return
        # 다음 노드 진입
        for node in _dict[x]:
            DFS(node)

    DFS(root)
    print(count)
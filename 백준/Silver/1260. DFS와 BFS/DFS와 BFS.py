from collections import deque

n, m, v = map(int, input().split())

my_dict = {}

for _ in range(m):
    key, val = map(int, input().split())

    if key in my_dict:
        my_dict[key].append(val)
        my_dict[key].sort()
    else:
        my_dict[key] = [val]

    key, val = val, key

    if key in my_dict:
        my_dict[key].append(val)
        my_dict[key].sort()
    else:
        my_dict[key] = [val]


def dfs(num, visited):
    visited.append(num)

    if num in my_dict:
        for i in my_dict[num]:
            if i not in visited:
                dfs(i, visited)
    return visited


def bfs(start):
    visited = [start]
    q = deque([start])

    while q:
        num = q.popleft()
        if num in my_dict:
            for i in my_dict[num]:
                if i not in visited:
                    q.append(i)
                    visited.append(i)
    return visited


print(' '.join(map(str, dfs(v, []))))
print(' '.join(map(str, bfs(v))))

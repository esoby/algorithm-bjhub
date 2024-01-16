n = int(input())

grid = [[0] * n for _ in range(n)]
mst = []
for i in range(n):
    alpha = list(input())
    for j in range(n):
        if alpha[j] != '0':
            num = ord(alpha[j])
            if 65 <= num <= 90:
                num -= 38
            elif 97 <= num <= 122:
                num -= 96
            grid[i][j] = num
            mst.append((num, i, j))

mst.sort()

total = 0
for row in grid:
    total += sum(row)


def find(x):
    if parent[x] == x:
        return x
    parent[x] = find(parent[x])
    return parent[x]


def union(x, y):
    root_x = find(x)
    root_y = find(y)
    if root_x == root_y:
        return
    parent[root_x] = root_y


parent = list(range(n))

result = 0
used_edges = 0

for cost, idx, adj in mst:
    if find(idx) != find(adj):
        union(idx, adj)
        result += cost
        used_edges += 1
        if used_edges == n - 1:
            break

connected_components = set(find(i) for i in range(n))
if len(connected_components) != 1:
    print(-1)
else:
    print(total - result)
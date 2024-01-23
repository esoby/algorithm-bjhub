n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]

max_w = 0
for _ in range(m):
    s, e, w = map(int, input().split())
    graph[s].append((e, w))
    graph[e].append((s, w))
    if max_w < w:
        max_w = w

fac1, fac2 = map(int, input().split())

lo = 1
hi = max_w


while lo <= hi:
    mid = (lo + hi) // 2

    flag = False
    visited = []
    stack = [fac1]

    while stack:
        curr = stack.pop()
        if curr == fac2:
            flag = True
            break

        if curr in visited:
            continue

        visited.append(curr)

        for d, w in graph[curr]:
            if w >= mid and d not in visited:
                stack.append(d)

    if flag:
        lo = mid + 1
    else:
        hi = mid - 1

print(hi)
n = int(input())

maps = []
for _ in range(n):
    line = list(map(int, list(input())))
    maps.append(line)

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
ans = []
cnt = 0

for i in range(n):
    for j in range(n):
        if maps[i][j] == 0:
            continue

        cnt += 1
        ans.append(0)
        stack = [(i, j)]

        while stack:
            x, y = stack.pop()
            if maps[x][y] == 1:
                maps[x][y] = 0
                ans[-1] += 1

            for idx in range(4):
                nb_x = x + dx[idx]
                nb_y = y + dy[idx]
                if nb_x < 0 or nb_y < 0 or nb_x >= n or nb_y >= n or maps[nb_x][nb_y] == 0:
                    continue
                stack.append((nb_x, nb_y))

print(len(ans))
ans.sort()
for num in ans:
    print(num)
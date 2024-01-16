n = int(input())

grid = []
for _ in range(n):
    grid.append(list(input()))

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


import copy
def findField(grid, flag):
    cnt = 0

    for i in range(n):
        for j in range(n):
            if grid[i][j] == '1':
                continue

            cnt += 1
            stack = [(i, j)]

            while stack:
                x, y = stack.pop()
                tmp = grid[x][y]
                grid[x][y] = '1'

                tmp = 'RG' if flag and tmp in 'RG' else tmp

                for d in range(4):
                    nx = x + dx[d]
                    ny = y + dy[d]
                    if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] != '1':
                        if flag and grid[nx][ny] in tmp:
                            stack.append((nx, ny))
                        elif grid[nx][ny] == tmp:
                            stack.append((nx, ny))
    return cnt


grid2 = copy.deepcopy(grid)
print(findField(grid, False), findField(grid2, True))

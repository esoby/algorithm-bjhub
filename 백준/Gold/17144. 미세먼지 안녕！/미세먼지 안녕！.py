r, c, t = map(int, input().split())

room = [list(map(int, input().split())) for _ in range(r)]

while t:
    t -= 1
    
    # 미세먼지 확산
    di = [-1, 1, 0, 0]
    dj = [0, 0, -1, 1]
    
    d_room = [[0 for _ in range(c)] for _ in range(r)]
    
    for i in range(r):
        for j in range(c):
            if room[i][j] > 0:
                spread_amount = room[i][j] // 5
                for d in range(4):
                    ni, nj = i + di[d], j + dj[d]
                    if 0 <= ni < r and 0 <= nj < c and room[ni][nj] != -1:
                        d_room[ni][nj] += spread_amount
                        d_room[i][j] -= spread_amount
    
    for i in range(r):
        for j in range(c):
            room[i][j] += d_room[i][j]
    
    # 공기청정기 작동
    ac = []
    for idx, row in enumerate(room):
        if row[0] == -1:
            ac.append(idx)
    
    # 위쪽 공기청정기 작동
    for i in range(ac[0] - 1, 0, -1):
        room[i][0] = room[i - 1][0]
    for j in range(c - 1):
        room[0][j] = room[0][j + 1]
    for i in range(ac[0]):
        room[i][c - 1] = room[i + 1][c - 1]
    for j in range(c - 1, 1, -1):
        room[ac[0]][j] = room[ac[0]][j - 1]
    room[ac[0]][1] = 0
    
    # 아래쪽 공기청정기 작동
    for i in range(ac[1] + 1, r - 1):
        room[i][0] = room[i + 1][0]
    for j in range(c - 1):
        room[r - 1][j] = room[r - 1][j + 1]
    for i in range(r - 1, ac[1], -1):
        room[i][c - 1] = room[i - 1][c - 1]
    for j in range(c - 1, 1, -1):
        room[ac[1]][j] = room[ac[1]][j - 1]
    room[ac[1]][1] = 0
    
ans = 0
for row in room:
    ans += sum(row)

print(ans + 2)

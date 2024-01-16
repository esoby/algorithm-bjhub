from collections import deque

test = int(input())

dx = [1, 2, 2, 1, -1, -2, -2, -1]
dy = [-2, -1, 1, 2, 2, 1, -1, -2]

for _ in range(test):
    l = int(input())
    x, y = map(int, input().split())
    des_x, des_y = map(int, input().split())
    
    visit = [[0]*l for _ in range(l)]
    
    queue = deque([(x, y)])
    visit[x][y] = 1

    while queue:
        x, y = queue.popleft()
        
        if (x, y) == (des_x, des_y):
            print(visit[x][y] - 1)
            break
            
        for i in range(8):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < l and 0 <= ny < l and visit[nx][ny] == 0:
                queue.append((nx, ny))
                visit[nx][ny] = visit[x][y] + 1

from sys import stdin

input = stdin.readline
t = int(input())

for _ in range(t):
    m = int(input())

    emp = [list(map(int, input().split())) for _ in range(m)]
    emp.sort(key=lambda x: (x[0], x[1]))

    cnt = 0
    for i in range(1, m):
        if emp[i-1][0] < emp[i][0] and emp[i-1][1] < emp[i][1]:
            cnt += 1
            emp[i] = emp[i-1].copy()
    print(m - cnt)
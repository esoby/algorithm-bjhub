t = int(input())

for _ in range(t):
    n = int(input())
    arr = []
    for i in range(n):
        arr.append(input())

    arr.sort()

    flag = True
    for i in range(n - 1):
        l = len(arr[i])
        if arr[i] == arr[i + 1][0:l]:
            flag = False
            break
    if flag:
        print('YES')
    else:
        print('NO')
t = int(input())

for _ in range(t):
    n = int(input())

    if n == 1:
        print(1)
        continue

    queue = [n]

    answer = 0
    while queue:
        num = queue.pop()

        if num == 0:
            answer += 1
            continue

        for i in range(1, 4):
            if num - i >= 0:
                queue.append(num - i)

    print(answer)
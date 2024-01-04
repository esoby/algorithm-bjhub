from collections import deque

test = int(input())

for i in range(test):
    n, curr = map(int, input().split())
    deq = deque(map(int, input().split()))

    first = max(deq)

    cnt = 0
    while deq:
        tmp = deq.popleft()
        if first > tmp:
            deq.append(tmp)
            curr -= 1
            if curr < 0:
                curr = len(deq) - 1
        elif first == tmp:
            cnt += 1
            curr -= 1
            if deq:
                first = max(deq)
            if curr < 0:
                print(cnt)
                break
import sys

input = sys.stdin.readline

n = int(input())

top = list(map(int, input().split()))

stack = [0]
ans = [0]
for i in range(1, n):

    if top[stack[-1]] <= top[i]:
        stack.pop(-1)
        if len(stack) == 0:
            ans.append(0)
            stack.append(i)
        else:
            while stack:
                if top[stack[-1]] <= top[i]:
                    stack.pop(-1)
                else:
                    ans.append(stack[-1] + 1)
                    stack.append(i)
                    break
            if len(stack) == 0:
                ans.append(0)
                stack.append(i)
    else:
        ans.append(stack[-1] + 1)
        stack.append(i)

print(' '.join([str(num) for num in ans]))
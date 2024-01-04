num = int(input())

for i in range(num):
    my_str = input()
    stack = []

    for s in my_str:
        stack.append(s)
        if s == ')':
            if '()' == ''.join(stack[-2:]):
                stack.pop(-1)
                stack.pop(-1)
    if len(stack):
        print('NO')
    else:
        print('YES')
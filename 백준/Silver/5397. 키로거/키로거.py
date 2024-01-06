n = int(input())

for k in range(n):
    str_list = list(input())

    stack1 = []
    stack2 = []

    for i in str_list:
        if i == '<':
            if stack1:
                stack2.append(stack1.pop())
        elif i == '>':
            if stack2:
                stack1.append(stack2.pop())
        elif i == '-':
            if stack1:
                stack1.pop()
        else:
            stack1.append(i)
    while stack2:
        stack1.append(stack2.pop())
    print(''.join(stack1))
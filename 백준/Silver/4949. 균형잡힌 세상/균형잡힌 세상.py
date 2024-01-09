while True:
    word = input()

    if word == '.':
        break

    stack = []

    for c in word:
        if c in '[({':
            stack.append(c)
        elif c in '])}':
            stack.append(c)
            if len(stack) < 2:
                break
            tmp = stack[-2] + stack[-1]
            if tmp == '[]' or tmp == '()' or tmp == '{}':
                stack.pop(-1)
                stack.pop(-1)

    if len(stack):
        print('no')
    else:
        print('yes')
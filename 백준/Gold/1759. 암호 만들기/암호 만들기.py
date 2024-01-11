l, c = map(int, input().split())
chars = list(input().split())
chars.sort()

ans = []

q = [(char, 1) for char in chars]

while q:
    s, cnt = q.pop(0)
    if cnt == l:
        flag = 0
        for k in s:
            if k in 'aeiou':
                flag += 1
        if 0 < flag < len(s) - 1:
            print(s)
        continue

    idx = chars.index(s[-1])
    for i in range(idx + 1, len(chars)):
        q.append((s + chars[i], cnt + 1))


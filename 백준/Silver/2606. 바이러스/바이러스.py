com = int(input())
n = int(input())

my_dict = {}
for _ in range(n):
    k, v = map(int, input().split())
    k, v = str(k), str(v)
    if k in my_dict:
        my_dict[k].append(v)
    else:
        my_dict[k] = [v]
    if v in my_dict:
        my_dict[v].append(k)
    else:
        my_dict[v] = [k]

cnt = 0
stack = ['1']
visited = ['1']

while stack:
    key = stack.pop()

    if key not in my_dict:
        continue

    for node in my_dict[key]:
        if node not in visited:
            stack.append(node)
            visited.append(node)
            cnt += 1

print(cnt)
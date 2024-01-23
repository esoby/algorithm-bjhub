
n, m = map(int, input().split())

loc = list(map(int, input().split()))
loc.sort(reverse=True)

tmp = n
for idx in range(n):
    if loc[idx] < 0:
        tmp = idx
        break

plus = loc[:tmp]
minus = loc[tmp:]
minus.reverse()

total = 0
for i in range(0, len(plus), m):
    total += plus[i] * 2

for i in range(0, len(minus), m):
    total += abs(minus[i]) * 2

plus.append(0)
minus.append(0)
tmp = max(plus[0], abs(minus[0]))

print(total - tmp)

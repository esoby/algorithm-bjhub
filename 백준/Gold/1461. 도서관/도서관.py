n, m = map(int, input().split())

loc = list(map(int, input().split()))

plus = sorted(list(filter(lambda x: x > 0, loc)), reverse=True)
minus = sorted(list(filter(lambda x: x < 0, loc)))

total = 0
for i in range(0, len(plus), m):
    total += plus[i] * 2

for i in range(0, len(minus), m):
    total += abs(minus[i]) * 2

plus.append(0)
minus.append(0)

print(total-max(plus[0], abs(minus[0])))
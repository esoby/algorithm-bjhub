n = int(input())
req = list(map(int, input().split()))
total = int(input())

req.sort()

lo = 0
hi = max(req)

while lo <= hi:
    mid = (lo + hi) // 2

    if sum(min(mid, x) for x in req) <= total:
        lo = mid + 1
    else:
        hi = mid - 1

print(hi)

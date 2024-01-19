n, m = map(int, input().split())
tree = list(map(int, input().split()))


lo = 0
hi = max(tree)

while lo <= hi:
    mid = (lo + hi) // 2

    if sum(x - min(mid, x) for x in tree) >= m:
        lo = mid + 1
    else:
        hi = mid - 1

print(hi)
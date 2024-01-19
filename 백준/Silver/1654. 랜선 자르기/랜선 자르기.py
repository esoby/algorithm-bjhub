k, n = map(int, input().split())
cable = [int(input()) for _ in range(k)]

lo = 0
hi = max(cable)

while lo <= hi:
    mid = (lo + hi) // 2

    if mid <= 0:
        break
        
    if sum(x // mid for x in cable) >= n:
        lo = mid + 1
    else:
        hi = mid - 1

print(hi)


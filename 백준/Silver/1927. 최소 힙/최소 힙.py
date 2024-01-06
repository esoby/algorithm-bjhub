from heapq import heappush, heappop
import sys

input = sys.stdin.readline
n = int(input().rstrip())

heap = []
for _ in range(n):
    x = int(input().rstrip())

    if x:
        heappush(heap, x)
    else:
        if not heap:
            print(0)
        else:
            print(heappop(heap))
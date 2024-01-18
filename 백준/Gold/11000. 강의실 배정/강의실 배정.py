from sys import stdin
from heapq import heappop, heappush

input = stdin.readline

n = int(input())

st = []
for _ in range(n):
    st.append(tuple(map(int, input().split())))

st = sorted(st)

time = [0]
for s, t in st:
    min_time = heappop(time)
    if min_time > s:
        heappush(time, min_time)
    heappush(time, t)

print(len(time))
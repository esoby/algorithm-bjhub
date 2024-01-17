from math import floor
from collections import Counter

n = int(input())

arr = []
for i in range(n):
    arr.append(int(input()))

arr.sort()

print(round(sum(arr)/n))
print(arr[n//2])

cnts = Counter(arr).most_common()
max_cnt = cnts[0][1]
chk = 0
for num, cnt in cnts:
    if cnt == max_cnt:
        chk += 1
if chk == 1:
    print(cnts[0][0])
else:
    print(cnts[1][0])

print(arr[-1] - arr[0])
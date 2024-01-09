n = int(input())

arr1 = []
arr2 = []
cnt = 0

for _ in range(n):
    arr1.append(input())

for _ in range(n):
    arr2.append(input())

for i in range(n):
    chk1 = arr1[:arr1.index(arr2[i])]
    chk2 = arr2[:i]

    for chk in chk2:
        if chk in chk1:
            chk1.pop(chk1.index(chk))
    if len(chk1) != 0:
        cnt += 1

print(cnt)
n = int(input())
arr = []

for i in range(n):
    age, name = map(str, input().split())
    arr.append((int(age), i, name))

arr.sort()

for i in range(n):
    age, _, name = arr[i]
    print(age, name)
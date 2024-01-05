n, m = map(int, input().split())

my_dict = {}
for _ in range(n):
    key, val = input().split()
    my_dict[key] = val

for _ in range(m):
    site = input()
    print(my_dict[site])
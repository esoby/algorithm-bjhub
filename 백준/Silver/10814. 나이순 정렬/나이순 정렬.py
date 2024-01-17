n = int(input())
mem_tuples = []
mylist = []
for i in range(n):
    mylist = input().split() + [i]
    mem_tuples.append(mylist)

mem_tuples = sorted(mem_tuples, key=lambda mem: (int(mem[0]), mem[2]))

for i in mem_tuples:
    for j in range(2):
        print(i[j],end=' ')
    print('')
from sys import stdin

input = stdin.readline

n = int(input())
k = int(input())
s = list(map(int, input().split()))
s.sort()
dis = [s[i] - s[i-1] for i in range(1, n)]
dis.sort(reverse=True)

print(sum(dis[k-1:]))
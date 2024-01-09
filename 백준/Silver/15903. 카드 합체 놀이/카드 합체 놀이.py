n, m = map(int, input().split())
cards = list(map(int, input().split()))

for i in range(m):
    cards.sort()
    cards[0], cards[1] = sum(cards[0:2]), sum(cards[0:2])

print(sum(cards))
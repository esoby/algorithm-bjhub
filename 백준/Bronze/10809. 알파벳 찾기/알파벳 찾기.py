word = input()

for i in range(26):
    c = chr(97 + i)
    print(word.find(c), end=' ')
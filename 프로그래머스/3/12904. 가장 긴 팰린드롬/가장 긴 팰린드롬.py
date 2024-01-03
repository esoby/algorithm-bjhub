def solution(s):
    pal = ''
    for i in range(len(s)):
        for j in range(len(s), i, -1):
            if len(pal) < j-i:
                if s[i:j] == s[i:j][::-1]:
                    pal = s[i:j]
    return len(pal)

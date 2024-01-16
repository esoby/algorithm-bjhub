n, m, k = map(int, input().split())

note = [[0] * m for _ in range(n)]


def rotate_sticker(st):
    return [list(reversed(col)) for col in zip(*st)]


def get_rotations(st):
    rotations = [st]
    for _ in range(3):
        rotations.append(rotate_sticker(rotations[-1]))
    return rotations


def can_attach_sticker(start, st):
    si, sj = start
    for i in range(len(st)):
        for j in range(len(st[0])):
            if si + i >= n or sj + j >= m or (st[i][j] == 1 and note[si + i][sj + j] == 1):
                return False
    return True


def attach_sticker(start, st):
    si, sj = start
    for i in range(len(st)):
        for j in range(len(st[0])):
            if st[i][j] == 1:
                note[si + i][sj + j] = 1


for _ in range(k):
    r, c = map(int, input().split())
    sticker = [list(map(int, input().split())) for _ in range(r)]
    rotated_stickers = get_rotations(sticker)

    flag = False
    for rs in rotated_stickers:
        if flag:
            break
        for i in range(n):
            if flag:
                break
            for j in range(m):
                if i + len(rs) > n or j + len(rs[0]) > m:
                    continue
                if can_attach_sticker((i, j), rs):
                    attach_sticker((i, j), rs)
                    flag = True
                    break

total = sum(sum(row) for row in note)
print(total)
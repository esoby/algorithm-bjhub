class DisjointSet:
    # 분리 집합 알고리즘으로 점들 간 사이클 여부? 연결 여부? 확인
    def __init__(self, n):
        self.parent = list(range(n + 1))

    def find(self, x):
        # 집합 대표에 도달하면 본인 리턴
        if self.parent[x] == x:
            return x
        # 부모의 부모의 부모 ... 를 찾기 (집합 대표를 찾기)
        self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        # 서로 다른 부모 정점을 가지는 집합을 합친다
        # 각 조상을 찾아온다
        root_x = self.find(x)
        root_y = self.find(y)
        # 같으면 이미 한 집합 소속
        if root_x == root_y:
            return
        # 다르면 x의 집합이 y의 집합에 속해지도록 부모를 변경해준다
        self.parent[root_x] = root_y


if __name__ == '__main__':
    from sys import stdin, setrecursionlimit
    input = stdin.readline
    # 재귀 함수 제한 늘리기
    setrecursionlimit(10 ** 5)

    # 정점 수, 간선 수
    n, m = map(int, input().split())
    # 숭이의 출발 위치, 혜빈이의 위치
    start, end = map(int, input().split())
    # 다리 정보
    bridge = []
    for _ in range(m):
        # 집1, 집2, 다리의 무게 제한
        x, y, k = map(int, input().split())
        # 다리의 무게 제한, 집1, 집2으로 저장
        bridge.append((k, x, y))
    # k 기준 오름차순 정렬
    bridge.sort()
    djs = DisjointSet(n)
    # 초기 부모 배열 [0, 1, 2, 3, 4, 5, 6, 7]

    # s, e가 연결되었다면 마지막 가중치가 정답
    last = 0
    # 조상이 같지 않으면 연결되어 있지 않다는 뜻
    while djs.find(start) != djs.find(end) and bridge:
        d, x, y = bridge.pop()
        last = d
        # 연결되어 있으니 같은 집합으로 묶기
        djs.union(x, y)
    # 다리를 다 돌 때까지 도착하지 못 했다면 0 출력
    print(last if djs.find(start) == djs.find(end) else 0)
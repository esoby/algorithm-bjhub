class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            if self.rank[root_x] > self.rank[root_y]:
                self.parent[root_y] = root_x
            else:
                self.parent[root_x] = root_y
                if self.rank[root_x] == self.rank[root_y]:
                    self.rank[root_y] += 1


if __name__ == '__main__':
    from sys import stdin, setrecursionlimit
    input = stdin.readline
    # 재귀 함수 제한 늘리기
    setrecursionlimit(10 ** 5)
    n = int(input())

    # 입력값 저장 (가중치, 행성1, 행성2) 구조의 리스트
    flow = []
    for i in range(n):
        row = list(map(int, input().split()))
        for j in range(n):
            if i != j:
                flow.append((row[j], i, j))
    # 가중치 기준 오름차순으로 정렬
    flow.sort()

    djs = DisjointSet(n)
    # 유지 비용 누적
    result = 0
    # 이용한 간선의 수
    used_edges = 0

    # 가중치가 낮은 간선부터 선택
    for cost, idx, adj in flow:
        # 부모 노드가 같다 = 이 간선을 선택하면 사이클이 생긴다
        if djs.find(idx) != djs.find(adj):
            # 다르면 해당 간선을 선택, 하나의 집합으로 통합
            djs.union(idx, adj)
            result += cost
            used_edges += 1
            if used_edges == n - 1:
                break

    print(result)

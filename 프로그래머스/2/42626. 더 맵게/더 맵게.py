from heapq import heappush, heappop, heapify

def solution(scoville, K):
    answer = 0
    
    heapify(scoville)
    
    while scoville[0] < K and len(scoville) >= 2 :
        first = heappop(scoville)
        second = heappop(scoville)
        
        add = first + second * 2
        heappush(scoville, add)
        answer += 1
    
    return -1 if len(list(filter(lambda x: x < K, scoville))) else answer
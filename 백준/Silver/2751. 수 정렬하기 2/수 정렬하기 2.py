n = int(input())

data_list=[]
for _ in range(n):
    data_list.append(int(input()))
    
data_list = sorted(data_list)

for i in data_list:
    print(i)
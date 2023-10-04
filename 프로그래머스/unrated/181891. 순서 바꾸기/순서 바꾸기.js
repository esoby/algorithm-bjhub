function solution(num_list, n) {
    const add = num_list.slice(0, n);
    num_list.splice(0, n);
    return [...num_list, ...add];
}
function solution(numbers) {
    const nums = numbers.reverse()
    const ans = []
    const stack = []
    
    for (let i = 0; i < nums.length; i++) {
        
        while (stack[stack.length-1] <= nums[i]) stack.pop()
        
        ans.push(stack.length > 0 ? stack[stack.length-1] : -1)
        stack.push(nums[i])
    }    
    
    return ans.reverse();
}
function solution(book) {
    book = book.sort()
    
    for(let i = 0; i < book.length-1; i++)
        if(book[i] === book[i + 1].slice(0, book[i].length)) 
            return false
    
    return true
}
function solution(name, yearning, photos) {
    return photos.map((photo) => {
        photo = photo.map((v) => name.indexOf(v) !== -1 ? yearning[name.indexOf(v)] : 0)
        return photo.reduce((a, c) => a + c, 0);
    })
    
}
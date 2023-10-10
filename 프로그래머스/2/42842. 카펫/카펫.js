function solution(brown, yellow) {
    let ver = 1;
    let hor = (brown - ver * 2) / 2
    
    while(true){
        if (ver * (hor-2) === yellow) break;
        ver++;
        hor = (brown - ver * 2) / 2;
    }
    
    return [hor, ver+2];
}
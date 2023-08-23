function solution(emergency) {
    const sortedEmer = [...emergency].sort((a,b) => b - a);
    return emergency.map((v) => sortedEmer.indexOf(v)+1);
}
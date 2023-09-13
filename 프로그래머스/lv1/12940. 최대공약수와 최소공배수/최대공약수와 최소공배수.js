function solution(n, m) {
    n_tmp = n;
    m_tmp = m;
    n = Math.min(n_tmp, m_tmp);
    m = Math.max(n_tmp, m_tmp);

    while (m % n) {
        r = m % n;
        m = n;
        n = r;
    }
    return [n, m_tmp * n_tmp / n];
}
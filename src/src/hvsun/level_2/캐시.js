function solution(cacheSize, cities) {
    const HIT = 1, MISS = 5
    const cache = []
    let totalTime = 0

    if (cacheSize === 0) return MISS * cities.length

    for (let i = 0; i < cities.length; i++) {
        const searchTarget = cities[i].toLowerCase()

        if (cache.includes(searchTarget)) {
            // HIT: 캐시에서 찾은 경우
            totalTime += HIT
            cache.splice(cache.indexOf(searchTarget), 1)
        } else {
            // MISS: 캐시에서 찾지 못한 경우
            totalTime += MISS
            if (cache.length >= cacheSize) {
                cache.shift()
            }
        }
        cache.push(searchTarget)
    }

    return totalTime
}
function solution(cacheSize, cities) {
    const caches = [];
    const CACHE_HIT = 1;
    const CACHE_MISS = 5;
  
    if (cacheSize === 0) {
      return cities.length * CACHE_MISS;
    }
  
    let times = 0;
    for (let i = 0; i < cities.length; i++) {
      const city = String(cities[i]).toLowerCase();
  
      const cacheIndex = caches.findIndex((data) => data.city === city);
      if (cacheIndex > -1) {
        times += CACHE_HIT;
        caches[cacheIndex].time = i;
      } else {
        if (caches.length >= cacheSize) {
          caches.pop();
        }
  
        times += CACHE_MISS;
        caches.push({ city, time: i });
      }
  
      caches.sort((next, prev) => prev.time - next.time);
    }
  
    return times;
  }
static class Solution {
    static final int CACHE_HIT = 1;
    static final int CACHE_MISS = 5;
    public int solution(int cacheSize, String[] cities) {
        int answer = 0;

        if (cacheSize == 0) {
            return cities.length*5;
        }
        LinkedHashSet cache = new LinkedHashSet<>();
        for (int i=0; i< cities.length; i++) {
            String city = cities[i].toUpperCase();

            if(cache.contains(city)) {
                cache.remove(city);
                answer += CACHE_HIT;
            } else {
                if (cache.size() == cacheSize) {
                    Iterator iterator = cache.iterator();
                    iterator.next();
                    iterator.remove();
                }
                answer += CACHE_MISS;
            }
            cache.add(city);
        }
        return answer;
    }
}
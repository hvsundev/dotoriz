import java.util.*;

class Solution {
    public int solution(int cacheSize, String[] cities) {
      int answer = 0;
      LinkedList<String> cache = new LinkedList<>();
      for (String city : cities) {
        city = city.toLowerCase();
        if (cache.contains(city)) {
          cache.remove(city);
          cache.addFirst(city);
          answer += 1;
        } else {
          if (cache.size() == cacheSize && !cache.isEmpty()) {
              cache.removeLast();
          }
          if (cacheSize != 0) {
            cache.addFirst(city);
          }
          answer += 5;
        }
      }

      return answer;
    }
}
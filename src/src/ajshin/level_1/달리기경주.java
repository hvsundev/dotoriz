import java.util.*;

class 달리기경주 {
    public String[] solution(String[] players, String[] callings) {
      HashMap<String, Integer> map = new HashMap<>();
      for (int i = 0; i < players.length; i++) {
        map.put(players[i], i);
      }

      for (String calling : callings) {
        int nowIndex = map.get(calling);
        String nowPlayer = players[nowIndex];
        players[nowIndex] = players[nowIndex-1];
        players[nowIndex-1] = nowPlayer;
        map.put(players[nowIndex], nowIndex);
        map.put(players[nowIndex-1], nowIndex-1);
      }

      return players;
    }
}
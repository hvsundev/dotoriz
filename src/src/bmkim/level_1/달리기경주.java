public class 달리기경주 {
    public static String[] solution(String[] players, String[] callings) {
        for (String calling : callings) {
            for (int i = 0; i < players.length; i++) {
                if (players[i].equals(calling)) {
                    if (i > 0) {
                        String temp = players[i];
                        players[i] = players[i - 1];
                        players[i - 1] = temp;
                    }
                    break;
                }
            }
        }
        return players;
    }
}

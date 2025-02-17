public class 공원산책 {
    public static int[] solution(String[] park, String[] routes) {
        int x = 0;
        int y = 0;
        char[][] map = new char[park.length][park[0].length()];

        for (int i = 0; i < park.length; i++) {
            map[i] = park[i].toCharArray();
            if (park[i].contains("S")) {
                x = i;
                y = park[i].indexOf("S");
            }
        }

        for (String route : routes) {
            String direction = route.split(" ")[0];
            int distance = Integer.valueOf(route.split(" ")[1]);

            int nx = x;
            int ny = y;

            for (int i = 0; i < distance; i++) {
                if (direction.equals("E")) {
                    ny++;
                } else if (direction.equals("W")) {
                    ny--;
                } else if (direction.equals("S")) {
                    nx++;
                } else {
                    nx--;
                }

                if (nx >= 0 && ny >= 0 && nx < map.length && ny < map[0].length) {
                    if (map[nx][ny] == 'X') {
                        break;
                    }

                    if (i == distance - 1) {
                        x = nx;
                        y = ny;
                    }
                }
            }
        }
        return new int[]{x, y};
    }
}

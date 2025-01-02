import java.util.HashMap;
import java.util.Objects;

public class 공원산책 {

  public int[] solution(String[] park, String[] routes) {

    int[][] directions = {
        {0, 1},   // E
        {0, -1},  // W
        {-1, 0},  // N
        {1, 0}    // S
    };

    String[] directionKeys = {"E", "W", "N", "S"};

    int startX = 0;
    int startY = 0;

    // 시작 위치 검색
    for (int i = 0; i < park.length; i++) {
      for (int j = 0; j < park[i].length(); j++) {
        // "SOO" -> i 번째 줄의 j 번째 글자 (charAt)
        if (park[i].charAt(j) == 'S') {
          startX = i;
          startY = j;
          break;
        }
      }
    }

    // 시작 좌표
    int x = startX;
    int y = startY;
    for (String route : routes) {
      String[] parts = route.split(" ");
      String direction = parts[0];
      int distance = Integer.parseInt(parts[1]);

      // 이동
      int dirIndex = getDirectionIndex(direction, directionKeys);
      int dx = directions[dirIndex][0];
      int dy = directions[dirIndex][1];

      int nx = x;
      int ny = y;
      boolean canMove = true;

      for (int i1 = 0; i1 < distance; i1++) {
        nx += dx;
        ny += dy;

        if (nx < 0 || ny < 0 || nx >=
            park.length || ny >= park[0].length() || park[nx].charAt(ny) == 'X') {
          canMove = false;
          break;
        }

      }
      if (canMove) {
        x = nx;
        y = ny;
      }

    }
    return new int[]{x, y};
  }

  private int getDirectionIndex(String direction, String[] directionKeys) {
    for (String directionKey : directionKeys) {
      if (Objects.equals(direction, directionKey)) {
        return directionKey.indexOf(directionKey);
      }
    }
    return -1;
  }

  public static void main(String[] args) {
    공원산책 main = new 공원산책();
    String[] park = {"SOO", "OXX", "OOO"};
    String[] routes = {"E 2", "S 2", "W 1"};
    System.out.println(main.solution(park, routes));
  }

}
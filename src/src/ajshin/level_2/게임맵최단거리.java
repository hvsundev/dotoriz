import java.util.LinkedList;
import java.util.Queue;

public class 게임맵최단거리 {

  public int solution(int[][] maps) {
    int answer = 0;
    // 동서남북
    int[] dx = {0, 0, 1, -1};
    int[] dy = {1, -1, 0, 0};

    int n = maps.length; // 시작점
    int m = maps[0].length; // 끝

    boolean[][] visited = new boolean[n][m]; //방문된 좌표를 다시 그림
    Queue<int[]> queue = new LinkedList<>();

    // 시작점 초기화
    queue.offer(new int[]{0, 0, 1}); // x,y,거리
    // 시작 좌표 초기화
    visited[0][0] = true;
    while (!queue.isEmpty()) {
      int[] current = queue.poll();
      int x = current[0];
      int y = current[1];
      int distance = current[2];

      // 끝 지점에 도달하면 이동한 거리 반환
      if (x == n - 1 && y == m - 1) {
        return distance;
      }

      // 4방향 탐색
      for (int i = 0; i < 4; i++) {
        // 이동
        int nx = x + dx[i];
        int ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] == 1 && !visited[nx][ny]) {
          //방문처리
          visited[nx][ny] = true;
          //이동한 곳 큐에 추가
          queue.offer(new int[]{nx, ny, distance+1});
        }
      }
    }
    return -1;
  }


  public static void main(String[] args) {
    게임맵최단거리 main = new 게임맵최단거리();
    System.out.println(main.solution(
        new int[][]{{1, 0, 1, 1, 1}, {1, 0, 1, 0, 1}, {1, 0, 1, 1, 1}, {1, 1, 1, 0, 1},
            {0, 0, 0, 0, 1}}));
  }
}

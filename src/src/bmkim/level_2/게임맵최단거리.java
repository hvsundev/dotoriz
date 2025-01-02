import java.util.LinkedList;
import java.util.Queue;

public class 게임맵최단거리 {
    public static void main(String[] args) {
        int[][] maps = {
                {1, 0, 1, 1, 1},
                {1, 0, 1, 0, 1},
                {1, 0, 1, 1, 1},
                {1, 1, 1, 0, 1},
                {0, 0, 0, 0, 1}
        };
        solution(maps);
    }

    public static int solution(int[][] maps) {
        int answer;
        int[][] visited = new int[maps.length][maps[0].length];
        BFS(maps, visited);
        answer = visited[maps.length - 1][maps[0].length - 1];
        if (answer == 0) {
            return -1;
        }
        return answer;
    }

    public static void BFS(int[][] maps, int[][] visited) {
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        int x = 0, y = 0;
        visited[x][y] = 1;

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{x, y});

        while (!queue.isEmpty()) {
            int[] position = queue.poll();
            int px = position[0];
            int py = position[1];

            for (int i=0; i<4; i++) {
                int nx = dx[i] + px;
                int ny = dy[i] + py;

                if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length) {
                    if (visited[nx][ny] == 0) {
                        if (maps[nx][ny] == 1) {
                            queue.offer(new int[]{nx, ny});
                            visited[nx][ny] = visited[px][py] + 1;
                        }
                    }
                }
            }
        }
    }
}

import java.util.*;

public class 기능개발 {
    public static void main(String[] args) {
        int[] progresses = {95, 90, 99, 99, 80, 99};
        int[] speeds = {1, 1, 1, 1, 1, 1};
        solution(progresses, speeds);
    }

    public static int[] solution(int[] progresses, int[] speeds) {
        List<Integer> answer = new ArrayList<>();
        Queue<Integer> queue = new LinkedList<>();

        for (int i=0; i<progresses.length; i++) {
            int completeWorkDay = (int) Math.ceil((double)(100 - progresses[i]) / speeds[i]);
            queue.add(completeWorkDay);
        }

        while (!queue.isEmpty()) {
            Integer start = queue.poll();
            int count = 1;
            while (!queue.isEmpty() && start >= queue.peek()) {
                count++;
                queue.poll();
            }
            answer.add(count);
        }

        return answer.stream().mapToInt(i -> i).toArray();
    }
}

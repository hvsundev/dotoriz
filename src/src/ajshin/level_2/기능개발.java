import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class 기능개발 {


  public List<Integer> solution(int[] progresses, int[] speeds) {

    Queue<Integer> progressesQueue = new LinkedList<>();
    Queue<Integer> speedsQueue = new LinkedList<>();
    List<Integer> result = new LinkedList<>();

    for (int i = 0; i < progresses.length; i++) {
      progressesQueue.add(progresses[i]);
      speedsQueue.add(speeds[i]);
    }

    while (!progressesQueue.isEmpty()) {
      int size = progressesQueue.size();
      for (int i = 0; i < size; i++) {
        int speed = speedsQueue.poll();
        int progress = progressesQueue.poll();
        progressesQueue.offer(progress + speed);
        speedsQueue.offer(speed);
      }

      int count = 0;
      while (!progressesQueue.isEmpty() && progressesQueue.peek() >= 100) {
        progressesQueue.poll();
        speedsQueue.poll();
        count++;
      }

      if (count > 0) {
        result.add(count);
      }
    }

    return result;
  }

  public static void main(String[] args) {
    기능개발 main = new 기능개발();
    System.out.println(main.solution(new int[]{93, 30, 55}, new int[]{1, 30, 5}));
  }

}

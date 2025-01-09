import java.util.PriorityQueue;

public class 더맵게 {

  public int solution(int[] scoville, int K) {
    int answer = 0;

    PriorityQueue<Integer> heap = new PriorityQueue<>();
    for (int i : scoville) {
      heap.add(i);
    }
    Integer min = heap.peek();
    while (min < K) {
      if (heap.size() >= 2) {
        heap.add(heap.poll() + (heap.poll() * 2));
        min = heap.peek();
        answer++;
      }
    }

    return answer;
  }


  public static void main(String[] args) {
    더맵게 main = new 더맵게();
    System.out.println(main.solution(new int[]{1, 2, 3, 9, 10, 12}, 7));
  }
}

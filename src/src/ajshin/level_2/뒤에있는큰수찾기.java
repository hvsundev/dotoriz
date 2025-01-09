import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class 뒤에있는큰수찾기 {

  public List<Integer> solution(int[] numbers) {
    Stack<Integer> stack = new Stack<>();
    List<Integer> result = new ArrayList<>();
    for (int i = numbers.length-1; i >=0; i--) {
      int current = numbers[i];

      while (!stack.isEmpty() && stack.peek() <= current) {
        stack.pop();
      }

      if (stack.isEmpty()) {
        result.add(-1);
      } else {
        result.add(stack.peek());
      }
      stack.push(current);
    }
    List<Integer> reversedResult = new ArrayList<>();
    for (int i = result.size() - 1; i >= 0; i--) {
      reversedResult.add(result.get(i));
    }
    return reversedResult;
  }

  public static void main(String[] args) {
    뒤에있는큰수찾기 main = new 뒤에있는큰수찾기();
    int[] arr = {2, 3, 3, 5};
    for (int i : main.solution(arr)) {
      System.out.print(i);
    }
  }
}

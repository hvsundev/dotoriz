import java.util.Arrays;
import java.util.Comparator;
import java.util.Stack;

public class 큰수만들기 {

  public String solution(String number, int k) {
    StringBuilder answer = new StringBuilder();
    Stack<Character> stack = new Stack<>();

    for (int i = 0; i < number.length(); i++) {
      char c = number.charAt(i);

      while (!stack.isEmpty() && stack.peek() < c && k > 0) {
        stack.pop();
        k--;
      }
      stack.push(c);
    }

    while (k > 0) {
      stack.pop();
      k--;
    }
    for (char c : stack) {
      answer.append(c);
    }

    return answer.toString();
  }

  public static void main(String[] args) {
    큰수만들기 main = new 큰수만들기();
    System.out.println(main.solution("1924", 2));
    System.out.println(main.solution("1231234", 3));
    System.out.println(main.solution("4177252841", 4));
  }
}

public class 타켓넘버 {
  int answer = 0;

  public void dfs(int[] numbers, int target, int index, int sum) {
    // 모든 인덱스 확인했을 때 종료
    if (index == numbers.length) {
      if(sum == target) {
        answer++;
      }
      return;
    }
    int plusSum = sum+numbers[index];
    int minusSum = sum - numbers[index];
    dfs(numbers, target, index+1, plusSum);
    dfs(numbers, target, index+1, minusSum);
  }


  public int solution(int[] numbers, int target) {
    answer=0;
    dfs(numbers, target, 0, 0);
    return answer;
  }

  public static void main(String[] args) {
    타켓넘버 main = new 타켓넘버();
    System.out.println(main.solution(new int[]{1, 1, 1, 1, 1}, 3));
  }
}

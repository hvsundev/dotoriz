public class prg43165 {
    static int answer = 0;
    public static int solution(int[] numbers, int target) {
        DFS(numbers, target, 0, 0);
        return answer;
    }

    public static void DFS(int[] numbers, int target, int index, int sum) {
        if (index == numbers.length) {
            if (target == sum) {
                answer++;
            }
        } else {
            DFS(numbers, target, index+1, sum+numbers[index]);
            DFS(numbers, target, index+1, sum-numbers[index]);
        }
    }
}
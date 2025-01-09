
public class 뒤에있는큰수찾기 {
    public static void main(String[] args) {
        int[] numbers = {2, 3, 3, 5};
        solution(numbers);
    }

    public static int[] solution(int[] numbers) {
        int[] answer = new int[numbers.length];

        for (int i = 0; i < numbers.length; i++) {
            boolean flag = false;
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[j] > numbers[i]) {
                    answer[i] = numbers[j];
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                answer[i] = -1;
            }
        }
        return answer;
    }
}

import java.util.Arrays;

public class 가장큰수 {
    public static void main(String[] args) {
        int[] numbers = {6, 10, 2};
        solution(numbers);
    }

    public static String solution(int[] numbers) {
        String[] numberStrings = Arrays.stream(numbers)
                .mapToObj(String::valueOf)
                .toArray(String[]::new);

        Arrays.sort(numberStrings, (o1, o2) -> (o2 + o1).compareTo(o1 + o2));
        String result = String.join("", numberStrings);
        String answer = result.startsWith("0") ? "0" : result;

        return answer;
    }
}

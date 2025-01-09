public class 큰수만들기 {
    public static void main(String[] args) {
        String number = "1924";
        int k = 2;
        System.out.println(solution(number, k));
    }

    public static String solution(String number, int k) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < number.length(); i++) {
            char currentChar = number.charAt(i);

            while (k > 0 && result.length() > 0 && result.charAt(result.length() - 1) < currentChar) {
                result.deleteCharAt(result.length() - 1);
                k--;
            }
            result.append(currentChar);
        }
        return result.toString();
    }
}

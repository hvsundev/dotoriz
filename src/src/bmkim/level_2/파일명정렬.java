import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class 파일명정렬 {
    public static void main(String[] args) {
        String[] files = {"img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"};
        System.out.println(Arrays.toString(solution(files)));
    }

    public static String[] solution(String[] files) {
        Arrays.sort(files, (a, b) -> {
            String[] file1 = splitFileName(a);
            String[] file2 = splitFileName(b);

            String head1 = file1[0].toUpperCase();
            String head2 = file2[0].toUpperCase();

            int compareToHead = head1.compareTo(head2);
            if (compareToHead != 0) {
                return compareToHead;
            }

            int number1 = Integer.parseInt(file1[1]);
            int number2 = Integer.parseInt(file2[1]);
            if (number1 != number2) {
                return Integer.compare(number1, number2);
            }
            return 0;
        });
        return files;
    }

    public static String[] splitFileName(String file) {
        // 수식을 어떻게 적용해야 할 지 모르겠어서 정규식을 사용하였다
        Pattern pattern = Pattern.compile("([^0-9]+)([0-9]+)(.*)");
        Matcher matcher = pattern.matcher(file);

        String head = "";
        String number = "";
        String tail = "";

        if (matcher.matches()) {
            head = matcher.group(1);
            number = matcher.group(2);
            tail = matcher.group(3);
        }
        return new String[]{head, number, tail};
    }
}

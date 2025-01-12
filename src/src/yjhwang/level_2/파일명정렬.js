function solution(files) {
  return files.sort((file1, file2) => {
    // head와 num으로 구분을 위해 match로 배열화 한다
    // slice(1)부터 시작하는 이유는 배열의 첫번째는 전체 매칭된 값이 도출되기 때문에 두번째 index부터 비교
    // img12.png 는 첫번째 매칭그룹([a-zA-Z\s\.\-]+)에 의해 img, 두번째 매칭그룹(\d+)에 의해 12가 구분되어 배열화
    const [head1, num1] = file1.match(/^([a-zA-Z\s\.\-]+)(\d+)/).slice(1);
    const [head2, num2] = file2.match(/^([a-zA-Z\s\.\-]+)(\d+)/).slice(1);

    // 두 케이스를 비교하여 head1이 더 작으면 정렬하지 않음 (오름차순)
    if (head1.toLowerCase() < head2.toLowerCase()) {
      return -1;
    }
    // head1이 더 크면 정렬함 (오름차순)
    else if (head1.toLowerCase() > head2.toLowerCase()) {
      return 1;
    }
    // head가 일치하면 num그룹을 비교 (오름차순)
    else {
      return Number(num1) - Number(num2);
    }
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);

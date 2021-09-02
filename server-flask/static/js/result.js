/* 단계 설정
1. 먼저 받아서,
2. 두 경우의 모든 상황 만듦
3. 그리고 두 경우 모두 숨겨버림 -> css || jq
4. 버튼 두개를
 * 보여줌.
5. simple 버든을 누르면 simple 만 해제시켜주고 버튼 숨김
6. !! 돌아가기 or detail 버튼 살려주고
7.
 * 나머지도 동일하게 실행함.
 */
$(() => {
    /*
    보이기 숨기기 장치.
    1. 시작하자마자 숨겨두기.
    2. ㅇㅇ을 보여줘 하면, 보여주고 싹다 숨켜버리기.
    3. 이거 에러뜨면 밑에꺼랑 순서바꾸기
    */
   $('.table_wrap').hide();
   $('button.simple').on('click', () => {
       $('.all').hide();
       $('.simple_wrap').show();
   })
   $('button.detail').on('click', () => {
       $('.all').hide();
       $('.detail_wrap').show();
   })




    /*
    만들기 순서
    1. 로드된 데이터를 줍줍한다.
    1+ 여기서, for을 돌리던가 해서 효율 up
    2. 들고온 애들을 판단 시킨다.
    3. 카타리나 들고와서 주루룩 뿌려버린다
    3+ 동시에 .target에 있는 애들한테도 뿌려준다.
    */
    let j_list = [];
    let right_list = ['>', '>', '<', '>']
    for (i = 0; i < 4; i++) {
        let y_data = parseFloat($(`table.detail tr:nth-child(${i + 2}) td:nth-child(2)`).text())
        let p_data = parseFloat($(`table.detail tr:nth-child(${i + 2}) td:nth-child(4)`).text())
        let result = y_data > p_data ? '>' : '<'
        j_list.push(result)
    }
    j_list.map((val, i) => {
        $(`table.detail tr:nth-child(${i + 2}) .bs`).text(val);
        // 같으면 dodgerblue, 다르면 coral
        if ($(`table.detail tr:nth-child(${i + 2}) td:nth-child(5)`).text() == val) {
            $(`table.detail tr:nth-child(${i + 2}) .bs`).addClass('same');
        } else {
            $(`table.detail tr:nth-child(${i + 2}) .bs`).addClass('diff');
        }
        let ox = val == right_list[i] ? 'ㅇ' : 'x'
        $(`.target td:nth-child(${i + 1})`).text(ox)
    })

})
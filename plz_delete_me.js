// 21.9.12 에픽세븐식 펭귄 강화환급

let lv_up = (num) => {
    let total_exp = 0;
    // 경험치 필요치 계산하기
    lv_exp.map((val) => total_exp += val);
    // 대성공 여부에 따른 필요경험치 변동 계산
    let s = sg();
    // 펭귄에서 나온 경험치 총합과, 필요 경험치 상관관계 파악
    let p_exp = s == '성공'
        ? 500*num
        : (
            s == '대성공'
                ? 500*num * 1.4
                : 500*num * 1.5
        );
    let return_p = 0;
    let overed = p_exp - total_exp;
console.log('--------------')
console.log(s)
    if (overed > 500) {
        return_p = Math.floor(overed / 500);
        console.log(`${return_p}개의 펭귄이 환급되었습니다 !`);
        return
    } else {
        console.log('lv20 강화 성공');
        return
    }
    console.log('아직 lv20 이 아닙니다');
// 펭귄이 많이 들어갔다고 계산돼었을때, 펭귄 몇개분량이 나오는지 확인 console.log로 결과 알리기
}

const sg = () => {
    let r = Math.round(Math.random()*10);
    let result = '';
    if ( r == 1 ) { result = '초대성공' }
    else if ( r > 1 && r < 5) { result = '대성공' }
    else { result = '성공'}
    return result
}


let lv_exp = [];
for ( let i = 1;i<20; i++) {
    lv_exp.push(10*i);
}
const p = 500;
for ( let i = 0; i< 10; i++) { lv_up(4) }
$(() => {
    $('.load').hide()
    $('button.btn7').on('click', () => {
        $('.load').show()
        roop()
    })
})

const delay = (n) => {
    return new Promise((resolve) => {
        setTimeout(resolve,n*500);
    });
}

async function roop() {
    i = 0;
    while (i < 400) {
        i++
        $('.load').text('로딩중')
        await delay(1)
        $('.load').text('로딩중.')
        await delay(1)
        $('.load').text('로딩중..')
        await delay(1)
        $('.load').text('로딩중...')
        await delay(1)
    }
}
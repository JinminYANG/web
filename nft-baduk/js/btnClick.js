const buyBtns = document.querySelectorAll('.buy');

Array.from(buyBtns).forEach((buy) => {
    buy.addEventListener('click', (event) => {
        event.preventDefault();

        alert('아직 오픈되지 않았습니다!');
        // pageOpen();
    });
});

const pageOpen = () => {
/*    const link = 'https://opensea.io/';
    window.location.href = link;       //웹개발할때 숨쉬듯이 작성할 코드
    // window.location.replace(link);     // 이전 페이지로 못돌아감
    window.open(link);                 //window.open은 옵션이 여러가지 있음. 이렇게만하면 새창 뜸*/

    window.open('https://opensea.io/');
};
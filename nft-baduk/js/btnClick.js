const buyBtns = document.querySelectorAll('.buy');

Array.from(buyBtns).forEach((buy) => {
    buy.addEventListener('click', (event) => {
        event.preventDefault();

        // alert('아직 오픈되지 않았습니다!');
        pageOpen();
    });
});

const pageOpen = () => {
    window.open('https://opensea.io/collection/the-26th-lg-cup-world-baduk-championship-winner-sh');
};
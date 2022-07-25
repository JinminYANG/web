const amounts = document.querySelectorAll('.amount');

Array.from(amounts).forEach((amount) => {
    console.log(amount);
    amount.innerText = amount.innerText.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    amount.innerText = '￦'+ amount.innerText;
})

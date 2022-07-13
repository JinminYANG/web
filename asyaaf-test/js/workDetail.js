//* Form Validation
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation');

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false)
});


const countContainer = document.querySelector(".count-container");
const minusBtn = countContainer.querySelector("#minus-btn");
const plusBtn = countContainer.querySelector("#plus-btn");
const counter = countContainer.querySelector(".counter");
const amount = document.querySelector("#amount");
const defaultAmount = document.querySelector("#amount").value;

minusBtn.addEventListener("click", function () {
    // console.log(counter.value);
    counter.value--;
    if (counter.value === '1') {
        setDisabled(this);
        amount.value = (defaultAmount * counter.value);
    } else if (counter.value === '2') {
        setAble(this);
        setAble(plusBtn);
        amount.value = (defaultAmount * counter.value);
    } else {
        setAble(this);
        amount.value = (defaultAmount * counter.value);
    }
});

plusBtn.addEventListener("click", function () {
    // console.log(counter.value);
    counter.value++;
    if (counter.value === '1') {
        amount.value = (defaultAmount * counter.value);
    } else if (counter.value === '2') {
        setAble(minusBtn);
        amount.value = (defaultAmount * counter.value);
    } else {
        setDisabled(this);
        amount.value = (defaultAmount * counter.value);
    }
});

function setDisabled(item) {
    item.setAttribute('disabled', 'disabled');
}

function setAble(item) {
    item.removeAttribute('disabled');
}

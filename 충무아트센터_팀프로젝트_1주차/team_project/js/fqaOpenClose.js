const fqaBoxContainer = document.querySelector(".fqaBox ul"),
    fqaBoxList = fqaBoxContainer.querySelectorAll(".fqaBox__list"),
    listAnswerAll = fqaBoxContainer.querySelectorAll(".list__answer");

function anwserClass(e) {
    e.preventDefault();
    const listAnswer = this.nextElementSibling;

    if (!listAnswer.classList.contains("active")) {
        listAnswerAll.forEach(function (i) {
            i.classList.remove("active");
        });
        listAnswer.classList.add("active");
    } else {
        listAnswer.classList.remove("active")
    }

    //    listAnswerAll.forEach(function (i) {
    //        i.classList.remove("active");
    //    });
    //    listAnswer.classList.add("active");
}

function init() {
    fqaBoxList.forEach(function (e) {
        const listTit = e.querySelector(".list__tit");
        listTit.addEventListener("click", anwserClass);
    })

}

init();

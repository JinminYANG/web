const calendars = document.querySelector(".calendarContainer__calendars"),
    timeTable = document.querySelector(".timeInfo__timeTable"),
    timeTableList = timeTable.querySelectorAll(".timeTable__list"),
    classTable = document.querySelector(".classInfo__classTable"),
    classTableList = classTable.querySelectorAll(".classTable__classList");

    let days = calendars.querySelectorAll("table tbody td");


function showResult(thisElement) {
    const resultDateBox = document.getElementById("resultBox__date"),
        resultTimeBox = document.getElementById("resultBox__time"),
        resultClassBox = document.getElementById("resultBox__class"),
        resultPriceBox = document.getElementById("resultBox__price");

    const hasClass = thisElement.classList[0];
        console.log(hasClass);
    if (hasClass === "days") {
        const dayText = thisElement.firstElementChild.innerText,
              findMonth = thisElement.closest("table").querySelector(".month"),
              monthText = findMonth.querySelector("span").innerText;
        
        resultDateBox.value = `${monthText} ${dayText}일`
        
    } else if (hasClass === "timeTable__list") {
        const timeText = thisElement.firstElementChild.innerText;
        
        resultTimeBox.value = timeText;
    } else if (hasClass === "classTable__classList") {
        const classText = thisElement.children[0].innerText,
              price = JSON.parse(thisElement.children[1].innerText.split(",")[0]),
              tiketCount = JSON.parse(thisElement.children[2].value);
        
        resultClassBox.value = `${classText} ${tiketCount}매`;
        resultPriceBox.value = `${price*tiketCount},000원`;
    }
}

function classHandler() {
    const hasClass = this.classList[0];
    if (hasClass === "days") {
        days.forEach(function (e) {
            e.classList.remove("active");
        });
    } else if (hasClass === "timeTable__list") {
        timeTableList.forEach(function (e) {
            e.classList.remove("active");
        });
    } else if (hasClass === "classTable__classList") {
        classTableList.forEach(function (e) {
            e.classList.remove("active");
        });
    }
    this.classList.add("active");
    showResult(this);
}

function init() {
    days.forEach(function (e) {
        e.addEventListener("click", classHandler);
    });
    timeTableList.forEach(function (e) {
        e.addEventListener("click", classHandler);
    });
    classTableList.forEach(function (e) {
        e.addEventListener("click", classHandler);
    });
    showResult($prevCalBody.querySelector(".today"));
}

init();

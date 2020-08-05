const calendarContainer = document.getElementById("calendarContainer"),
    calendars = calendarContainer.querySelector(".calendarContainer__calendars"),
    prevContainer = calendars.querySelector('.calendars__prevContainer'),
    nextContainer = calendars.querySelector('.calendars__nextContainer'),
    prevMonthText = prevContainer.querySelector(".month__text"),
    prevCalBody = prevContainer.querySelector('.prevCalBody'),
    nextCalBody = nextContainer.querySelector('.nextCalBody'),
    btnNext = calendarContainer.querySelector('.calBtn__next'),
    btnPrev = calendarContainer.querySelector('.calBtn__prev'),
    period = document.getElementById("period");

const finished = {
    today: new Date(),
    monForChange: new Date().getMonth(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
        let d = new Date();
        d.setDate(1);
        d.setMonth(++this.monForChange);
        return d;
    },
    prevMonth: function () {
        let d = new Date();
        d.setDate(1);
        d.setMonth(this.monForChange -= 3);
        return d;
    },
    addZero: (num) => (num < 10) ? '0' + num : num,
    //    activeDTag: null,

};




function removeCalendar(calBody) {
    while (calBody.firstChild) {
        calBody.removeChild(calBody.firstChild);
    }
}

function moveCalendar(e) {
    const prevMonthDataArray = prevMonthText.getAttribute("data-Month").split(".");
    e.preventDefault();

    if (this.classList.contains("calBtn__next")) {
        removeCalendar(prevCalBody);
        removeCalendar(nextCalBody);
        createCalendar(finished.nextMonth(), prevContainer);
        createCalendar(finished.nextMonth(), nextContainer);
        if (JSON.parse(prevMonthText.getAttribute("data-Month")) > finished.today.valueOf()) {
            btnPrev.classList.remove("disable");
        }
    } else {
        if (JSON.parse(prevMonthText.getAttribute("data-Month")) > finished.today.valueOf()) {
            removeCalendar(prevCalBody);
            removeCalendar(nextCalBody);
            createCalendar(finished.prevMonth(), prevContainer);
            createCalendar(finished.nextMonth(), nextContainer);
            if (JSON.parse(prevMonthText.getAttribute("data-Month")) <= finished.today.valueOf()) {
                btnPrev.classList.add("disable");
            }
        }
    }
    showPeriod();
}

function showPeriod() {
    const allTd = calendars.querySelectorAll("td"),
        periodArray = period.innerText.split("~"),
        firstPeriod = periodArray[0],
        lastPeriod = periodArray[1],
        firstArray = firstPeriod.split("."),
        firstMonth = Number(firstArray[1]),
        firstDate = Number(firstArray[2]),
        lastArray = lastPeriod.split("."),
        lastMonth = Number(lastArray[0]),
        lastDate = Number(lastArray[1]);

    allTd.forEach(function (e) {
        const tdFdate = e.getAttribute("data-fdate");

        if (tdFdate) {
            const tdFdateArray = e.getAttribute("data-fdate").split("."),
                tdMonth = Number(tdFdateArray[1]),
                tdDate = Number(tdFdateArray[2]);

            if (tdMonth === firstMonth) {
                if (tdDate >= firstDate) {
                    e.classList.remove("disable");
                    e.classList.add("able");
                }
            } else if (tdMonth <= lastMonth) {
                if (tdDate <= lastDate) {
                    e.classList.remove("disable");
                    e.classList.add("able");
                }

            }
        }
    })
}


    function createCalendar(fullDate, Container) {
        const monthText = Container.querySelector(".month__text"),
            calBody = Container.querySelector(".calBody");

        let yy = fullDate.getFullYear(),
            mm = fullDate.getMonth(),
            firstDay = finished.getFirstDay(yy, mm),
            lastDay = finished.getLastDay(yy, mm),
            markToday; // for marking today date

        if (mm === finished.today.getMonth() && yy === finished.today.getFullYear()) {
            markToday = finished.today.getDate();
        }

        monthText.innerText = `${yy}년 ${mm+1}월`;
        monthText.setAttribute("data-Month", `${yy}.${mm+1}`);

        let startCount;
        let countDay = 0;
        for (let i = 0; i < 6; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                if (i === 0 && !startCount && j === firstDay.getDay()) {
                    startCount = 1;
                }
                let td = document.createElement("td");
                if (startCount) {
                    let fullDate = yy + '.' + finished.addZero(mm + 1) + '.' + finished.addZero(countDay + 1);
                    //                let everyFullDate = fullDate.setDate(countDay + 1);
                    td.classList.add("dates");
                    td.classList.add("disable");
                    if (markToday && markToday === countDay + 1) {
                        td.classList.add("today");
                    };
                    td.setAttribute("data-date", countDay + 1);
                    td.setAttribute("data-fdate", fullDate);
                    //                td.setAttribute("data-fdate", everyFullDate.valueOf());
                }
                let span = document.createElement("span");
                if (startCount) {
                    span.append(++countDay);
                }
                if (countDay === lastDay.getDate()) {
                    startCount = 0;
                }
                td.appendChild(span);
                tr.appendChild(td);
                calBody.appendChild(tr);
            }
        }
    }

    function showCalendar() {
        createCalendar(finished.today, prevContainer);
        createCalendar(finished.nextMonth(), nextContainer);

    }

    function init() {
        showCalendar();
        btnPrev.addEventListener("click", moveCalendar);
        btnNext.addEventListener("click", moveCalendar);
        showPeriod();






    };

    init();

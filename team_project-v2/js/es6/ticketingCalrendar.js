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

function moveCalendar(e) {

    e.preventDefault();

    if (this.classList.contains("calBtn__next")) {
        createCalendar(finished.nextMonth(), prevContainer);
        createCalendar(finished.nextMonth(), nextContainer);
        btnPrev.classList.remove("disable");
    } else {
        let prevMonthFdata = prevMonthText.getAttribute("data-fdate"),
            prevMonthFdataArray = prevMonthFdata.split("."),
            prevMonthDate = new Date(prevMonthFdataArray[0], prevMonthFdataArray[1] - 1, 0, 0, 0, 0, 0),
            thisMonthDate = new Date(finished.today.getFullYear(), finished.today.getMonth() + 1, 0, 0, 0, 0, 0);

        if (prevMonthDate.getTime() <= thisMonthDate.getTime()) {
            btnPrev.classList.add("disable");
            e.preventDefault();
        } else {

            createCalendar(finished.prevMonth(), prevContainer);
            createCalendar(finished.nextMonth(), nextContainer);

            let prevMonthFdata = prevMonthText.getAttribute("data-fdate"),
                prevMonthFdataArray = prevMonthFdata.split("."),
                prevMonthDate = new Date(prevMonthFdataArray[0], prevMonthFdataArray[1] - 1, 0, 0, 0, 0, 0),
                thisMonthDate = new Date(finished.today.getFullYear(), finished.today.getMonth() + 1, 0, 0, 0, 0, 0);

            if (prevMonthDate.getTime() <= thisMonthDate.getTime()) {
                btnPrev.classList.add("disable");
                e.preventDefault();
            }
        }
    }
    showPeriod();
    activeTd();
}

function resultDate(element) {
    const resultDateValue = element.getAttribute("data-fdate"),
        resultDateBox = document.getElementById("resultBox__date");
    resultDateBox.value = resultDateValue;
}

function showTimeList(){
    const timeListContainer = document.querySelector(".timeInfo__timeTable"),
          timeList = timeListContainer.querySelectorAll(".timeTable__list");
    
    timeList.forEach((e) => e.style.display = "block");
}

function tdClassHandler(e) {
    const allTd = calendars.querySelectorAll("td");
    allTd.forEach(function (element) {
        if (element.classList.contains("able")) {
            element.classList.remove("active");
        }
    })
    this.classList.add("active");
    resultDate(this);
    showTimeList();
}

function activeTd() {
    const allTd = calendars.querySelectorAll("td");
    allTd.forEach(function (element) {
        if (element.classList.contains("able")) {
            element.addEventListener("click", tdClassHandler)
        }
    });
}

function showPeriod() {
    const allTd = calendars.querySelectorAll("td"),
        periodArray = period.innerText.split("~"),
        lastPeriod = periodArray[1],
        lastArray = lastPeriod.split("."),
        lastYear = Number(lastArray[0]),
        lastMonth = Number(lastArray[1]),
        lastDate = Number(lastArray[2]),
        toDate = new Date(finished.today.getFullYear(), finished.today.getMonth() + 1, finished.today.getDate(), 0, 0, 0, 0),
        lastPeriodDate = new Date(lastYear, lastMonth, lastDate, 0, 0, 0, 0);

    allTd.forEach(function (e) {
        const tdFdate = e.getAttribute("data-fdate");

        if (tdFdate) {
            const tdFdateArray = tdFdate.split("."),
                tdYear = tdFdateArray[0],
                tdMonth = tdFdateArray[1],
                tdDate = tdFdateArray[2],
                tdFullDate = new Date(tdYear, tdMonth, tdDate, 0, 0, 0, 0);
            if (tdFullDate.getTime() >= toDate.getTime() && tdFullDate.getTime() <= lastPeriodDate.getTime()) {
                e.classList.remove("disable");
                e.classList.add("able");
            }
        }
    });
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
    monthText.setAttribute("data-fdate", `${yy}.${mm+1}`);

    let trtd = '';
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
        trtd += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && !startCount && j === firstDay.getDay()) {
                startCount = 1;
            }
            if (!startCount) {
                trtd += '<td>'
            } else {
                let fullDate = yy + '.' + finished.addZero(mm + 1) + '.' + finished.addZero(countDay + 1);
                //                let fullDate = yy + '.' + (mm + 1) + '.' + (countDay + 1);
                trtd += '<td class="dates disable';
                trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
                trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
            }
            trtd += `<span>${(startCount) ? ++countDay : ''}</span>`;
            if (countDay === lastDay.getDate()) {
                startCount = 0;
            }
            trtd += '</td>';
        }
        trtd += '</tr>';
    }
    calBody.innerHTML = trtd;
    return calBody;
}

function showCalendar() {
    createCalendar(finished.today, prevContainer);
    createCalendar(finished.nextMonth(), nextContainer);
}

function init() {
    showCalendar();
    showPeriod();
    activeTd();
    btnPrev.addEventListener("click", moveCalendar);
    btnNext.addEventListener("click", moveCalendar);
};

init();

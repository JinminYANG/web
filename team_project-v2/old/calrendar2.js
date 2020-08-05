const finished = {
    today: new Date(),
    //    monForChange: new Date().getMonth(),
    activeDate: new Date(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
        let d = new Date();
        let m = this.activeDate.getMonth();
        d.setDate(1);
        d.setMonth(m+1);
        this.activeDate = d;
        return d;
    },
    prevMonth: function () {
        let d = new Date();
        let m = this.activeDate.getMonth();
        d.setDate(1);
        d.setMonth(m-1);
        this.activeDate = d;
        return d;
    },
    addZero: (num) => (num < 10) ? '0' + num : num,
    activeDTag: null,

};

const $prevCalBody = document.querySelector('.prevCalBody');
const $nextCalBody = document.querySelector('.nextCalBody');
const $btnNext = document.querySelector('.calBtn__next');
const $btnPrev = document.querySelector('.calBtn__prev');


function prevLoadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = finished.getFirstDay(yy, mm);
    let lastDay = finished.getLastDay(yy, mm);
    let markToday; // for marking today date

    if (mm === finished.today.getMonth() && yy === finished.today.getFullYear()) {
        markToday = finished.today.getDate();
    }

    document.querySelector('.prevMonth__days .month span').textContent = `${yy}년 ${mm+1}월`;

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
                td.classList.add("dates");
                td.classList.add("disable");
                if (markToday && markToday === countDay + 1) {
                    td.classList.add("today");
                };
                td.setAttribute("data-date", countDay + 1);
                td.setAttribute("data-fdate", fullDate);
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
            
            $prevCalBody.appendChild(tr);
        }
    }
}


function nextLoadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = finished.getFirstDay(yy, mm);
    let lastDay = finished.getLastDay(yy, mm);
    let markToday; // for marking today date

    if (mm === finished.today.getMonth() && yy === finished.today.getFullYear()) {
        markToday = finished.today.getDate();
    }

    document.querySelector('.nextMonth__days .month span').textContent = `${yy}년 ${mm+1}월`;

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
                trtd += '<td class="days';
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
    $nextCalBody.innerHTML = trtd;
}


prevLoadYYMM(finished.today);
nextLoadYYMM(finished.nextMonth());

$btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    prevLoadYYMM(finished.nextMonth());
    nextLoadYYMM(finished.nextMonth());
});
$btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    nextLoadYYMM(finished.prevMonth());
    nextLoadYYMM(finished.prevMonth());
    prevLoadYYMM(finished.prevMonth());
});

$prevCalBody.addEventListener('click', (e) => {
    const $days = e.target.parentNode;
    if ($days.classList.contains('days')) {
        if (finished.activeDTag) {
            finished.activeDTag.classList.remove('active');
        }
        let day = Number($days.textContent);
        $days.classList.add('active');
        finished.activeDTag = $days;
        finished.activeDate.setDate(day);
        showResult($days);
    }
});


$nextCalBody.addEventListener('click', (e) => {
    const $days = e.target.parentNode;
    if ($days.classList.contains('days')) {
        if (finished.activeDTag) {
            finished.activeDTag.classList.remove('active');
        }
        let day = Number($days.textContent);
        $days.classList.add('active');
        finished.activeDTag = $days;
        finished.activeDate.setDate(day);
        showResult($days);
    }
});

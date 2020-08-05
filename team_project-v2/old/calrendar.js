const finished = {
    monList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    today: new Date(),
    monForChange: new Date().getMonth(),
    activeDate: new Date(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
        let d = new Date();
        d.setDate(1);
        d.setMonth(++this.monForChange);
        this.activeDate = d;
        return d;
    },
    prevMonth: function () {
        let d = new Date();
        d.setDate(1);
        d.setMonth(--this.monForChange);
        this.activeDate = d;
        return d;
    },
    addZero: (num) => (num < 10) ? '0' + num : num,
    activeDTag: null,
    getIndex: function (node) {
        let index = 0;
        while (node = node.previousElementSibling) {
            index++;
        }
        return index;
    }
};

const $prevCalBody = document.querySelector('.prevCalBody');
const $nextCalBody = document.querySelector('.nextCalBody');
const $btnNext = document.querySelector('.calBtn__next');
const $btnPrev = document.querySelector('.calBtn__prev');

/**
 * @param {number} date
 * @param {number} dayIn
 */
//function loadDate (date, dayIn) {
//  document.querySelector('.cal-date').textContent = date;
//  document.querySelector('.cal-day').textContent = finished.dayList[dayIn];
//}

/**
 * @param {date} fullDate
 */
function prevLoadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = finished.getFirstDay(yy, mm);
    let lastDay = finished.getLastDay(yy, mm);
    let markToday; // for marking today date

    if (mm === finished.today.getMonth() && yy === finished.today.getFullYear()) {
        markToday = finished.today.getDate();
    }

    document.querySelector('.prevMonth__date .month span').textContent = `${yy}년 ${finished.monList[mm]}월`;

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
    $prevCalBody.innerHTML = trtd;
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

    document.querySelector('.nextMonth__dates .month span').textContent = `${yy}년 ${finished.monList[mm]}월`;

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

/**
 * @param {string} val
 */
function createNewList(val) {
    let id = new Date().getTime() + '';
    let yy = finished.activeDate.getFullYear();
    let mm = finished.activeDate.getMonth() + 1;
    let dd = finished.activeDate.getDate();
    const $target = $prevCalBody.querySelector(`.day[data-date="${dd}"]`);

    let date = yy + '.' + finished.addZero(mm) + '.' + finished.addZero(dd);

    let eventData = {};
    eventData['date'] = date;
    eventData['memo'] = val;
    eventData['complete'] = false;
    eventData['id'] = id;
    finished.event.push(eventData);
    $todoList.appendChild(createLi(id, val, date));
}

prevLoadYYMM(finished.today);
nextLoadYYMM(finished.nextMonth());
//loadDate(finished.today.getDate(), finished.today.getDay());

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
        //    loadDate(day, e.target.cellIndex);
        $days.classList.add('active');
        finished.activeDTag = $days;
        finished.activeDate.setDate(day);
        //    reloadTodo();
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
        //    loadDate(day, e.target.cellIndex);
        $days.classList.add('active');
        finished.activeDTag = $days;
        finished.activeDate.setDate(day);
        //    reloadTodo();
        showResult($days);
    }
});

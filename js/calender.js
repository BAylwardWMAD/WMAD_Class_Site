const date = new Date();

const loadCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayNum = date.getDay();

    const lastDayNum = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayNum - 1;

    const months = [
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayNum; x > 0; x--) {
        days += `<div class="prev-date">${prevMonthLastDay - x + 1}</div>`
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="current">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
    }
    monthDays.innerHTML = days;
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    loadCalendar();
});
document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    loadCalendar();
});

loadCalendar();

const daysArray = document.querySelector('.days').children;
const dayInfo = document.querySelector('.dayInfo');

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

for (let i = 0; i < daysArray.length; i++) {
    daysArray[i].addEventListener('click', () => {
        for (let j = 0; j < daysArray.length; j++) {
            if (daysArray[j].classList.contains('current')) {
                daysArray[j].classList.toggle('current');
            }
        }
        daysArray[i].classList.toggle('current');
        let dayOfMonth = new Date();
        dayOfMonth.setDate(daysArray[i].innerHTML);
        dayInfo.innerHTML = daysOfWeek[dayOfMonth.getDay()];
    });

}
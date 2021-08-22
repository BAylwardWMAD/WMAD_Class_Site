import * as calender from './calender.js';
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');
const navLines = document.querySelectorAll('.hamburger_line');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('toggle');
    navLines[0].classList.toggle('line1');
    navLines[1].classList.toggle('line2');
});

if (document.body.classList.contains('schedule_body')) {
    calender.loadCalendar();
    calender.useCalendar();
    calender.changeMonth();
}
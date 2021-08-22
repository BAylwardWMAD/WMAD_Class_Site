import * as calender from './calender.js';
import * as weather from './weather.js';
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');
const navLines = document.querySelectorAll('.hamburger_line');
const sideBarBtn = document.querySelector('.id-side-btn');
const sideBar = document.querySelector('.important-dates_side-bar');


hamburger.addEventListener('click', () => {
    navList.classList.toggle('toggle');
    navLines[0].classList.toggle('line1');
    navLines[1].classList.toggle('line2');
});

sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('slide-out');
    document.querySelector('.side-line1').classList.toggle('side-line-toggle');
    document.querySelector('.side-line2').classList.toggle('side-line-toggle');
});

if (document.body.classList.contains('schedule_body')) {
    calender.loadCalendar();
    calender.useCalendar();
    calender.changeMonth();
}
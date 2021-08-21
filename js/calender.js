document.querySelector(function() {
    document.querySelector('.calendar-container').calendar();
});
document.querySelector('.calendar-container').calendar({
    date: new Date()
});
document.querySelector('.calendar-container').calendar({
    weekDayLength: 2
});

document.querySelector('.calendar-container').calendar({
    date: new Date(),
    disable: function(date) {
        return date < new Date();
    }
});

document.querySelector('.calendar-container').calendar({
    onClickDate: function(date) {
        // do something    
    }
});

document.querySelector('.calendar-container').calendar({

    // text for prev/next buttons
    prevButton: "Prev",
    nextButton: "Next",

    // custom separator between the month and the year in the month view.
    monthYearSeparator: " ",

    // false = 4 months in a row
    showThreeMonthsInARow: true,

    // whether to change either month or year
    enableMonthChange: true,

    // whether to disable year view
    enableYearView: true,

    // shows a Today button on the bottom of the calendar
    showTodayButton: true,
    todayButtonContent: "Today",

    // highlights all other dates with the same week-day
    highlightSelectedWeekday: true,

    // highlights the selected week that contains the selected date
    highlightSelectedWeek: true,

    // whether to enable/disable the year selector
    showYearDropdown: false,

    // min/max dates
    // Date Object or Date String
    min: null,
    max: null,

    // start on Sunday instead
    startOnMonday: false,

});

document.querySelector('.calendar-container').calendar({

    onChangeMonth: function(date) {},
    onClickToday: function(date) {},
    onClickMonthNext: function(date) {},
    onClickMonthPrev: function(date) {},
    onClickYearNext: function(date) {},
    onClickYearPrev: function(date) {},
    onShowYearView: function(date) {},
    onSelectYear: function(date) {},

});

var calendar = document.querySelector('.calendar-container').calendar();

console.log(calendar.getSelectedDate());
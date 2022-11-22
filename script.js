var currentDay = $('#currentDay');
var today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');

console.log(currentDay)
currentDay.text(today);
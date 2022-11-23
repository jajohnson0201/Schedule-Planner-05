var nine = $('#9am');
var ten = $('#10am');
var eleven = $('#11am');
var twelvepm = $("#12pm");
var one = $("#1pm");
var two = $('#2pm');
var three = $('#3pm');
var four = $('#4pm');
var five = $('#5pm');

var scheduleContainer = $('.container');
var description = $(".description");
var saveButton = $('.save-button');
var timeBlock = $('.timeblock');

var currentHour = dayjs().format("ha");
console.log(currentHour);

function displayTime() {
var currentDay = $('#currentDay');
var today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
currentDay.text(today);
}
setInterval(displayTime, 1000);

console.log(scheduleContainer);
console.log(scheduleContainer.children(0).children(0));
console.log(timeBlock);

function getDescription(event){
    event.preventDefault();
    var btnClicked = $(event.target);
    var btnClckdParent = btnClicked.parent();
    console.log (btnClckdParent.children());
}

//  function getDescription(event){
//      event.preventDefault();

//     var btnClicked = $(event.target);
//      var inputValue = description.val();
//      description.text(inputValue);
//  }

timeBlock.on("click", getDescription);

// timeBlock.on('submit', getDescription);


var nine = $('#9am');
var ten = $('#10am');
var eleven = $('#11am');
var twelve = $("#12pm");
var one = $("#1pm");
var two = $('#2pm');
var three = $('#3pm');
var four = $('#4pm');
var five = $('#5pm');

var scheduleContainer = $('.container');
var description = $(".description");
var saveButton = $('.save-button');
var timeBlock = $('.timeblock');

var currentHour = dayjs().hour();
console.log(currentHour);

//sets the current time on the page
function displayTime() {
var currentDay = $('#currentDay');
var today = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
currentDay.text(today);
}
setInterval(displayTime, 1000);
console.log(nine[0].children[1]);

// saves new descriptions to local storage when save button is clicked
function getDescription(event){
    event.preventDefault();
    
    var btnClicked = $(event.target);
    var btnClckdParent = btnClicked.parent();
    var textContent = btnClckdParent.children("textarea")[0].value;
    var selectedTimeblock = btnClckdParent[0].children[0].textContent;
    
    localStorage.setItem(selectedTimeblock, JSON.stringify(textContent));

    console.log(btnClicked);
    console.log(btnClckdParent[0].children[0].textContent);
    console.log (btnClckdParent.children("textarea")[0].value);
}

// sets saved descriptions for schedules timeblocks
function getSavedDescription(){
    var nineam = JSON.parse(localStorage.getItem("9am"));
    var tenam = JSON.parse(localStorage.getItem("10am"));
    var elevenam = JSON.parse(localStorage.getItem("11am"));
    var twelvepm = JSON.parse(localStorage.getItem("12pm"));
    var onepm = JSON.parse(localStorage.getItem("1pm"));
    var twopm = JSON.parse(localStorage.getItem("2pm"));
    var threepm = JSON.parse(localStorage.getItem("3pm"));
    var fourpm = JSON.parse(localStorage.getItem("4pm"));
    var fivepm = JSON.parse(localStorage.getItem("5pm"));
    
    if(nineam !== null){
        nine[0].children[1].textContent = nineam
    }
    if(tenam !== null){
        ten[0].children[1].textContent = tenam
    }
    if(elevenam !== null){
        eleven[0].children[1].textContent = elevenam
    }
    if(twelvepm !== null){
        twelve[0].children[1].textContent = twelvepm
    }
    if(onepm !== null){
        one[0].children[1].textContent = onepm
    }
    if(twopm !== null){
        two[0].children[1].textContent = twopm
    }
    if(threepm !== null){
        three[0].children[1].textContent = threepm
    }
    if(fourpm !== null){
        four[0].children[1].textContent = fourpm
    }
    if(fivepm !== null){
        five[0].children[1].textContent = fivepm
    }
}
getSavedDescription();

// sets background color of each timeblock
function setTimeblockBackground(){
    for(var i = 0; i < timeBlock.length ; i ++){
       
        if(parseInt(timeBlock[i].children[0].textContent) === currentHour){
            timeBlock[i].classList.add('present');
            timeBlock[i].classList.remove('future');
            timeBlock[i].classList.remove('past');
        } else if (parseInt(timeBlock[i].children[0].textContent) < currentHour) {
            timeBlock[i].classList.add('past');
            timeBlock[i].classList.remove('present');
            timeBlock[i].classList.remove('future');
        } 
         else if (parseInt(timeBlock[i].children[0].textContent) > currentHour){
            timeBlock[i].classList.add('future');
            timeBlock[i].classList.remove('present');
            timeBlock[i].classList.remove('past');
         }
    }

}
setTimeblockBackground();
//setInterval(setTimeblockBackground, 1000);

// event listener for saved button clicked
saveButton.on("click", getDescription);



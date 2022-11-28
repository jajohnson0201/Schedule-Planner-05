
var nine = $('#9am');
var ten = $('#10am');
var eleven = $('#11am');
var twelve = $("#12pm");
var one = $("#1pm");
var two = $('#2pm');
var three = $('#3pm');
var four = $('#4pm');
var five = $('#5pm');

var times = {
    9: nine,
    10: ten,
    11: eleven,
    12: twelve,
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
}

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
console.log(nine[0].children[1]);
//console.log(scheduleContainer);
//console.log(scheduleContainer.children[0].children(0));
//console.log(timeBlock);

function getDescription(event){
    event.preventDefault();
    // var storedTimeblocks = JSON.parse(localStorage.getItem("new-timeblock"));
    // if (storedTimeblocks = null){
    //     storedTimeblocks = [];
    // }
    // console.log(storedTimeblocks);
    var btnClicked = $(event.target);
    var btnClckdParent = btnClicked.parent();
    var textContent = btnClckdParent.children("textarea")[0].value;
    var selectedTimeblock = btnClckdParent[0].children[0].textContent;
    // var newObj = {
    //     text: textContent,
    //     timeSelected: selectedTimeblock,
    // }
    // var newTimeBlock = [];
    // var storedTimeBlockObj = storedTimeblocks[0];
    // newTimeBlock.push(storedTimeBlockObj);
    // newTimeBlock.push(newObj);
    // var results = newTimeBlock.filter(element => {
    //     return element !== null;
    // });
    // console.log(results);
    localStorage.setItem(selectedTimeblock, JSON.stringify(textContent));

// get the text area 
//          filter on children (just for text area) e.g. x.children('textarea')
//          get value of the text area
//  access local storage
//          find entry for the selected hour
//          replace if exists, create if  doesn't exist 
//          resave to local storage
    console.log(btnClicked);
    console.log(btnClckdParent[0].children[0].textContent);
    console.log (btnClckdParent.children("textarea")[0].value);
   // console.log(newTimeBlock);
}

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
    //var textAreaContent = pastTimeBlocks.text;
    //console.log(pastTimeBlocks.timeSelected);
    // for(var y = 0; y < pastTimeBlocks.length; y++){
    // } 
    // return textAreaContent;
 
//console.log(textAreaContent);

// if(pastTimeBlocks !== null){
//  //var textAreaContent = pastTimeBlocks[y].text;
//     for(var x = 0; x < timeBlock.length ; x ++){
//         if(pastTimeBlocks.length = 1){
//             timeBlock[x].children[1].textContent  = textAreaContent
//         }
//         else if 
//         (timeBlock[x].children[0].textContent === pastTimeBlocks.timeSelected){
//             timeBlock[x].children[1].textContent  = textAreaContent;
//         } 
    
//     }
// }
}

getSavedDescription();

//console.log(timeBlock);
function setTimeblockBackground(){
    for(var i = 0; i < timeBlock.length ; i ++){
        // console.log(timeBlock[i].children[0].textContent);
        // console.log(currentHour);
        // console.log(timeBlock[i].children[0].textContent<currentHour);
        
        if(timeBlock[i].children[0].textContent === currentHour){
            timeBlock[i].classList.add('present');
            timeBlock[i].classList.remove('future');
            timeBlock[i].classList.remove('past');
        } else if (timeBlock[i].children[0].textContent < currentHour) {
            timeBlock[i].classList.add('past');
            timeBlock[i].classList.remove('present');
            timeBlock[i].classList.remove('future');
        } 
         else if (timeBlock[i].children[0].textContent > currentHour){
            timeBlock[i].classList.add('future');
            timeBlock[i].classList.remove('present');
            timeBlock[i].classList.remove('past');
         }
    }
//            if(timeBlock[0]< currentHour){ 
//             timeBlock[0].classList.add('past');
//             timeBlock[0].classList.remove('present');
//             timeBlock[0].classList.remove('future');
// }
}
setTimeblockBackground();
//setInterval(setTimeblockBackground, 1000);

saveButton.on("click", getDescription);

// why is 9am always set as future?
// how do i get multiple objects out of local storage to print out to the page?

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//console.log("WINDOW-2: ", this)
//console.log("DOM: ", document)

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var storedEvents = [];
  if(localStorage.getItem("schedule") != null){
    storedEvents = JSON.parse(localStorage.getItem("schedule"));
    for(i = 0; i < storedEvents.length; i++){
        console.log(storedEvents[i].time)
        var testStorage = $('#' + storedEvents[i].time)
        console.log(testStorage)
       // testStorage.children('textarea').val()storedEvents[i].textEvent;
       testStorage.children('textarea').val(storedEvents[i].textEvent);
    
    }
  }
  console.log(storedEvents)

  var getBtn = $('.btn')
      //console.log(getBtn)
      getBtn.on("click", function(){
          var getParentID = ($(this).parent().attr('id'))
          //console.log(getParentID);
          var getTextArea = ($(this).siblings(".description").val())
          console.log("HERE: ", getTextArea)
          //localStorage.setItem(getParentID, getTextArea )

          storedEvents = jQuery.grep(storedEvents , function (value) {
            return value.time != getParentID;
          });
                    
          storedEvents.push(
              {
                time: getParentID,
                textEvent: getTextArea
              }
          )
     
          localStorage.setItem("schedule", JSON.stringify(storedEvents))

    })


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var getHourPresent = parseInt(dayjs().format('H'))
  $('*[id*=hour]').each(function() {
    var getDivID = $(this).attr("id")
    console.log(storedEvents.time)
  

    var getHourFromID = parseInt(getNumericPart(getDivID));
      console.log(getHourFromID)
      console.log(getHourPresent)

      if (getHourFromID === getHourPresent){
        $(this).addClass('present')
      } 
      else if (getHourFromID < getHourPresent){
      $(this).addClass('past')
      $(this).children("textarea").attr("disabled", true)
    }
      else{
        $(this).addClass('future')
      }

 })

    function getNumericPart(id){
      var $num = id.replace(/[^\d]+/, '');
      return $num;
    }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  //
  // TODO: Add code to display the current date in the header of the page.

var displayTime = dayjs().format('dddd, MMMM D')
var currentDayEl = $('#currentDay')
currentDayEl.text(displayTime);

});


  setTimeout(function(){location.reload()},3600000 - ((new Date) % 3600000))

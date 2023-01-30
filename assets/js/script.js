
$(document).ready(function () {
//will retrieve  events scheduled and display them in the textarea of the
//correct hour I made a unique key for local storage that consists of
//the current day month and year. This way each days events are stored
//separately.  One value in the object stored is the hour of the event
//and the other value stored is the event
  var storedEvents = [];
  var dateOfSchedule = dayjs().format('MMDDYY');
  if(localStorage.getItem(dateOfSchedule) != null){
     storedEvents = JSON.parse(localStorage.getItem(dateOfSchedule));
      for(i = 0; i < storedEvents.length; i++){
        var testStorage = $('#' + storedEvents[i].time);
        testStorage.children('textarea').val(storedEvents[i].textEvent);
    
    }
  }

//button click event. I get the id of the parent div id and the sibling textare
//value to save to local storage these are used as the keys to the object that
//will be stored in localstorage. I use jquery grep so if any event for the 
//hour exists it will be deleted and a new event appended. I add the new
//object to the storedevents array and it is added to localstorage
//the last thing I do is open a dialog box that tells user the event has
//been saved
  var getBtn = $('.btn');
      getBtn.on("click", function(){
          var getParentID = ($(this).parent().attr('id'));
          var getTextArea = ($(this).siblings(".description").val());
          storedEvents = jQuery.grep(storedEvents , function (value) {
            return value.time != getParentID;
          });
                    
          storedEvents.push(
              {
                time: getParentID,
                textEvent: getTextArea
              }
          )
     
          localStorage.setItem(dateOfSchedule, JSON.stringify(storedEvents));

          $('#dialog').dialog('open');
    })


//this sets the past present future classes on page load. I get the current
//hour from dayjs then I get the divs that contain hour in the id and loop
//thru them As it is being looped thru I get the full id and call a function
//called getNumericPart that will remove all non numeric from the id and
//return just the number which will be the hour. I then check to see if
//the returned number is === to < or > and add the classes to the divs
//I also disable the textarea and button ones that are in the past

  var getHourPresent = parseInt(dayjs().format('H'));
  $('*[id*=hour]').each(function() {
    var getDivID = $(this).attr("id");
    var getHourFromID = parseInt(getNumericPart(getDivID));

      if (getHourFromID === getHourPresent){
        $(this).addClass('present');
      } 
      else if (getHourFromID < getHourPresent){
      $(this).addClass('past');
      $(this).children("textarea").attr("disabled", true);
      $(this).children("button").prop('disabled', true);
    }
      else{
        $(this).addClass('future');
      }

 })

//I got this function from https://gabrieleromanato.name/.  I use it to
//remove non numeric characters from an ID and return just the numbers
    function getNumericPart(id){
      var $num = id.replace(/[^\d]+/, '');
      return $num;
    }
  //
 
//this displays the current date on the webpage
var displayTime = dayjs().format('dddd, MMMM D YYYY');
var currentDayEl = $('#currentDay');
currentDayEl.text(displayTime);

});


//this is code for when the page has already opened and the hour changes
//it will run on every new hour.  I get the present time and hour past and use
//them to get the divs of the hours. I then remove classes and add classes
//and disable the textarea and button of hour past
setTimeout(function(){
    var getHourPresent2 = parseInt(dayjs().format('H'));
    var getHourpast = getHourPresent2 - 1;
    var varGetID = $('*[id*=' +  getHourPresent2 + ']');
    var varGetID2 =  $('*[id*=' +  getHourpast + ']');
    varGetID.removeClass('future');
    varGetID.addClass('present');
    varGetID2.removeClass('present');
    varGetID2.addClass('past');
    varGetID2.children("textarea").attr("disabled", true);
    varGetID2.children("button").prop('disabled', true);
},3600000 - ((new Date) % 3600000))

//this formats the dialog I have it set to false at start and will open
//on button click
  $("#dialog").dialog({
      modal: true,
      autoOpen: false,
      title: "Event Add",
      width: 300,
      height: 150
  });
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var time = dayjs().format();
console.log(time);
var displayTime = dayjs().format('dddd, MMMM D')
console.log(displayTime)
var currentDayEl = $('#currentDay')
currentDayEl.text(displayTime);
var testhour = 11
//var getHourPresent = dayjs().format('H');
var getHourPresent = parseInt(dayjs().format('H'))
//getHourPresent = getHourPresent + 12
var getHourPast = getHourPresent - 1;
getHourFuture = getHourPresent + 1
console.log
 $('*[id*=hour]').each(function() {

 //console.log( $("input[name=" + getHourPresent + "]"));
 $('[id*=' +  getHourPresent + ']')
 //if($('[id*=' +  getHourPresent + ']' == ($this.attr("id"))){
     // console.log($("hour-" + getHourPresent))
      //if ($("hour-" + getHourPresent).attr("id") == $(this).attr("id")){
          //console.log($('[id*=' +  getHourPresent + ']').attr("id"))
         // console.log($(this).attr("id"))

          //if($('[id*=' +  getHourPresent + ']').attr("id") == $(this).attr("id")){
            //console.log($(this).attr("id"))
            //$(this).children("textarea").css("background-color", "yellow");
            //$(this).removeClass('past')
            //$(this).addClass('present')
            
          //}

          //if($('[id*=' +  getHourFuture + ']').attr("id") == $(this).attr("id")){
            ///console.log($(this).attr("id"))
            //$(this).children("textarea").css("background-color", "yellow");
            //$(this).removeClass('present')
            //$(this).addClass('future')
            //getHourFuture++
            
          //}

   // }
   var test = $(this).attr("id")
//alert(getNumericPart(test1));
var getHourFromID = getNumericPart(test);
  console.log(getHourFromID)
  console.log(getHourPresent)

  if (getHourFromID == getHourPresent){
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

      ///////////////////////////////////////////////////////////
  var getBtn = $('.btn')
  console.log(getBtn)
  getBtn.on("click", function(){
    var getParentID = ($(this).parent().attr('id'))
    console.log(getParentID);
    getParent = ($(this).parent())
    console.log(getParent)
   var getTextArea = getParent.children('textarea')
   console.log(getTextArea)
  // getTextArea.text('foo bar')
  console.log(getTextArea.val())


  })
  //////////////////////////////////////////////////////////
 





  //var CurrenHour = $('div:contains("11")')
//$('*[id*=11]:visible').each(function() {
 $('*[id*=' +  getHourPresent + ']:visible').each(function() {
  //console.log("found")
 //console.log(jQuery(this).children("textarea"));
 //jQuery(this).children("textarea").css("background-color", "yellow");
  this
});

//console.log(CurrenHour);
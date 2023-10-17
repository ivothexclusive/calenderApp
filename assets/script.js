$(document).ready(function() {
  var currentDay = dayjs().format('dddd, MMMM D');
  $('header').append(currentDay);

  $(".saveBtn").click(function() {
    console.log("A button clicked!");
    var valueToSave = $(this).siblings("textarea").val();
    var key = $(this).parent().attr('id');
    console.log('valueToSave: ', valueToSave);
    console.log('key: ', key);
    localStorage.setItem(key, valueToSave);
  });

  var timeBlock = $(".time-block");
  timeBlock.each(function() {
    var key = $(this).attr('id');
    var retrievedObject = localStorage.getItem(key);
    if (retrievedObject !== null) {
      $(this).find("textarea").val(retrievedObject);
    }
  });

  var currentHour = dayjs().hour();
  timeBlock.each(function() {
    var timeBlockId = $(this).attr('id');
    var timeBlockHour = parseInt(timeBlockId.split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});


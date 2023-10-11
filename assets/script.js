var currentDay = dayjs().format('dddd, MMMM D') 
$('header').append(currentDay)

//
$(function () {
$(".saveBtn").click(function() {
  console.log("A button clicked!");

  // Get the value to save from the sibling textarea element
  var valueToSave = $(this).siblings("textarea").val();

  // Get the key from the parent element's ID
  var key = $(this).parent().attr('id'); 

  console.log('valueToSave: ', valueToSave);
  console.log('key: ', key);

  // Save the value to local storage as a JSON string
  localStorage.setItem(key, JSON.stringify(valueToSave));
});
})
var timeBlock = $(".time-block");

// To load the saved data
timeBlock.each(function() {
  // Get the key from the time-block's ID
  var key = $(this).attr('id');

  // Retrieve the saved data from local storage
  var retrievedObject = JSON.parse(localStorage.getItem(key));

  // Check if data was retrieved
  if (retrievedObject !== null) {
    // Set the value of the textarea in the current time-block
    $(this).find("textarea").val(retrievedObject);
  }
});

$(function () {
  var currentHour = dayjs().hour()

 $(".time-block").each(function() {
   
   const timeBlockId = this.id;
  const timeBlockHour = parseInt(timeBlockId.split("-")[1]);

  if (timeBlockHour < currentHour) {
//     // Time block is in the past
   $(this).addClass("past");
  } else if (timeBlockHour == currentHour) {
//     // Time block is in the present
    $(this).addClass("present");
 } else {
//     // Time block is in the future
    $(this).addClass("future");
  }
});

})
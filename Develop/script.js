
//Shows the data in the beginning of the page
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

//Allows the user to save the task added to the hour block.

$('.saveBtn').on('click', function () {
  var task = $(this).siblings('.description').val();
  var hour = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(hour, task);

});

//Allows the user to get the task added to the hour block when the page is reloaded/refreshed.

$('.time-block').each(function() {
  var hour = $(this).attr('id').split('-')[1];
  var userInput = localStorage.getItem(hour);
  if (userInput) {
    $(this).find('.description').val(userInput);
  }
});

//Change color according to the hour of the day.

const currentHour = dayjs().hour();
document.querySelectorAll('.time-block').forEach((timeBlockElement) => {
  const hour = parseInt(timeBlockElement.id.split('-')[1]);

  if (currentHour > hour) {
    timeBlockElement.classList.add('past');
  } else if (currentHour === hour) {
    timeBlockElement.classList.add('present');
  } else {
    timeBlockElement.classList.add('future');
  }
});
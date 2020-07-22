$(document).ready(function () {

    // Displays current date in    
    const dateDisplay = $("#currentDay");
    const currentDate = moment().format("MMMM DD, YYYY");
    
    dateDisplay.text(currentDate);


    $("#saveBtn").on("click", function(event) {
        event.preventDefault();
        

    })
});




// Psuedo code
// Make timeblock change color when during current hour
// Add click event to save button
// Store info in local storage


// Requirements

// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

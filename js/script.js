document.addEventListener('DOMContentLoaded', function () {
    // Function to validate the reservation form
    function validateReservationForm() {
        var name = document.getElementById('name').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var guests = document.getElementById('guests').value;

        if (name == '' || date == '' || time == '' || guests == '') {
            alert('Please fill out all fields before submitting.');
            return false;
        }

        // Check if the selected date is in the future
        var today = new Date();
        var selectedDate = new Date(date);
        if (selectedDate.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
            alert('Please select a future date for your reservation.');
            return false;
        }

        // Check if the selected time is within the restaurant's operating hours (e.g., 6pm to 11pm)
        var openingTime = '18:00';
        var closingTime = '23:00';
        if (time < openingTime || time > closingTime) {
            alert('Please select a time between 6:00 PM and 11:00 PM.');
            return false;
        }

        return true;
    }

    // Attach the validate function to the reservation form's submit event
    var reservationForm = document.querySelector('.booking form');
    if (reservationForm) {
        reservationForm.onsubmit = validateReservationForm;
    }
});

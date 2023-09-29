//your JS code here. If required.
// Get references to the dropdown list and button by their IDs
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.getElementById('removeButton');

// Add a click event listener to the button
removeButton.addEventListener('click', function() {
    // Get the selected option element
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Check if an option is selected before attempting to remove it
    if (selectedOption) {
        // Remove the selected option from the dropdown list
        colorSelect.removeChild(selectedOption);
    }
});


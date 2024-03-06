function animateButton(button) {
    // Disable the button to prevent multiple clicks during the loading animation
    button.disabled = true;

    // Add a loading class to the button
    button.classList.add('loading');

    // Simulate a 2-second loading animation
    setTimeout(() => {
        // Remove the loading class and enable the button after 2 seconds
        button.classList.remove('loading');
        button.disabled = false;

        // Add your additional logic or navigation here
        alert("Button Clicked! Add your animation logic here.");
    }, 1000);
}

// Attach the updated function to the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => animateButton(button));
});

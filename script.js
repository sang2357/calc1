// Get DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculateBtn');
const errorMessage = document.getElementById('errorMessage');

// Add event listener to the calculate button
calculateBtn.addEventListener('click', function() {
    // Get input values
    const value1 = num1Input.value.trim();
    const value2 = num2Input.value.trim();
    
    // Validate inputs
    if (!validateInputs(value1, value2)) {
        return;
    }
    
    // Clear any previous error messages
    hideError();
    
    // Calculate sum
    const num1 = parseInt(value1, 10);
    const num2 = parseInt(value2, 10);
    const sum = calculateSum(num1, num2);
    
    // Display result in alert
    alert(`The sum is: ${sum}`);
});

// Validate that both inputs are integers
function validateInputs(value1, value2) {
    // Check if inputs are empty
    if (value1 === '' || value2 === '') {
        showError('Please enter both numbers.');
        return false;
    }
    
    // Parse values as integers
    const num1 = parseInt(value1, 10);
    const num2 = parseInt(value2, 10);
    
    // Check if inputs are valid integers
    if (isNaN(num1) || isNaN(num2)) {
        showError('Please enter valid integers only.');
        return false;
    }
    
    // Check if the original strings match the parsed integers (to reject decimals)
    if (value1 !== num1.toString() || value2 !== num2.toString()) {
        showError('Please enter integers only (no decimals).');
        return false;
    }
    
    return true;
}

// Calculate the sum of two numbers
function calculateSum(num1, num2) {
    return num1 + num2;
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

// Hide error message
function hideError() {
    errorMessage.textContent = '';
    errorMessage.classList.remove('show');
}

// Clear error message when user starts typing
num1Input.addEventListener('input', hideError);
num2Input.addEventListener('input', hideError);

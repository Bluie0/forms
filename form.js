function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages

    if (fullName.length < 5) {
        errorMessages.innerHTML += 'Name must not be less than 5 characters<br>';
    }

    if (!email.includes('@')) {
        errorMessages.innerHTML += 'Email Id should have @ character in it<br>';
    }

    if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        errorMessages.innerHTML += 'Phone Number should not be 123456789 and must be a 10-digit number<br>';
    }

    if (password === 'password' || password === fullName || password.length < 8) {
        errorMessages.innerHTML += 'Password cannot be ‘password’ or ‘name of the user’ or less than 8 characters<br>';
    }

    if (password !== confirmPassword) {
        errorMessages.innerHTML += 'Password and confirm password should match<br>';
    }

    // If there are no error messages, submit the form
    if (errorMessages.innerHTML === '') {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset(); // Reset the form
    }
}

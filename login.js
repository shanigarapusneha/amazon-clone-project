document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Mock API endpoint for authentication (replace with actual endpoint)
    var mockAPIURL = 'https://api.example.com/signin';
    var requestBody = { email: email, password: password };

    // Make a POST request to the mock API endpoint
    fetch(mockAPIURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (response.ok) {
            // Sign-in successful
            return response.json();
        } else {
            // Sign-in failed
            throw new Error('Invalid email or password');
        }
    })
    .then(data => {
        // Display success message and redirect
        document.getElementById('message').innerText = data.message;
        window.location.href = '/dashboard'; // Redirect to dashboard or homepage
    })
    .catch(error => {
        // Display error message
        document.getElementById('message').innerText = error.message;
    });
});

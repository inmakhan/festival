const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});

function signup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Store user information in local storage
    if (username != "" && email != "" && password != "") {
        localStorage.setItem('Username', username);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        alert("Signup successful");
        window.location = "./home.html";

    } else {
        alert("Please correct input vlaue");
    }
}

function login() {
    var user_name = document.getElementById("Username").value;
    var pass_word = document.getElementById("Password").value;

    // Get user information from local storage
    var storedUsername = localStorage.getItem('Username');
    var storedPassword = localStorage.getItem('Password');

    if (user_name === storedUsername && pass_word === storedPassword) {
        alert("Login successful");
        window.location = "./home.html"; // Redirecting to another page.
    } else {
        alert("Login failed. Please check your username and password.");
    }
}


// Function to clear input fields
function clearInputFields() {
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('Username').value = '';
    document.getElementById('Password').value = '';
}

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
    clearInputFields(); // Call the function to clear input fields
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
    clearInputFields(); // Call the function to clear input fields
});

// logout
function logout() {
  
    localStorage.removeItem('Username');
    localStorage.removeItem('Email');
    localStorage.removeItem('Password');
    displayCustomerInfo(); // Update the display after logging out
    alert("Logged out successfully");
    window.location = "./home.html";
}

// Call the function to display customer information when the page loads
window.addEventListener("load", displayCustomerInfo);

// Function to display user information
function displayCustomerInfo() {
    var storedUsername = localStorage.getItem('Username');
    var storedEmail = localStorage.getItem('Email');

    if (storedUsername && storedEmail) {
        alert("Logged in as: " + storedUsername + " (Email: " + storedEmail + ")");
    } else {
        alert("Not logged in.");
    }
}



function forgotPassword() {
    const email = document.getElementById('forgotEmail').value;

    // Validate the email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if the email exists in local storage
    const storedEmail = localStorage.getItem('Email');
    if (email === storedEmail) {
        // Implement your password reset logic here, such as sending an email with a reset link

        // Remove the password from local storage
        localStorage.removeItem('Password');
        
        alert("Password reset link sent to your email. Password removed.");
    } else {
        alert("Email not found. Please check your email address.");
    }
}


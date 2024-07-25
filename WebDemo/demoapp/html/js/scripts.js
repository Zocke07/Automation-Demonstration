document.addEventListener('DOMContentLoaded', () => {
    // Display the username on the welcome page
    const username = sessionStorage.getItem('username') || 'Guest';
    const usernameDisplay = document.getElementById('username_display');
    if (usernameDisplay) {
        usernameDisplay.textContent = username;
    }
});

// Login function
function login(event) {
    event.preventDefault();
    const username = document.querySelector('#username_field').value;
    const password = document.querySelector('#password_field').value;

    if (username === "demo" && password === "mode") {
        sessionStorage.setItem('username', username); // Save username for use in welcome page
        window.location = "welcome.html";
    } else {
        window.location = "error.html";
    }
}

// Update Profile
function updateProfile() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    alert(`Profile Updated:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
}

// Show Alert
function showAlert() {
    alert('This is a test alert!');
}

// Upload File
function uploadFile() {
    const fileInput = document.querySelector('#file_input');
    if (fileInput.files.length > 0) {
        alert(`File ${fileInput.files[0].name} uploaded successfully!`);
    } else {
        alert('No file selected.');
    }
}

// Logout Function
function logout() {
    sessionStorage.removeItem('username');
    window.location = 'index.html';
}
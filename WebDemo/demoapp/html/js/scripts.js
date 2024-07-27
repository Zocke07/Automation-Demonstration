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
function simulateFileUpload(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const fileInput = document.getElementById('file_input');
    const uploadStatus = document.getElementById('upload_status');

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      // Simulate a file upload delay with a progress bar
      let progress = 0;
      uploadStatus.innerHTML = `
        <p id="uploading-file-info">Uploading: ${file.name} (${(file.size / 1024).toFixed(2)} KB)</p>
        <div id="progress-bar-container" class="progress-bar-container">
          <div id="progress-bar" class="progress-bar"></div>
        </div>
      `;

      const progressBar = document.getElementById('progress-bar');

      const uploadSimulation = setInterval(() => {
        if (progress < 100) {
          progress += 5; // Increase progress
          progressBar.style.width = progress + '%'; // Update progress bar width
        } else {
          clearInterval(uploadSimulation);
          alert('File uploaded successfully!');
          uploadStatus.innerHTML = '<p id="upload-complete">Upload complete!</p>';
        }
      }, 100); // Update progress every 100 ms
    } else {
      alert('Please select a file to upload.');
    }
  }

// Logout Function
function logout() {
    sessionStorage.removeItem('username');
    window.location = 'index.html';
}
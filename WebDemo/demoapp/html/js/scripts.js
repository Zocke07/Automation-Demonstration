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
function updateProfile(event) {
    event.preventDefault();
    const name = document.querySelector('#profile-name').value;
    const email = document.querySelector('#profile-email').value;
    alert(`Profile updated with name: ${name} and email: ${email}`);
    // Clear fields
    document.querySelector('#profile-name').value = '';
    document.querySelector('#profile-email').value = '';
    document.querySelector('#profile-bio').value = '';
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
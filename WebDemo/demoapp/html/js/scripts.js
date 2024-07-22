function login(event) {
    event.preventDefault();
    const username = document.querySelector('#username_field').value;
    const password = document.querySelector('#password_field').value;

    if (username === "demo" && password === "mode") {
        window.location = "welcome.html";
    } else {
        window.location = "error.html";
    }
}
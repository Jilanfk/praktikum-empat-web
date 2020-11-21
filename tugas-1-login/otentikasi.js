
const loginForm = document.getElementById("form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ahmad2017" && password === "integrity") {
        window.location.href = "login_sukses.html"
    } else {
        alert("Username dan/atau Password Salah");
    }
})
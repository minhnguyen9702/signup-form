
function confirmation() {
    const password = document.getElementById('password')
    const confirm = document.getElementById('confirm')
    const error = document.getElementById('error')
    if (password.value == "" && confirm.value == "") {
        password.style.borderColor = "red";
        confirm.style.borderColor = "red";
        error.innerHTML = "✖ Password cannot be empty";
    } else if (password.value == confirm.value) {
        password.style.borderColor = "lime";
        confirm.style.borderColor = "lime";
        error.innerHTML = "";
    } else {
        password.style.borderColor = "red";
        confirm.style.borderColor = "red";
        error.innerHTML = "✖ Passwords do not match";
    }
}
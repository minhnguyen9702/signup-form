
function confirmation() {
    const password = document.getElementById('password')
    const confirm = document.getElementById('confirm')
    if (password.value == "" && confirm.value == "") {
        password.style.borderColor = "red";
        confirm.style.borderColor = "red";
        return console.log("false")
    } else if (password.value == confirm.value) {
        password.style.borderColor = "lime";
        confirm.style.borderColor = "lime";
        return console.log("true")
    } else {
        password.style.borderColor = "red";
        confirm.style.borderColor = "red";
        return console.log("false")
    }
}
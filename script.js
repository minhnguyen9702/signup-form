const password = document.querySelector("#password")
const confirm = document.querySelector("#confirm")

function confirmation (password, confirm) {
    if (password.textContent == confirm.textContent) {
        return true
    } else {
        return false
    }
}
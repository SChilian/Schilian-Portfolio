const btn = document.querySelector(".btn");
const resetForm = document.getElementById("message");
const resetEmail = document.getElementById("email");
const resetName = document.getElementById("name");

btn.addEventListener("click", setTimeout)

setTimeout(clearData, 1000);

console.log(resetForm.value);

function clearData () {
    resetForm.value = "";
    resetEmail.value = "";
    resetName.value = "";

}
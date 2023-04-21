const temp = document.getElementById("temp");
const submitButton = document.getElementById("create");

temp.addEventListener("change", function() {
  if (temp.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
})
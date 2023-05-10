function enableEditing() {
    var editableContent = document.getElementById("editableContent");

    // Restore previous content from local storage
    // if (localStorage.getItem("myDivContent")) {
    //   editableContent.innerHTML = localStorage.getItem("myDivContent");
    // }

    // Enable autosave on input
  //   editableContent.addEventListener("input", function() {
  //     localStorage.setItem("myDivContent", editableContent.innerHTML);
  //   });
   }
  function shadetext(){
    var color = document.getElementById("color-picker").value;
    document.execCommand("forecolor",false, color);
  }
  enableEditing();

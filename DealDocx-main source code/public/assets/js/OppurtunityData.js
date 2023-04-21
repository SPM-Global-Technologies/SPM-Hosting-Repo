

// dropdown Of SideBar of OppurtunityData-HtmlPage

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// starting files upload in accounts sidebar jS
updateList = function () {
  var input = document.getElementById('upload');
  var output = document.getElementById('fileList');

  output.innerHTML = '<ul>';
  for (var i = 0; i < input.files.length; i++) {
    output.innerHTML += '<li>' + input.files.item(i).name + '</li>';

  }
  output.innerHTML += '</ul>'
}
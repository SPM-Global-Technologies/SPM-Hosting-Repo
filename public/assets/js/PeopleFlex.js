
function myFunction2People() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearchpeople");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenupeople");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
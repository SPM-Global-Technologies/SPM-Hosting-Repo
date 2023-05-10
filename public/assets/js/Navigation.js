// FOR TOP-BAR FEATUARES USE IN ALL PAGES



// PROFILE ICON JS

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target.matches('fa fa-user')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i< dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
        }
        
      }
    }
  }

//   SEARCH ICON JS USE IN ALL PAGES

const icon=document.querySelector('.icon');
const search=document.querySelector('.search');
icon.onclick=function(){
    search.classList.toggle('active')
   icon.style.backgroundColor="white";
}

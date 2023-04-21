// Start of Home-Page SideBar Js


// Start of home-toggele button animation
$("#toggle-button").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-less-than")) {
    icon.removeClass("fa-less-than").addClass("fa-greater-than");
  }
  else {
    icon.removeClass("fa-greater-than").addClass("fa-less-than");
  }
});
// End of home-toggele button animation

$("#homeside").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

$("#homeside1").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

$("#homeside2").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});
// End of Home Side Bar js






function myFnc(e) {
  e.classList.toggle("show");

  var elem = document.getElementById("navID"),
    Style = window.getComputedStyle(elem),
    right = Style.getPropertyValue("right");

  if (right == "0px") {
    elem.style.right = "-260px";
  } else {
    elem.style.right = "0px";
  }
}

// <!-- js for dropdown -->
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
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

// function openNav(e){
//   e.classList.toggle("show");

//   var elem = document.getElementById("main"),
//   Style = window.getComputedStyle(elem),
//   right = Style.getPropertyValue("right");

//   if(right == "0px"){
//     elem.style.right = "-260px";
//   }else{
//     elem.style.right = "0px";
//   }
// }

// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginRight = "250px";
// }
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginRight = "0";
// }


function openClose(){
  var sidebar = document.getElementById("mySidebar");
  var main = document.getElementById("main");

  if(sidebar.style.width === "250px"){
    sidebar.style.width = "0";
    main.style.marginRight = "0px";
  }else{
    sidebar.style.width = "250px";
    main.style.marginRight = "250px";
  }
}


$("#sidetoggle").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

$("#sidetoggle1").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

$("#sidetoggle2").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

$("#sidetoggle3").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

$("#sidetoggle4").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

$("#sidetoggle5").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

//HomePage Sidebar
const sidebarToggle = document.querySelector('.sidebarhome-toggle');
const container = document.querySelector('.containerhome');

sidebarToggle.addEventListener('click', function () {
    container.classList.toggle('sidebarhome-open');
    if (container.classList.contains('sidebarhome-open')) {
        sidebarToggle.textContent = '>';
        sidebarToggle.style.right = '250px'; /* Width of the sidebar plus margin */
    } else {
        sidebarToggle.textContent = '<';
        sidebarToggle.style.right = '0px';
    }
});

var click6 = document.getElementById('clickmeguide');
click6.addEventListener('click6', myFunctionguide);

function myFunctionguide() {
  var tablewrap6 = document.getElementById('guideid');
  tablewrap6.classList.toggle('hiddenguide');
};


$("#clickmeguide").click(function () {
  var icon = $(this).find("span");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});

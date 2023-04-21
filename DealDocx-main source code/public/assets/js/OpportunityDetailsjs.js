var click5 = document.getElementById('clickmedetails');
click5.addEventListener('click5', myfunctionData);

function myfunctionData() {
  var tablewrap5 = document.getElementById('oppodetails');
  tablewrap5.classList.toggle('hidden1');
};


$("#clickmedetails").click(function () {
  var icon = $(this).find("span");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});





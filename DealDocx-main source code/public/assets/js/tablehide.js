
var click = document.getElementById('clickme');
click.addEventListener('click', myfunctionA);

function myfunctionA() {
  var tablewrap = document.getElementById('billOne');
  tablewrap.classList.toggle('hidden');
};


var click1 = document.getElementById('clikhere');
click1.addEventListener('click1', myfunctionB);

function myfunctionB() {
  var tablewrap1 = document.getElementById('ship');
  tablewrap1.classList.toggle('hidden');
};

// var click3 = document.getElementById('clikhere3');
// click3.addEventListener('click3', myfunctionC);

// function myfunctionC() {
//   var tablewrap3 = document.getElementById('displaytable3');
//   tablewrap3.classList.toggle('hidden');
// };

var click4 = document.getElementById('clickme');
click4.addEventListener('click', myfunctionD);

// billing address js
$("#clickme").click(function () {
  var icon = $(this).find("span");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});
// shipping address js
$("#clikhere").click(function () {
  var icon = $(this).find("span");
  if (icon.hasClass("fa-angle-down")) {
    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
  }
  else {
    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
  }
});
// additional info js
// $("#clikhere3").click(function () {
//   var icon = $(this).find("span");
//   if (icon.hasClass("fa-angle-down")) {
//     icon.removeClass("fa-angle-down").addClass("fa-angle-up");
//   }
//   else {
//     icon.removeClass("fa-angle-up").addClass("fa-angle-down");
//   }
// });


$("#main").click(function () {
  var icon = $(this).find("i");
  if (icon.hasClass("fa-less-than")) {
    icon.removeClass("fa-less-than").addClass("fa-greater-than");
  }
  else {
    icon.removeClass("fa-greater-than").addClass("fa-less-than");
  }
});


// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginRight = "250px";
// }
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginRight = "0";
// }


$(document).on('click', ' ul a li', function () {
  $(this).addClass('active1').siblings().removeClass('active1')
})


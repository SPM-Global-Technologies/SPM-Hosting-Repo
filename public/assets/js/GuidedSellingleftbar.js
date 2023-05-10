
function guideOpen() {
  let config = document.getElementById('settingicon');
  var sidebar = document.getElementById("leftsideguide");
  var label = document.getElementById("gl");

  if (sidebar.style.width === "0%") {
    sidebar.style.width = "40%";
    config.style.display = "block";
    label.style.display = "block";




  } else {
    sidebar.style.width = "0%";
    config.style.display = "none";
    label.style.display = "none";
  }
}


// BILLING SHIPPING ADDRESS

function myfunctionBill(address) {
  var element = document.getElementById(address);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

function myfunctionShipOne(shipTable) {
  var element = document.getElementById(shipTable);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

function myfunctionBillOne(billTable) {
  var element = document.getElementById(billTable);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}


// OPPORTUNITY DETAILS


function openCSAM(opportunity) {
  var element = document.getElementById(opportunity);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

function myOpportunity(csamData) {
  var element = document.getElementById(csamData);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

// Quote Details

function myQuote(quote) {
  var element = document.getElementById(quote);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

function myQuoteData(tScope) {
  var element = document.getElementById(tScope);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }

}


// BID ESTIMATION JS (POPUP SCREEN)
function openPopup() {
  var popupBackdrop = document.getElementById("myPopupBackdrop");
  let conten = document.getElementById('content');
  // conten.style.zIndex = 0;
  var popup = document.getElementById("myPopup");
  popupBackdrop.style.display = "block";
  popup.style.display = "block";
}
function closePopup() {
  var popupBackdrop = document.getElementById("myPopupBackdrop");
  var popup = document.getElementById("myPopup");
  let conten = document.getElementById('content');
  // conten.style.zIndex = 2;
  popupBackdrop.style.display = "none";
  popup.style.display = "none";
}

function hiddenPopup(containerPopup) {
  var element = document.getElementById(containerPopup);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }

}

function hiddenPopupTable(tbvalue) {
  var element = document.getElementById(tbvalue);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

function hiddenPopupServiceTable(servicevalue) {
  var element = document.getElementById(servicevalue);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}


$('#proffessionalCircle').click(function () {
  var iconChange = $(this).find('i');
  if (iconChange.hasClass('fa-circle-thin')) {
    iconChange.removeClass('fa-circle-thin');
    iconChange.html('<i class ="fa-solid fa-check"></i>');
    iconChange.css('color', '#045679');
  }
  else {

    iconChange.addClass('fa-circle-thin');
    iconChange.html('');

  }
});


$('#managementCircle').click(function () {
  var iconChange = $(this).find('i');
  if (iconChange.hasClass('fa-circle-thin')) {
    iconChange.removeClass('fa-circle-thin');
    iconChange.html('<i class ="fa-solid fa-check"></i>');
    iconChange.css('color', '#045679');
  }
  else {
    iconChange.addClass('fa-circle-thin');
    iconChange.html('');

  }
});


// Table constant data
// const role =  document.querySelectorAll("#guideRole");
// const col2 = document.querySelectorAll("#col2");

// role.addEventListener("change", function(){
//   const selectedValue = role.value;
//   col2.textContent = selectedValue;
// });

const dropdowns = document.querySelectorAll(".guideRole");
dropdowns.forEach(guideRole => {
  guideRole.addEventListener("change", function () {
    const selectedValue = guideRole.value;
    const column2 = guideRole.parentNode.nextElementSibling;
    column2.textContent = selectedValue;
  });
});

// js for not to send data automatically without clicking submit
// const formButton = document.getElementById('applybtnid');
// formButton.addEventListener('submit', (event) =>{
//   event.preventDefault();
// });


// Require BackEnd Functionality

function inputControll(event) {
  const requirefield = event.target;
  // const requireSection = document.querySelector(".dropdown-btn")
  if (requirefield.value.trim() === "" && requirefield.required) {
    requirefield.style.borderLeft = "3px solid red";
    // requireSection.style.borderLeft = "3px solid red";
    requirefield.style.outline = "none";
  } else {
    requirefield.style.borderLeft = "1px solid gray";
    // requireSection.style.borderLeft = "1px solid gray";
  }

  requirefield.addEventListener("input", function () {
    if (this.value === "" && requirefield.required) {
      this.style.borderLeft = "3px solid red";
      // requireSection.style.borderLeft = "3px solid red";
      requirefield.style.outline = "none";
    } else {
      this.style.borderLeft = "1px solid gray";
      // requireSection.style.borderLeft = "1px solid gray";

    }
  });

}


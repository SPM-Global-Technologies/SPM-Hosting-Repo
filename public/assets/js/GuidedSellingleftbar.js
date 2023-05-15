
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



const dropdowns = document.querySelectorAll(".guideRole");
dropdowns.forEach(guideRole => {
  guideRole.addEventListener("change", function () {
    const selectedValue = guideRole.value;
    const column2 = guideRole.parentNode.nextElementSibling;
    column2.textContent = selectedValue;
  });
});



// Require BackEnd Functionality

const inputConts = document.querySelectorAll('.dropdown-container');
const dropBtns = document.querySelectorAll('.dropdown-btn');

inputConts.forEach((inputCont, index) => {
  const reqFields = inputCont.querySelectorAll(".billing_customer_name");
  const dropBtn = dropBtns[index];
  const optionLists = inputCont.querySelectorAll(".optionList");

  const checkAllFilled = () => {
    let allFilled = true;
    reqFields.forEach((input) => {
      if (input.value === "" && input.required) {
        allFilled = false;
      }
      input.classList.toggle("filled", input.value !== "");
    });
    if (allFilled) {
      dropBtn.classList.add("filled");
    } else {
      dropBtn.classList.remove("filled");
    }
  };

  reqFields.forEach((reqField) => {
    reqField.addEventListener("input", checkAllFilled);
  });

  optionLists.forEach((optionList) => {
    optionList.addEventListener("click", checkAllFilled);
  });
});

// ---------------------------------------------------------------------

function inputControll(event) {
  const requirefield = event.target;
  function applyBorderStyles() {
    if (requirefield.value.trim() === "" && requirefield.required) {
      requirefield.style.borderLeft = "3px solid red";
      requirefield.style.outline = "none";
    } else {
      requirefield.style.borderLeft = "1px solid lightgray";
    }
  }

  applyBorderStyles();

  requirefield.addEventListener("input", function () {
    applyBorderStyles();
  });
}


// REQUIRE FOR WHOLE NUMBER-------------------------------------------

function inputControll1(event) {
  const wholeNum = event.target;
  function applyBorderStyles() {
    if (wholeNum.value.trim() === "" && wholeNum.required) {
      wholeNum.style.borderLeft = "3px solid red";
      wholeNum.style.outline = "none";
    } else {
      wholeNum.style.borderLeft = "1px solid lightgray";
    }
  }

  applyBorderStyles();

  wholeNum.addEventListener("input", function () {
    applyBorderStyles();
  });
}

// REQUIRE FOR PERCENTAGE-------------------------------------------

function inputControll2(event) {
  const percent = event.target;
  function applyBorderStyles() {
    if (percent.value.trim() === "" && percent.required) {
      percent.style.borderLeft = "3px solid red";
      percent.style.outline = "none";
    } else {
      percent.style.borderLeft = "1px solid lightgray";
    }
  }

  applyBorderStyles();

  percent.addEventListener("input", function () {
    applyBorderStyles();
  });
}
// REQUIRE FOR MULTILINE-------------------------------------------

function inputControll3(event) {
  const multiLine = event.target;

  function applyBorderStyles() {
    if (multiLine.value.trim() === "" && multiLine.required) {
      multiLine.style.borderLeft = "3px solid red";
      multiLine.style.outline = "none";
    } else {
      multiLine.style.borderLeft = "1px solid lightgray";
    }
  }

  applyBorderStyles();

  multiLine.addEventListener("input", function () {
    applyBorderStyles();
  });
}

// REQUIRE FOR DATE-------------------------------------------

function inputControll4(event) {
  const date = event.target;

  function applyBorderStyles() {
    if (date === 0 && date.required) {
      date.style.borderLeft = "3px solid red";
      date.style.outline = "none";
    } else {
      date.style.borderLeft = "1px solid lightgray";
    }
  }

  applyBorderStyles();

  date.addEventListener("input", function () {
    applyBorderStyles();
  });
}

// CUSTOM DROPDOWN--------------------------------------

function toggleDropdown(event) {
  var dropdown = event.currentTarget.closest(".custom-dropdown");
  var dropdownOptions = dropdown.querySelector(".dropdown-options");
  var dropdownHeader = dropdown.querySelector(".dropdown-header");
  if (dropdownOptions.style.display === "block") {
    hideDropdown(dropdown);
    document.addEventListener("click", function hideDropdownOnOutsideClick(e) {
      if (!dropdown.contains(e.target)) {
        hideDropdown(dropdown);
        document.removeEventListener("click", hideDropdownOnOutsideClick);
      }
    });
  } else {
    dropdownOptions.style.display = "block";
    dropdownHeader.style.width = "100%";
    document.addEventListener("click", function hideDropdownOnOutsideClick(e) {
      if (!dropdown.contains(e.target)) {
        hideDropdown(dropdown);
        document.removeEventListener("click", hideDropdownOnOutsideClick);
      }
    });
    // document.addEventListener("click", hideDropdown1);
  }
}

function hideDropdown(dropdown) {
  var dropdownOptions = dropdown.querySelector(".dropdown-options");
  var dropdownHeader = dropdown.querySelector(".dropdown-header");
  dropdownOptions.style.display = "none";
  dropdownHeader.style.width = "";
  document.removeEventListener("click", hideDropdown);
}

function selectOption(event) {
  var option = event.target.textContent;
  var dropdown = event.currentTarget.closest(".custom-dropdown");
  var header = dropdown.querySelector(".dropdown-header");
  var input = header.querySelector(".billing_customer_name");

  input.value = option;
  input.readOnly = true;
  input.style.borderLeft = '1px solid lightgray';

  var dropdownOptions = dropdown.querySelector(".dropdown-options");
  dropdownOptions.style.display = "none";

  input.addEventListener("click", function () {
    input.readOnly = false;
    dropdownOptions.style.display = "block";
    input.focus();
    document.addEventListener("click", function hideDropdownOnOutsideClick(e) {
      if (!dropdown.contains(e.target)) {
        hideDropdown(dropdown);
        document.removeEventListener("click", hideDropdownOnOutsideClick);
      }
    });
  });
}



function filterOptions(event) {
  var input = event.target.value.toUpperCase();
  var dropdown = event.currentTarget.closest(".custom-dropdown");
  var options = dropdown.querySelectorAll(".dropdown-options li");
  for (var i = 0; i < options.length; i++) {
    var optionText = options[i].textContent.toUpperCase();
    if (optionText.indexOf(input) > -1) {
      options[i].style.display = "";
    } else {
      options[i].style.display = "none";
    }
  }
}



// -------------------WHOLE NUMBER JS--------------------------------------------------------------
function checkWholeNumber(event) {
  var input = event.target;
  var inputBox = input.parentNode;
  var errorMessage = inputBox.querySelector("#error-message");

  if (input.value % 1 !== 0 || input.value < 0) {
    inputBox.style.border = "1px solid red";
    errorMessage.innerHTML = "Please enter a whole number";
    errorMessage.style.color = "red";
  } else {
    inputBox.style.border = "1px solid lightgray";
    errorMessage.innerHTML = "";
  }
}

var inputs = document.querySelectorAll('.quantity');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('blur', checkWholeNumber);
}


// ----------------PERCENTAGE--------------------------

const percentageInputs = document.querySelectorAll(".percentage-input");

percentageInputs.forEach((percentageInput) => {
  percentageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      formatPercentage(percentageInput);
    }
  });

  percentageInput.addEventListener("blur", () => {
    formatPercentage(percentageInput);
  });
});

function formatPercentage(input) {
  const value = input.value.trim();
  if (value && !isNaN(value)) {
    const formattedValue = parseFloat(value).toFixed(2) + "%";
    input.value = formattedValue;
  }
}

//  ---------MULTILINE TEXT----------------------------
// var textarea = document.querySelector('#multiText');
// textarea.addEventListener('input', function () {
//   //  this.style.height = 'auto';
//   this.style.height = this.scrollHeight + 'px';
// });

// var textarea = document.querySelector('#multiText');
// textarea.addEventListener('input', function () {
//   var initHeight = this.style.height;
//   this.style.height = 'auto';
//   var height = this.scrollHeight;
//   if (height > parseInt(initHeight)) {
//     this.style.height = height + 'px';
//   } else {
//     this.style.height = initHeight;
//   }
//   this.scrollTop = this.scrollHeight;
// });


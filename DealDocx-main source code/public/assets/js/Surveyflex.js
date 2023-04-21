function myFunctionSurvey1() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearchsurvey");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenusurvey");
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


function showDeleteBtn() {

  const selectTag = document.getElementById("mySelect");
  var selectedValue = selectTag.options[selectTag.selectedIndex].value;
  const deleteButton = document.getElementById("deletesurveysection");

  if (selectedValue === "published") {
    deleteButton.style.display = "none";
  }
  else {
    deleteButton.style.display = "block";
  }
}

function displayAlert() {

  const selectTag = document.getElementById('tempUpdate');
  var selectedValue = selectTag.options[selectTag.selectedIndex].value;
  const promptUserField = document.getElementById('contentS7');

  if (selectedValue === "PROMPT USER") {
    promptUserField.style.display = "block";
    // promptUserField.style.outline = "1.8px solid #045679";
  }
  else {
    promptUserField.style.display = "none";
  }
}

function defaultShow() {
  const hide1 = document.getElementById("contentS6");
  const hide2 = document.getElementById("catIcon");
  const hide3 = document.getElementById("calcIcon");
  const hide4 = document.getElementById("clipLabel");
  const hide5 = document.getElementById("calcLabel");
  const hide6 = document.getElementById("configIcon");
  const hide7 = document.getElementById("configLabel");
  const hide8 = document.getElementById("add-section-btn");
  const hide9 = document.getElementById("deletesurveysection");
  const hide10 = document.getElementById("noSurveyQuestion");
  const hide11 = document.getElementById("tittleLabel");
  const hide12 = document.getElementById("cpqLabel");
  const contents7 = document.getElementById("contentS7");
  const hideQuestionAndSection = document.getElementById('main-section')

  //for else part
  const selectTag = document.getElementById('tempUpdate');
  var selectedValue = selectTag.options[selectTag.selectedIndex].value;

  if (hide1.style.display === 'none') {
    hide1.style.display = 'block';
    hide2.style.display = 'block';
    // hide2.style.position='fixed';
    hide3.style.display = 'block';
    hide4.style.display = 'block';
    hide4.style.top = '-17px';
    hide5.style.display = 'block';
    hide5.style.top = '-20px';
    hide6.style.display = 'none';
    hide7.style.display = 'none';
    hide8.style.display = 'block';
    hide9.style.display = 'block';
    hide10.style.display = 'none';
    hide11.style.top = '-14px';
    hide11.style.display = 'block';
    hide12.style.display = 'none';
    hideQuestionAndSection.style.display = "block";
    document.getElementById('sn').readOnly = false;

    if (selectedValue != "promptuser")
      contents7.style.display = "none";
    else
      contents7.style.display = "block";
  }
  else {
    hide1.style.display = 'none';
    hide2.style.display = 'none';
    hide3.style.display = 'none';
    hide4.style.display = 'none';
    hide5.style.display = 'none';
    hide6.style.display = 'block';
    hide7.style.display = 'block';
    hide8.style.display = 'none';
    hide9.style.display = 'none';
    hide10.style.display = 'block';
    hide11.style.display = 'none';
    hide12.style.display = 'block';
    contents7.style.display = "none";
    document.getElementById('sn').readOnly = true;
    hideQuestionAndSection.style.display = "none";
  }
}

//  ===========calc=====================

function calcShow() {
  const hide1 = document.getElementById("contentS6");
  const hide2 = document.getElementById("catIcon");
  const hide3 = document.getElementById("calcIcon");
  const hide4 = document.getElementById("clipLabel");
  const hide5 = document.getElementById("calcLabel");
  const hide6 = document.getElementById("surveynamesection");
  const hide7 = document.getElementById("headsurvey2");
  const hide8 = document.getElementById("main-section");
  const hide9 = document.getElementById("bckbtn1");
  const hide10 = document.getElementById("calcId");
  const hide11 = document.getElementById("deletesurveysection");
  const hide12 = document.getElementById("calc-container");
  const contents7 = document.getElementById("contentS7");

  const selectTag = document.getElementById('tempUpdate');
  var selectedValue = selectTag.options[selectTag.selectedIndex].value;

  if (hide1.style.display === 'none') {
    hide1.style.display = 'block';
    hide2.style.display = 'block';
    // hide2.style.position='fixed';
    hide3.style.display = 'block';
    hide4.style.display = 'block';
    hide4.style.top = '-17px';
    hide5.style.display = 'block';
    hide5.style.top = '-20px';
    hide6.style.display = 'block';
    hide7.style.display = 'none';
    hide8.style.display = 'block';
    hide9.style.display = 'none';
    hide10.style.display = 'block';
    hide11.style.display = 'block';
    hide12.style.display = 'none';
    if (selectedValue != "promptuser")
      contents7.style.display = "none";
    else
      contents7.style.display = "block";
  }
  else {
    hide1.style.display = 'none';
    hide2.style.display = 'none';
    hide3.style.display = 'none';
    hide4.style.display = 'none';
    hide5.style.display = 'none';
    hide6.style.display = 'none';
    hide7.style.display = 'block';
    hide8.style.display = 'none';
    hide9.style.display = 'block';
    hide10.style.display = 'none';
    hide11.style.display = 'none';
    hide12.style.display = 'block';
    contents7.style.display = "none";
  }
}

//Pop of overview button section
function openPopup() {
  document.getElementById("overwriteContainer").style.display = "block";
  document.getElementById("backdrop").style.display = "block";
}

function closePopup() {
  document.getElementById("overwriteContainer").style.display = "none";
  document.getElementById("backdrop").style.display = "none";
}

    //js to copy content of Intternal Id
    function copyText() {
      // Get the anchor tag
      const link = document.getElementById('myId');
      
      // Create a range object and select the link element
      const range = document.createRange();
      range.selectNode(link);
      
      // Get the link URL from the href attribute
      const linkUrl = link.href;
      
      // Create a temporary input element to hold the link URL
      const tempInput = document.createElement('input');
      tempInput.setAttribute('value', linkUrl);
      document.body.appendChild(tempInput);
      
      // Select the input element and copy its value to the clipboard
      tempInput.select();
      document.execCommand('copy');
      
      // Remove the temporary input element
      document.body.removeChild(tempInput);
    }

     //js to copy Link of that is auto generated
    function copyLink(){
      const link = document.getElementById('myLink');
  
      // Create a range object and select the link element
      const range = document.createRange();
      range.selectNode(link);
      
      // Get the link URL from the href attribute
      const linkUrl = link.href;
      
      // Create a temporary input element to hold the link URL
      const tempInput = document.createElement('input');
      tempInput.setAttribute('value', linkUrl);
      document.body.appendChild(tempInput);
      
      // Select the input element and copy its value to the clipboard
      tempInput.select();
      document.execCommand('copy');
      
      // Remove the temporary input element
      document.body.removeChild(tempInput);
    }

    //overwrite popup screen button enable
    // const dataElement = document.getElementById("surveyName");   
    // const buttonElement = document.getElementById("overwrite");
    // dataElement.addEventListener("click", enableButton);

    // function enableButton() {  
    //     buttonElement.disabled = false; 
    //     }
const sectionsContainer = document.getElementById("sections-container");
const addSectionButton = document.getElementById("add-section");

addSectionButton.addEventListener("click", function () {
  addSection();
});

function addSection() {
  const newSection = document.createElement("div");
  newSection.setAttribute("id", "surveysection1"); 
  newSection.classList.add("surveysection");

  const newHeader = document.createElement("div");
  newHeader.classList.add("section-header");

  const dynamicbtn = document.createElement("button");
  dynamicbtn.setAttribute("id", "dynamicbtn");
  const dynamicbtnicon = document.createElement("i");
  dynamicbtnicon.classList = ("fa fa-angle-up");
  dynamicbtn.innerText = "1";
  dynamicbtn.insertBefore(dynamicbtnicon, dynamicbtn.firstChild);
  newHeader.appendChild(dynamicbtn);

  const newTitle = document.createElement("input");
  newTitle.setAttribute("id", "newTitle");
  newTitle.type = "text";
  newHeader.appendChild(newTitle);

  const newActions = document.createElement("div");
  newActions.classList.add("actions");

  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  const checklabel = document.createElement("label");
  checklabel.setAttribute("id", "checklabel");
  checklabel.innerText = "HIDE";
  newCheckbox.classList.add("hide-checkbox");
  newActions.appendChild(newCheckbox);

  const newDeleteIcon = document.createElement("i");
  newDeleteIcon.setAttribute("id", "deletesection");
  newDeleteIcon.classList.add("delete-icon");
  newDeleteIcon.className = "fa-solid fa-trash-can";
  newDeleteIcon.addEventListener("click", function () {
    deleteSection(newSection);
  });


  // QUESTIONS OF SURVEY IN JS
  const newSection1 = document.createElement("div");
  newSection1.setAttribute("id", "surveysection2");

  const question = document.createElement("button");
  question.setAttribute("id", "question");
  question.innerText = "QUESTION";
  question.style.background="#216c98";
  question.style.color="black";

  //RULES OF SURVEY IN JS
  const rules = document.createElement("button");
  rules.setAttribute("id", "rules");
  rules.innerText = "RULES";
  rules.style.color="black";
  

  rules.addEventListener("click", function () {

    rules.style.background = "#216c98";
    rules.style.color = "white";

    question.style.background="white";
    question.style.color="black";

    newSection3.style.display="block";
    newSection2.style.display="none";
  });

  question.addEventListener("click",function(){
    question.style.background = "#216c98";
    question.style.color = "white";

    rules.style.background="white";
    rules.style.color="black";

    newSection2.style.display="block";
    newSection3.style.display="none";
  });

  // ADD QUSTIONS BTN IN JS

  const newSection2 = document.createElement("div");
  newSection2.setAttribute("id", "surveysection3");

  const addQuestion = document.createElement("button");
  addQuestion.setAttribute("id", "addQuestion");
  const addQIcon = document.createElement("i");
  addQIcon.className = "fa fa-plus";
  addQuestion.innerText = "ADD QUESTION";
  addQuestion.insertBefore(addQIcon, addQuestion.firstChild);

  newActions.appendChild(newDeleteIcon);
  newHeader.appendChild(newActions);

  // ADD Rules BTN in JS
    
  const newSection3 = document.createElement("div");
  newSection3.setAttribute("id", "surveysection4");

  const addRules = document.createElement("button");
  addRules.setAttribute("id", "addRules");
  const addQIcon1 = document.createElement("i");
  addQIcon1.className = "fa fa-plus";
  addRules.innerText = "ADD RULES";
  addRules.insertBefore(addQIcon1, addRules.firstChild);

  newActions.appendChild(newDeleteIcon);
  newHeader.appendChild(newActions);
  // newSection3.appendChild(addRules);

  // ----------------------------------------------

  // const newContent = document.createElement("div");
  // newContent.classList.add("section-content");
  // newContent.innerHTML = "<p>Section content goes here</p>";
  newSection.appendChild(newHeader);
  // newSection.appendChild(newContent);
  newSection.appendChild(checklabel);
  newSection1.appendChild(question);
  newSection1.appendChild(rules);
  newSection2.appendChild(addQuestion);
  newSection.appendChild(newSection1);
  newSection.appendChild(newSection2);
  newSection.appendChild(newSection3);
  newSection3.appendChild(addRules);

  sectionsContainer.appendChild(newSection);
}

function deleteSection(section) {
  sectionsContainer.removeChild(section);
}
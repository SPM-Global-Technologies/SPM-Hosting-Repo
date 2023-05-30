const mainSection = document.querySelector("#main-section");
const addSectionBtn = document.querySelector("#add-section-btn");
const sectionsContainer = document.querySelector("#sections-container");


let sectionCount = 0;
let questionCounts = [];
let idCounter = 0;
let addQuestionIncrement = 0;
let addRuleIncrement = 0;

const lengthsec = document.getElementById('lengthsection').value;
if (lengthsec != undefined) {
  if (lengthsec > 0) {
    sectionCount = parseInt(lengthsec);
    idCounter = sectionCount;
  }
}

function updateSectionNumbers() {
  const sections = sectionsContainer.querySelectorAll(".section");
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    section.querySelector("h3").innerHTML = `${i + 1}`;
  }
}

function updateQuestionNumbers(questionsContainer, sectionIndex) {
  const questions = questionsContainer.querySelectorAll(".question");
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    question.querySelector("span").innerText = `${sectionIndex + 1}.${i + 1}`;
  }
}

addSectionBtn.addEventListener("click", () => {
  event.preventDefault();
  sectionCount++;
  if (!questionCounts[sectionCount - 1]) {
    questionCounts[sectionCount - 1] = 0;
  }

  const newSection = document.createElement("div");
  newSection.classList.add("section");

  var total_sections = document.getElementById('total_sections').value
  total_sections = parseInt(total_sections) + 1;
  document.getElementById('total_sections').value = total_sections;

  const newSectionDiv = document.createElement("div");
  newSectionDiv.classList.add("sectionDiv");
  const sectionIcon = document.createElement("p");
  sectionIcon.id = "sectionIcon";
  sectionIcon.innerHTML = `<i class = "fa fa-angle-up"></i>`;
  const sectionTitle = document.createElement("h3");
  sectionTitle.setAttribute("id", "section-number");
  sectionTitle.innerHTML = `${sectionCount}`;
  const questionsContainer = document.createElement("div");
  questionsContainer.classList.add("questions-container");
  newSectionDiv.innerHTML = `<input type="hidden" name="sectioncount[${sectionCount}]" id="inputHiddenSection_${sectionCount}" value="${sectionCount}"/>`

  // Add input field, checkbox, and delete icon to section
  const inputField = document.createElement("input");
  inputField.setAttribute("id", "inputField");
  inputField.setAttribute("name", "sectiontitle[" + sectionCount + "]");
  inputField.type = "text";
  inputField.placeholder = "Enter section title";


  const requiredCheckbox = document.createElement("label");
  requiredCheckbox.innerHTML = `
    <input type="checkbox" name="sectionhide[${sectionCount}]" />
    <span>Hide</span>
  `;


  const deleteIcon = document.createElement("button");
  deleteIcon.classList.add("deletesection");
  deleteIcon.setAttribute("type", "button");
  deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';



  let isDeleteIconHighlighted = false;



  deleteIcon.addEventListener("click", () => {
    if (!isDeleteIconHighlighted) {
      deleteIcon.classList.add("highlight");
      isDeleteIconHighlighted = true;
    } else {
      const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, newSection);
      newSection.remove();
      questionCounts.splice(sectionIndex, 1);
      updateSectionNumbers();
      for (let i = sectionIndex; i < sectionsContainer.children.length; i++) {
        const section = sectionsContainer.children[i];
        const questionsContainer = section.querySelector(".questions-container");
        updateQuestionNumbers(questionsContainer, i);
      }
      sectionCount--;
    }
  });




  deleteIcon.addEventListener("dblclick", () => {
    const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, newSection);
    newSection.remove();
    questionCounts.splice(sectionIndex, 1);
  });

  document.addEventListener("click", (event) => {
    if (!deleteIcon.contains(event.target)) {
      deleteIcon.classList.remove("highlight");
      isDeleteIconHighlighted = false;
    }
  });

  // ------------------------Move Up And Move Down--------------------------------

  const sectionUpBtn = document.createElement("span");
  sectionUpBtn.setAttribute("id", "section-up-btn");
  // sectionUpBtn.className = "fa-solid fa-arrow-up";
  sectionUpBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  sectionUpBtn.addEventListener("click", () => {
    const prevSection = newSection.previousSibling;
    if (prevSection) {
      sectionsContainer.insertBefore(newSection, prevSection);
      updateSectionNumbers();
      updateQuestionNumbers();
      inputField.setAttribute("name", "sectiontitle[" + (sectionCount - 1) + "]");
  
      const inputHidden = document.getElementById('inputHiddenSection_'+sectionCount);
      inputHidden.setAttribute("name", "sectioncount[" + (sectionCount - 1) + "]");
      inputHidden.setAttribute("id", "inputHiddenSection_" + (sectionCount - 1));
      sectionCount--;
      const nextInputField = prevSection.querySelector("#inputField");
      if (nextInputField) {
        nextInputField.setAttribute("name", "sectiontitle[" + (sectionCount + 1) + "]");
        inputHidden.setAttribute("name", "sectioncount[" + (sectionCount + 1) + "]");
        inputHidden.setAttribute("id", "inputHiddenSection_" + (sectionCount + 1));
      }
    }
  });

  const sectionDownBtn = document.createElement("span");
  sectionDownBtn.setAttribute("id", "section-down-btn");
  sectionDownBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
  sectionDownBtn.addEventListener("click", () => {
    const nextSection = newSection.nextSibling;
    if (nextSection) {
      sectionsContainer.insertBefore(nextSection, newSection);
      updateSectionNumbers();
      updateQuestionNumbers();
      inputField.setAttribute("name", "sectiontitle[" + (sectionCount + 1) + "]");
      const inputHidden = document.getElementById('inputHiddenSection_'+sectionCount);
      inputHidden.setAttribute("name", "sectioncount[" + (sectionCount - 1) + "]");
      inputHidden.setAttribute("id", "inputHiddenSection_" + (sectionCount - 1));
      sectionCount++;
      const nextInputField = nextSection.querySelector("#inputField");
      if (nextInputField) {
        nextInputField.setAttribute("name", "sectiontitle[" + (sectionCount - 1) + "]");
        inputHidden.setAttribute("name", "sectioncount[" + (sectionCount - 1) + "]");
        inputHidden.setAttribute("id", "inputHiddenSection_" + (sectionCount - 1));
      }
    }
  });


  function updateSectionNumbers() {
    const sections = sectionsContainer.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      section.querySelector("h3").innerHTML = `${i + 1}`;
    }

  }

  function updateQuestionNumbers() {
    const sections = sectionsContainer.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const questionsContainer = section.querySelector(".questions-container");
      const questions = questionsContainer.querySelectorAll(".question");
      for (let j = 0; j < questions.length; j++) {
        const question = questions[j];
        question.querySelector("span").innerText = `${i + 1}.${j + 1}`;
      }
    }

  }

  updateSectionNumbers();
  updateQuestionNumbers();

  // -----------------------------------------------


  newSectionDiv.appendChild(sectionIcon);
  newSectionDiv.appendChild(sectionTitle);
  newSectionDiv.appendChild(inputField);
  newSectionDiv.appendChild(sectionUpBtn);
  newSectionDiv.appendChild(sectionDownBtn);
  newSectionDiv.appendChild(requiredCheckbox);
  newSectionDiv.appendChild(deleteIcon);
  // newSectionDiv.appendChild(sectionTitle);
  newSection.appendChild(newSectionDiv);
  sectionsContainer.appendChild(newSection);

  idCounter++;
  const questionRule = document.createElement("div");
  const elementId = `questionRule${idCounter}`;
  questionRule.id = elementId;


  const qbtn = document.createElement("div");
  qbtn.setAttribute("id", "qbtn");

  const questionBtn = document.createElement("button");
  questionBtn.setAttribute("id", "question");
  questionBtn.setAttribute("type", "button");

  questionBtn.innerText = "QUESTION";
  questionBtn.style.background = "#216c98";
  questionBtn.style.color = "white";

  const ruleBtn = document.createElement("button");
  ruleBtn.setAttribute("id", "rule");
  ruleBtn.setAttribute("type", "button");

  ruleBtn.innerText = "RULES";
  ruleBtn.innerText = "RULES";
  ruleBtn.style.color = "black";

  // js for toggle questions and rules
  // const rules = document.getElementById('rule');
  // const qtn = document.getElementById('question');

  questionBtn.addEventListener("click", function () {
    questionBtn.style.background = "#216c98";
    questionBtn.style.color = "white";

    ruleBtn.style.background = "white";
    ruleBtn.style.color = "black";

    addQuestionBtn.style.display = "block";
    addRuleBtn.style.display = "none";
    newRuleDiv.style.display = "none";
    questionsContainer.style.display = "block";
  });

  ruleBtn.addEventListener("click", function () {
    ruleBtn.style.background = "#216c98";
    ruleBtn.style.color = "white";


    questionBtn.style.background = "white";
    questionBtn.style.color = "black";


    addRuleBtn.style.display = "block";
    newRuleDiv.style.display = "block";
    addQuestionBtn.style.display = "none";
    questionsContainer.style.display = "none";

  })

  addQuestionIncrement++;
  const addQuestionBtn = document.createElement("button");
  addQuestionBtn.setAttribute("class", "addQuestion");
  addQuestionBtn.setAttribute("type", "button");

  const addQuestionId = `addQuestion${addQuestionIncrement}`;
  addQuestionBtn.id = addQuestionId;
  addQuestionBtn.innerText = "+ADD QUESTION";

  addRuleIncrement++;
  const addRuleBtn = document.createElement("button");
  addRuleBtn.setAttribute("class", "addRule");
  addRuleBtn.setAttribute("type", "button");

  const addRuleId = `addRule${addRuleIncrement}`;
  addRuleBtn.id = addRuleId;
  addRuleBtn.innerText = "+ADD RULE";


  const newRuleDiv = document.createElement("div");
  newRuleDiv.className = "ruleDiv";
  
  // ....................Rule Start......................................................................


  addRuleBtn.addEventListener("click", () => {


    const newRule = document.createElement("div");
    newRule.className = "rule";
    newRule.innerHTML = `
    <div class="rule-content" >
    <div id="startrule">
      <button class="angleupbtn" type="button"><i class="fa fa-angle-up"></i></button>
      <div class="rule-name">Rule</div>
      <input class="rule-input" type="text">
      <button class="moveupbtn123">MOVE UP</i></button>
      <button class="angledownbtn">MOVE DOWN</i></button>
      <button class="copy-rule-btn"><i class="fa fa-clone"></i></button>
      <button class="delete-rule-btn"><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
  
  `;





    // ===================================MOVE UP BUTTON================================
    // Add event listener to the new move up button

    const moveUpBtn = newRule.querySelector(".moveupbtn123");

    moveUpBtn.addEventListener("click", () => {
      const currentRuleInput = newRule.querySelector(".rule-input");
      const previousRule = newRule.previousElementSibling;

      if (previousRule && previousRule.classList.contains("rule")) {
        const previousRuleInput = previousRule.querySelector(".rule-input");
        const currentContent = currentRuleInput.value;
        const previousContent = previousRuleInput.value;

        previousRuleInput.value = currentContent;
        currentRuleInput.value = previousContent;
      }
    });

    // =========================================================================================================

    moveUpBtn.addEventListener("mouseover", () => {

      newRule.classList.add("show-move-up");

    });




    moveUpBtn.addEventListener("mouseout", () => {

      newRule.classList.remove("show-move-up");

    });

    // Add event listener to the new move down button
    const moveDownBtn = newRule.querySelector(".angledownbtn")

    moveDownBtn.addEventListener("click", () => {
      const ruleIndex = Array.from(newSection.querySelectorAll(".rule")).indexOf(newRule);

      if (ruleIndex < newSection.querySelectorAll(".rule").length - 1) {
        const currentRuleInput = newRule.querySelector(".rule-input");
        const nextRule = newSection.querySelectorAll(".rule")[ruleIndex + 1];
        const nextRuleInput = nextRule.querySelector(".rule-input");

        const currentContent = currentRuleInput.value;
        const nextContent = nextRuleInput.value;

        currentRuleInput.value = nextContent;
        nextRuleInput.value = currentContent;

        updateRuleNumbering(newSection);
      }
    });
    // =========================MOVE DOWN BUTTON===================================================================================

    moveDownBtn.addEventListener("mouseover", () => {

      newRule.classList.add("show-move-down");

    });




    moveDownBtn.addEventListener("mouseout", () => {

      newRule.classList.remove("show-move-down");

    });

    // DELETE HOVER FUNCTIONALITY WORKING CORRECTLY------------------------------------------------------------------------------------------------------

    const deleteRuleBtn = newRule.querySelector(".delete-rule-btn");

    let isDeleteIconHighlighted = false;

    // Add click event listener to delete rule button

    deleteRuleBtn.addEventListener("click", () => {

      if (!isDeleteIconHighlighted) {

        deleteRuleBtn.classList.add("highlight-red");

        isDeleteIconHighlighted = true;

      } else {

        newRule.remove(); // remove rule element

        updateRuleNumbering(newSection); // update numbering for the section

        isDeleteIconHighlighted = false;

      }

    });




    // Add double click event listener to delete rule button

    deleteRuleBtn.addEventListener("dblclick", () => {

      newRule.remove(); // remove rule element

      updateRuleNumbering(newSection); // update numbering for the section

    });







    // Add a hover effect to the delete icon
    deleteRuleBtn.addEventListener("mouseover", () => {
      deleteRuleBtn.style.color = "red";
    });






    // deleteRuleBtn.addEventListener("mouseout", () => {

    //   deleteRuleBtn.style.color = "black";

    // });


    // Add event listener to the new copy rule button
    const copyRuleBtn = newRule.querySelector(".copy-rule-btn");
    copyRuleBtn.addEventListener("click", () => {
      const ruleInput = newRule.querySelector(".rule-input");
      ruleInput.select();
      document.execCommand("copy");

    });

    const angleUpBtn = newRule.querySelector(".angleupbtn");
    angleUpBtn.addEventListener("click", () => {
      const condition = newRule.querySelector(".condition");
      if (!condition) {
        const newCondition = document.createElement("div");
        newCondition.className = "condition";
        const section = angleUpBtn.closest(".section");
        const sectionNumber = Array.from(section.parentElement.children).indexOf(section) + 1;

        const rule = angleUpBtn.closest(".rule");
        const ruleNumber = Array.from(section.querySelectorAll(".rule")).indexOf(rule) + 1;

        const conditions = rule.querySelectorAll(".conditionname");
        const conditionNumber = conditions.length + 1;
        newCondition.innerHTML = `
          <div class="conditions">
            <button type="button" class="conditionbtn"><i class="fa fa-angle-up"></i></button>
            <div class="conditionname">Condition ${sectionNumber}.${ruleNumber}</div>
            <input class="conditioninput" type="text" placeholder="Enter condition text" readonly>
          </div>
          <div class="inputs" style="display: none;">
            <div class="dropdown dropdisplayblock">
              <div class="droppbtn"></div>
              <input class="listinput" type="text" placeholder="text" value="Always" readonly>
              <label class="word">Condition</label>
              <div class="dropdown-contentt" >
                <ul class="list">
                  <li class="when">When</li>
                  <li class="always">Always</li>
                  <li class="complex">Complex</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="when-fields" style="display:none;" read only>
          <div class="whengrid">
            <div class="when-field" read only >
              <input id="questvalue" Placeholder="Answer To Question">
              <label id="questval1" read only>QUESTION OR VALUE</label>

              <ul class="whenlist" style="display:none;">
                <li id="item1">Item 1</li>
                <li id="item1">Item 2</li>
                <li id="item1">Item 3</li>
              </ul>
            </div>
            <div class="whenfieldoperator">
              <input  id="operator" placeholder="Operator">
              <label id="oper1">OPERATOR</label>
              
            <ul class="operatorlist" style="display:none;">
            <li id="item2"><</li>
            <li id="item2"><=</li>
            <li id="item2">></li>
            <li id="item2">>=</li>
            <li id="item2">BETWEEN</li>
            <li id="item2">CHANGED</li>
            <li id="item2">CONTAIN</li>
            <li id="item2">EMPTY</li>
            <li id="item2">EQUAL</li>
            <li id="item2">NOT CONTAIN</li>
            <li id="item2">NOT EMPTY</li>
            <li id="item2">NOT EQUAL</li>
            </ul>
            </div>
            <div>
              <input id="value" placeholder="Value">
              <i class="fa-solid fa-pencil" id="whenpencilicon"></i>
            </div>
          </div>
          </div>


        <div class="complex-fields" style="display:none">
          <div class="complexgrid">
            <div class="complex-field1">
              <input id="compquestvalue" placeholder="Answer To Question">
              <label id="compquestlabel">QUESTION OR VALUE</label>
              <ul class="complexlist" style="display:none;">
                <li id="compitem1">Item 4</li>
                <li id="compitem1">Item 5</li>
                <li id="compitem1">Item 6</li>
              </ul>
            </div>

            <div class="complex-field2">
              <input  id="compoperator" placeholder="operations">   
       
              <label id="compoper">OPERATOR</label>
                <ul class="compoperatorlist" style="display:none;">        
                  <li id="compitem2"><</li>
                  <li id="compitem2"><=</li>
                  <li id="compitem2">></li>
                  <li id="compitem2">>=</li>
                  <li id="compitem2">BETWEEN</li>
                  <li id="compitem2">CHANGED</li>
                  <li id="compitem2">CONTAIN</li>
                  <li id="compitem2">EMPTY</li>
                  <li id="compitem2">EQUAL</li>
                  <li id="compitem2">NOT CONTAIN</li>
                  <li id="compitem2">NOT EMPTY</li>
                  <li id="compitem2">NOT EQUAL</li>
                </ul>
            </div>

          <div class="complex-field3">
            <input id="compvalue">
            <label id="compval">VALUE</label>
          <i class="fa-solid fa-pencil" id="comppencilicon"></i>
            </div>
          </div>
            <div id="addexp" style="display:block;" >
            <input type="button" id="addExpression" value="ADD EXPRESSION" style="color:#216c98;">
            </div>
          
            <div id="container" class="container">
             <button id="addGroup"  type="button" class="add-group">ADD GROUP</button>
             <input type="button" id="addgroupexpression" value="ADD EXPRESSION"   style="display:none;" style="color:#216c98;">
            </div>
          </div>
        </div>
      


        
        <div class="actionsdiv">
        <button class="addactionbtn" type="button" id="actionbtn">+ ADD ACTION</button>
        <div class="actionscontainer""></div>
        </div>
      `;
        const actionsDiv = newCondition.querySelector(".actionsdiv")
        const addActionBtn = newCondition.querySelector(".addactionbtn");
        const actionsContainer = newCondition.querySelector(".actionscontainer");
        const actionName = newCondition.querySelector(".actionname");
        let actionCount = 1;

        addActionBtn.addEventListener("click", () => {
          const newActionDiv = document.createElement("div");
          newActionDiv.className = "action";
          newActionDiv.innerHTML = `
            <div class="actionhead">
              <button type="button" class="actionupbtn"><i class="fa fa-angle-up"></i></button>
              <label class="actionname">Action ${sectionNumber}.${ruleNumber}.${actionCount} </label>
              <input class="actiontext" type="text" name="action"  ${sectionNumber}.${ruleNumber}.${actionCount}" readonly></input>
            </div>
          `;
          // create a new input element
          const newInput = document.createElement("div");
          newInput.className = "actionbody";
          newInput.style.display = "none";
          newInput.innerHTML = `
          <div class="actiondown">
            <input class="actioninput" type="text" readonly  >
            <label id="actionlabel">ACTION </label>
          <div class="sectioninput" style="display: none">
            <input class="actioninput3" type="text" style="display:grid;">
            <label class="sectionlabel">SECTION</label>
            <label class="itemlabel"></label>
            <button  type="button" class="deleteinputbtn2"><i class="far fa-trash-alt"></i></button>
            <button  type="button" class ="showsectiontoggle">&#9660;</button>
            <ul class="sectionlist" style="display:none;">
            <li class="showsectionlist">item1</li>
            <li class="showsectionlist">item2</li>
            <li class="showsectionlist">item3</li>
            <li class="showsectionlist">item4</li>
            </ul>
          </div>
          <div class="questioninput" style="display: none">
          <input class="actioninput4" type="text" style="display: grid;">
          <label class="questionlabel">QUESTION</label>
          <label class="itemlabel1"></label>
          <button  type="button" class="deleteinputbtn3"><i class="far fa-trash-alt"></i></button>
          <button  type="button" class ="showquestiontoggle">&#9660;</button>
          <ul class="questionlist" style="display:none;">
          <li class="showquestionlist">item1</li>
          <li class="showquestionlist">item2</li>
          <li class="showquestionlist">item3</li>
          <li class="showquestionlist">item4</li>
          </ul>
          </div>
          <div class="hidesectioninput" style="display: none">
          <input class="actioninput5" type="text" style="display: grid;">
          <label class="hidesectionlabel">HIDE SECTION</label>
          <label class="itemlabel2"></label>
          <button  type="button" class="deleteinputbtn4"><i class="far fa-trash-alt"></i></button>
          <button  type="button" class ="showhidetoggle">&#9660;</button>
          <ul class="hidesectionlist" style="display:none;">
          <li class="hidesectionitems">item1</li>
          <li class="hidesectionitems">item2</li>
          <li class="hidesectionitems">item3</li>
          <li class="hidesectionitems">item4</li>
          </ul>
          </div>
          <div class="hidequestioninput" style="display: none">
          <input class="actioninput6" type="text" style="display: grid;">
          <label class="hidequestionlabel">HIDE QUESTION</label>
          <label class="itemlabel3"></label>
          <button  type="button" class="deleteinputbtn5"><i class="far fa-trash-alt"></i></button>
          <button  type="button" class ="showhideqstntoggle">&#9660;</button>
          <ul class="hidequestionlist" style="display:none;">
          <li class="hidequestionitems">item1</li>
          <li class="hidequestionitems">item2</li>
          <li class="hidequestionitems">item3</li>
          <li class="hidequestionitems">item4</li>
          </ul>
          </div>
            <input class="actioninput2" type= "text" >
            <button type="button" class="deleteinputbtn"><i class="far fa-trash-alt"></i></button>
            <button type="button" id="toggle-btn0" class="toggle-btn0" style="top:-166px; left:256px;">&#9660;</button>
            <ul class="actionlist" style="display: none;">
            <li class="item4" id="ss">SHOW SECTION</li>
            <li class="item4" id="sq">SHOW QUESTION</li>
            <li class="item4"  id="hs">HIDE SECTION</li>
            <li class="item4"  id="hq">HIDE QUESTION</li>
            </ul>
          </div>
          `;

          //**************************************** */ action start*************************************************************


          // add a click event listener to the "actionupbtn" button
          const actionUpBtn = newActionDiv.querySelector(".actionupbtn");
          actionUpBtn.addEventListener("click", () => {
            newInput.style.display = newInput.style.display === "none" ? "block" : "none";

            // class="actioninput2" next to class="actioninput" input field
            if (newInput.style.display === "block") {
              const actionInput2 = document.createElement("actioninput2");
              newInput.appendChild(actionInput2);
              actionUpBtn.querySelector("i").classList.remove("fa-angle-up");
              actionUpBtn.querySelector("i").classList.add("fa-angle-down");

            } else {
              const actionInput2 = newInput.querySelector(".actioninput2");
              if (actionInput2) {
                newInput.style.display === "none"
                actionUpBtn.querySelector("i").classList.add("fa-angle-up");
                actionUpBtn.querySelector("i").classList.remove("fa-angle-down");

              }
            }
          });




          // --------DELETE ACTION INPUT-----
          // action class="actioninput" delete 


          // add event listener to delete input content
          const deleteInputBtn = newInput.querySelector(".deleteinputbtn");
          const actionInput2 = newInput.querySelector(".actioninput2");

          // initialize click counter
          let clickCount = 0;

          // add event listener to delete input content
          deleteInputBtn.addEventListener("click", () => {
            clickCount++;
            if (clickCount === 1) {
              // first click, change background color
              deleteInputBtn.style.backgroundColor = "red";
              deleteInputBtn.style.color = "white";
            } else if (clickCount === 2) {
              // second click, perform delete action
              actionInput.value = "";
              if (actionInput2) {
                actionInput2.value = "";
              }
              newInput.style.display = "none";

              // button click counter and remove red background color
              clickCount = 0;
              deleteInputBtn.style.backgroundColor = "";
              deleteInputBtn.style.color = "";
            }
          });

          // hide actioninput2 initially
          if (actionInput2) {
            actionInput2.style.display = "none";
          }

          // add event listener to toggle display of actioninput2
          actionUpBtn.addEventListener("click", () => {
            if (actionInput2) {
              actionInput2.style.display = "block";
              deleteInputBtn.style.display = "block";
              actionInput2.value = "";
              toggleBtn.style.display="none";
            }
          });







          // DISPLAYING THE  action input 
          const actionInput = newInput.querySelector(".actioninput");
          const actionList = newInput.querySelector(".actionlist");
          const toggleBtn = newInput.querySelector(".toggle-btn0")
          actionInput.addEventListener("click", () => {
            actionList.style.display = actionList.style.display === "none" ? "block" : "none";
            toggleBtn.innerHTML = actionList.style.display === "none" ? "&#9660;" : "&#9650;";
            toggleBtn.style.display="none";
            toggleBtn.style.top = "-163px"
            toggleBtn.style.left = "256px"
          });
          actionInput.addEventListener("click", () => {
            actionList.style.display = actionList.style.display === "none" ? "block" : "none";
            toggleBtn.innerHTML = actionList.style.display === "none" ? "&#9660;" : "&#9650;";
            toggleBtn.style.display="none";


            // toggleBtn.style.top="53px"
            // toggleBtn.style.left="-108px"

          });

          // list values displaying on actiontext next action

          const listItems = newInput.querySelectorAll(".item4");
          listItems.forEach((item) => {
            item.addEventListener("click", () => {
              // Update value of input field
              const selectedValue = item.textContent;
              const inputField = newActionDiv.querySelector(".actiontext");
              inputField.value = selectedValue;
            });
          });



          // ----------TO DISPLAY THE SELCTING OPTIONS OF ACTION LIST ON ACTION----------------------------

          actionList.addEventListener("click", (event) => {
            const listItem = event.target.closest("li");
            if (listItem) {
              const selectedListItem = actionList.querySelector("li.selected");


              if (selectedListItem) {
                selectedListItem.classList.remove("selected");
              }
              listItem.classList.add("selected");
              actionInput.value = listItem.textContent;
              actionList.style.display = "none";
              // Set the value of the action name label to the selected list item
              actionInput.textContent = listItem.textContent;
              // Hide the actioninput2 and deleteinputbtn elements when a list item is selected
              const actionInput2 = newInput.querySelector(".actioninput2");
              const deleteInputBtn = newInput.querySelector(".deleteinputbtn");
              actionInput2.style.display = "none";
              deleteInputBtn.style.display = "none";

            }
          });

          // to displayy the action list 
          actionInput.addEventListener("click", () => {
            actionList.style.display = actionList.style.display === "none" ? "block" : "none";
            // Hide the actioninput2 and deleteinputbtn elements when the actionList is displayed
            if (actionList.style.display === "block") {
              const actionInput2 = newInput.querySelector(".actioninput2");
              const deleteInputBtn = newInput.querySelector(".deleteinputbtn");
              actionInput2.style.display = "none";
              deleteInputBtn.style.display = "none";
              // Hide the deleteinputbtn element if the ss list item is selected
              const ssListItem = actionList.querySelector("#ss");
              const actionInput3 = newInput.querySelector(".actioninput3")
              if (ssListItem && ssListItem.classList.contains("selected")) {
                actionInput2.style.display = "none";
                deleteInputBtn.style.display = "none";

              }
            }

          });


          // Show placeholder when clicked outside of input and list
          window.addEventListener("click", (event) => {
            if (!actionInput.contains(event.target) && !actionList.contains(event.target)) {
              actionList.style.display = "none";
            }
          });
          // --------------------------------------------------------------------  




          // Add event listener for "SHOW SECTION" li element
          const showSectionLi = newInput.querySelector("#ss");
          showSectionLi.addEventListener("click", function () {
            const actionInput2 = newInput.querySelector(".actioninput2");
            const deleteBtn = newInput.querySelector(".deleteinputbtn")

            const sectionInput = newInput.querySelector(".sectioninput");
            const actionInput3 = newInput.querySelector(".actioninput3");
            const deleteBtn2 = newInput.querySelector(".deleteinputbtn2");
            // const actionLabel = newInput.querySelector(".actionlabel2");

            const questionInput = newInput.querySelector(".questioninput");
            const actionInput4 = newInput.querySelector(".actioninput4");
            const deleteBtn3 = newInput.querySelector(".deleteinputbtn3");

            const hideSectionInput = newInput.querySelector(".hidesectioninput");
            const actionInput5 = newInput.querySelector(".actioninput5")
            const deleteBtn4 = newInput.querySelector(".deleteinputbtn4");

            const hideQuestionInput = newInput.querySelector(".hidequestioninput");
            const actionInput6 = newInput.querySelector(".actioninput6")
            const deleteBtn5 = newInput.querySelector(".deleteinputbtn5")


            // Display the section input field and delete icon
            sectionInput.style.display = "block";
            actionInput3.style.display = "block";
            deleteBtn2.style.display = "block";
            sectionLabel.style.display = "block";
            showSectionToggle.style.display = "block";




            actionInput2.style.display = "none";
            deleteBtn.style.display = "none";

            questionInput.style.display = "none";
            actionInput4.style.display = "none";
            deleteBtn3.style.display = "none";

            hideSectionInput.style.display = "none";
            actionInput5.style.display = "none";
            deleteBtn4.style.display = "none";


            hideQuestionInput.style.display = "none";
            actionInput6.style.display = "none";
            deleteBtn5.style.display = "none";


            // actionList.style.top="-20px";
            toggleBtn.style.display = "block";
            toggleBtn.style.top = "-43px"
            toggleBtn.style.left = "256px"

          });








          // show section list

          const actionInput3 = newInput.querySelector(".actioninput3");
          const sectionList = newInput.querySelector(".sectionlist");
          const showSectionToggle = newInput.querySelector(".showsectiontoggle");
          const showhidetoggle = newInput.querySelector(".showhidetoggle");
          const showhideqstntoggle = newInput.querySelector(".showhideqstntoggle");
          actionInput3.addEventListener("click", () => {
            sectionList.style.display = sectionList.style.display === "none" ? "block" : "none";
            showSectionToggle.innerHTML = sectionList.style.display === "none" ? "&#9660;" : "&#9650;";
            showhidetoggle.innerHTML = sectionList.style.display === "none" ? "&#9660;" : "&#9650;";
            showhideqstntoggle.innerHTML = sectionList.style.display === "none" ? "&#9660;" : "&#9650;";
            // showSectionToggle.style.top="-43px"
            // showSectionToggle.style.left="256px"
            // // toggleBtn.style.top="-43px"
            // // toggleBtn.style.left="256px"

          })



          // delete show section

          // Add event listener for the second delete button
          const deleteBtn2 = newInput.querySelector(".deleteinputbtn2");
          const sectionLabel = newInput.querySelector(".sectionlabel")
          // const actionInput3 = newInput.querySelector(".actioninput3");

          let click2Count = 0;

          deleteBtn2.addEventListener("click", function () {
            // Hide the section input field and delete icon
            click2Count++;
            if (click2Count === 1) {
              // first click, change background color
              deleteBtn2.style.backgroundColor = "red";
              deleteBtn2.style.color = "white";
            } else if (click2Count === 2) {
              // second click, perform delete action
              actionInput.value = "";

              if (actionInput3) {
                actionInput3.value = "";

                // do something with actionInput2
              }
              newInput.style.display = "none";
              // button click counter and remove red background color
              click2Count = 0;
              deleteBtn2.style.backgroundColor = "";
              deleteBtn2.style.color = "";
            }
          });

          // hide actioninput 3 initally

          if (actionInput3) {
            actionInput3.style.display = "none";
            deleteBtn2.style.display = "none";
          }

          // add event listener to toggle display of actioninput3

          actionUpBtn.addEventListener("click", () => {
            if (actionInput3) {
              actionInput3.style.display = "none";
              deleteBtn2.style.display = "none";
              sectionLabel.style.display = "none";
              showSectionToggle.style.display = "none";
              actionInput2.style.display = "block";
              deleteInputBtn.style.display = "block";
              actionInput2.value = "";
            }
          });






          // Add search functionality to actioninput3
          actionInput3.addEventListener("input", function () {
            const filter = actionInput3.value.toUpperCase();
            const sectionList = newInput.querySelector(".sectionlist");
            const sectionlistItems = sectionList.querySelectorAll("li");
            sectionlistItems.forEach(function (item) {
              const text = item.textContent.toUpperCase();
              if (text.indexOf(filter) > -1) {
                item.style.display = "";
              } else {
                item.style.display = "none";
              }
            });
          });







          //  for displaying the selected list value in input 

          const sectionlistItems = newInput.querySelectorAll(".sectionlist li");
          sectionlistItems.forEach(function (item) {
            item.addEventListener("click", function () {
              const actionInput3 = newInput.querySelector(".actioninput3");
              actionInput3.value = item.textContent;
              const sectionList = newInput.querySelector(".sectionlist");
              sectionList.style.display = "none";
            });
          });



          actionInput3.addEventListener("keydown", (event) => {
            const sectionList = newInput.querySelector(".sectionlist");
            if (event.keyCode === 13) {
              const visibleItem = sectionList.querySelector("li:not([style*='display: none'])");
              if (visibleItem) {

                actionInput3.value = visibleItem.textContent;
                sectionList.style.display = "none";
              }
            }
          });



          // Show placeholder when clicked outside of input and list
          window.addEventListener("click", (event) => {
            if (!actionInput3.contains(event.target) && !sectionList.contains(event.target)) {
              sectionList.style.display = "none";
            }
          });




          // --------------------------------------------------------------------

          // Add event listener for "SHOW Question" li element
          const showQuestionLi = newInput.querySelector("#sq");
          showQuestionLi.addEventListener("click", function () {
            const actionInput2 = newInput.querySelector(".actioninput2");
            const deleteBtn = newInput.querySelector(".deleteinputbtn")

            const sectionInput = newInput.querySelector(".sectioninput");
            const actionInput3 = newInput.querySelector(".actioninput3");
            const deleteBtn2 = newInput.querySelector(".deleteinputbtn2");
            const actionLabel = newInput.querySelector(".actionlabel");

            const questionInput = newInput.querySelector(".questioninput");
            const actionInput4 = newInput.querySelector(".actioninput4");
            const deleteBtn3 = newInput.querySelector(".deleteinputbtn3");

            const hideSectionInput = newInput.querySelector(".hidesectioninput");
            const actionInput5 = newInput.querySelector(".actioninput5")
            const deleteBtn4 = newInput.querySelector(".deleteinputbtn4");

            const hideQuestionInput = newInput.querySelector(".hidequestioninput");
            const actionInput6 = newInput.querySelector(".actioninput6")
            const deleteBtn5 = newInput.querySelector(".deleteinputbtn5")






            // Display the section input field and delete icon    const actionInput2 = newInput.querySelector(".actioninput2");

            questionInput.style.display = "block";
            actionInput4.style.display = "block";
            deleteBtn3.style.display = "block";
            questionLabel.style.display = "block";
            showQuestionToggle.style.display = "block";


            actionInput2.style.display = "none";
            deleteBtn.style.display = "none";

            sectionInput.style.display = "none";
            actionInput3.style.display = "none";
            deleteBtn2.style.display = "none";


            hideSectionInput.style.display = "none";
            actionInput5.style.display = "none";
            deleteBtn4.style.display = "none";



            hideQuestionInput.style.display = "none";
            actionInput6.style.display = "none";
            deleteBtn5.style.display = "none";

            actionLabel.style.display = "block";

            toggleBtn.style.display = "block";
            toggleBtn.style.top = "-43px"
            toggleBtn.style.left = "256px"


          });





          // // show question DELETE

          // Add event listener for the third delete button
          const deleteBtn3 = newInput.querySelector(".deleteinputbtn3");
          const questionLabel = newInput.querySelector(".questionlabel")

          let click3Count = 0;

          deleteBtn3.addEventListener("click", function () {
            // Hide the section input field and delete icon
            click3Count++;
            if (click3Count === 1) {
              // first click, change background color
              deleteBtn3.style.backgroundColor = "red";
              deleteBtn3.style.color = "white";
            } else if (click3Count === 2) {
              // second click, perform delete action
              actionInput.value = "";
              const actionInput4 = newInput.querySelector(".actioninput4");

              if (actionInput4) {
                actionInput4.value = "";
                // do something with actionInput2
              }
              newInput.style.display = "none";
              // button click counter and remove red background color
              click3Count = 0;
              deleteBtn3.style.backgroundColor = "";
              deleteBtn3.style.color = "";
            }
          });
          // // hide actioninput2 initially
          // if (actionInput4) {
          //   actionInput4.style.display = "none";
          // }

          // add event listener to toggle display of actioninput2
          actionUpBtn.addEventListener("click", () => {
            if (actionInput4) {
              actionInput4.style.display = "none";
              deleteBtn3.style.display = "none";
              questionLabel.style.display = "none";
              showQuestionToggle.style.display = "none";
              actionInput2.style.display = "block";
              deleteInputBtn.style.display = "block";
              actionInput2.value = "";
            }
          });



          // for showing question list
          const actionInput4 = newInput.querySelector(".actioninput4");
          const questionList = newInput.querySelector(".questionlist");
          const showQuestionToggle = newInput.querySelector(".showquestiontoggle");
          actionInput4.addEventListener("click", () => {
            questionList.style.display = questionList.style.display === "none" ? "block" : "none";
            showQuestionToggle = questionList.style.display === "none" ? "&#9660;" : "&#9650;";
          })




          //  for displaying the selected list value in input4

          const questionlistItems = newInput.querySelectorAll(".questionlist li");
          questionlistItems.forEach(function (item) {
            item.addEventListener("click", function () {
              const actionInput4 = newInput.querySelector(".actioninput4");
              actionInput4.value = item.textContent;
              const questionList = newInput.querySelector(".questionlist");
              questionList.style.display = "none";
            });
          });





          // // Add search functionality to actioninput4
          actionInput4.addEventListener("input", function () {
            const filter = actionInput4.value.toUpperCase();
            const questionList = newInput.querySelector(".questionlist");
            const questionlistItems = questionList.querySelectorAll("li");
            questionlistItems.forEach(function (item) {
              const text = item.textContent.toUpperCase();
              if (text.indexOf(filter) > -1) {
                item.style.display = "";
              } else {
                item.style.display = "none";
              }
            });
          });


          // enter
          actionInput4.addEventListener("keydown", (event) => {
            const questionList = newInput.querySelector(".questionlist");
            if (event.keyCode === 13) {
              const visibleItem = questionList.querySelector("li:not([style*='display: none'])");
              if (visibleItem) {

                actionInput4.value = visibleItem.textContent;
                questionList.style.display = "none";
              }
            }
          });


          // Show placeholder when clicked outside of input and list
          window.addEventListener("click", (event) => {
            if (!actionInput4.contains(event.target) && !questionList.contains(event.target)) {
              questionList.style.display = "none";
            }
          });

          // // --------------------------------------------------------------------

          // Hide Section 
          // Add event listener for "HIDE SECTION" li element

          const hideSectionLi = newInput.querySelector("#hs");
          hideSectionLi.addEventListener("click", function () {


            const actionInput2 = newInput.querySelector(".actioninput2");
            const deleteBtn = newInput.querySelector(".deleteinputbtn");


            const sectionInput = newInput.querySelector(".sectioninput");
            const actionInput3 = newInput.querySelector(".actioninput3");
            const deleteBtn2 = newInput.querySelector(".deleteinputbtn2");


            const questionInput = newInput.querySelector(".questioninput");
            const actionInput4 = newInput.querySelector(".actioninput4");
            const deleteBtn3 = newInput.querySelector(".deleteinputbtn3");



            const hideSectionInput = newInput.querySelector(".hidesectioninput");
            const actionInput5 = newInput.querySelector(".actioninput5")
            const deleteBtn4 = newInput.querySelector(".deleteinputbtn4");
            const hideSectionLabel = newInput.querySelector(".hidesectionlabel");
            const showHideToggle = newInput.querySelector(".showhidetoggle");


            const hideQuestionInput = newInput.querySelector(".hidequestioninput");
            const actionInput6 = newInput.querySelector(".actioninput6")
            const deleteBtn5 = newInput.querySelector(".deleteinputbtn5")
            const showHideqstnToggle = newInput.querySelector(".showhideqstntoggle");
            const hideQuestionLabel = newInput.querySelector(".hidequestionlabel")

            // Display the section input field and delete icon


            hideSectionInput.style.display = "block";
            actionInput5.style.display = "block";
            deleteBtn4.style.display = "block";
            questionLabel.style.display = "block";
            showQuestionToggle.style.display = "block";
            hideSectionLabel.style.display = "block";
            showHideToggle.style.display = "block";


            sectionInput.style.display = "none";
            actionInput2.style.display = "none";
            deleteBtn.style.display = "none";
            actionInput3.style.display = "none";
            deleteBtn2.style.display = "none";
            questionInput.style.display = "none";
            actionInput4.style.display = "none";
            deleteBtn3.style.display = "none";

            hideQuestionInput.style.display = "none";
            actionInput6.style.display = "none";
            deleteBtn5.style.display = "none";
            showHideqstnToggle.style.display = "none";
            hideQuestionLabel.style.display = "none";

            toggleBtn.style.display = "block";
            toggleBtn.style.top = "-43px"
            toggleBtn.style.left = "256px"
          });

          // for showing hide  section list
          const actionInput5 = newInput.querySelector(".actioninput5");
          const hideSectionList = newInput.querySelector(".hidesectionlist");
          actionInput5.addEventListener("click", () => {
            hideSectionList.style.display = hideSectionList.style.display === "none" ? "block" : "none";
          })





          // hide section DELETE

          // Add event listener for the fourth delete button
          const deleteBtn4 = newInput.querySelector(".deleteinputbtn4");
          const hideSectionLabel = newInput.querySelector(".hidesectionlabel");
          const showHideToggle = newInput.querySelector(".showhidetoggle");
          let click4Count = 0;

          deleteBtn4.addEventListener("click", function () {
            // Hide the section input field and delete icon
            click4Count++
            if (click4Count === 1) {
              deleteBtn4.style.background = "red";
              deleteBtn4.style.color = "white";
            } else if (click4Count === 2) {
              actionInput.value = "";
              const actionInput5 = newInput.querySelector(".actioninput5");
              if (actionInput5) {
                actionInput5.value = "";

              }
              newInput.style.display = "none";
              // button click counter and remove red background color
              click4Count = 0;
              deleteBtn4.style.backgroundColor = "";
              deleteBtn4.style.color = "";
            }
          });
          // hide actioninput2 initially
          if (actionInput5) {
            actionInput5.style.display = "none";
          }

          // add event listener to toggle display of actioninput2
          actionUpBtn.addEventListener("click", () => {
            if (actionInput5) {
              actionInput2.style.display = "block";
              deleteInputBtn.style.display = "block";
              actionInput4.style.display = "none";
              deleteBtn4.style.display = "none";
              hideSectionLabel.style.display = "none";
              showHideToggle.style.display = "none";
              actionInput2.value = "";
            }
          });



          // Add search functionality to actioninput5
          actionInput5.addEventListener("input", function () {
            const filter = actionInput5.value.toUpperCase();
            const hideSectionList = newInput.querySelector(".hidesectionlist");
            const hidesectionlistitems = hideSectionList.querySelectorAll("li");
            hidesectionlistitems.forEach(function (item) {
              const text = item.textContent.toUpperCase();
              if (text.indexOf(filter) > -1) {
                item.style.display = "";
              } else {
                item.style.display = "none";
              }
            });
          });



          // for displaying the selected list value in input5

          const hidesectionlistitems = newInput.querySelectorAll(".hidesectionlist li");
          hidesectionlistitems.forEach(function (item) {
            item.addEventListener("click", function () {
              const actionInput5 = newInput.querySelector(".actioninput5");
              actionInput5.value = item.textContent;
              const hideSectionList = newInput.querySelector(".hidesectionlist");
              hideSectionList.style.display = "none";
            });
          });






          // enter

          actionInput5.addEventListener("keydown", (event) => {
            const hideSectionlist = newInput.querySelector(".hidesectionlist");
            if (event.keyCode === 13) {
              const visibleItem = hidesectionlist.querySelector("li:not([style*='display: none'])");
              if (visibleItem) {

                actionInput5.value = visibleItem.textContent;
                hideSectionlist.style.display = "none";
              }
            }
          });


          // Show placeholder when clicked outside of input and list
          window.addEventListener("click", (event) => {
            if (!actionInput5.contains(event.target) && !hideSectionList.contains(event.target)) {
              hideSectionList.style.display = "none";
            }
          });



          // // --------------------------------------------------------------------


          // Add event listener for "HIDE QUESTION" li element
          const hideQuestionLi = newInput.querySelector("#hq");
          hideQuestionLi.addEventListener("click", function () {

            // Display the section input field and delete icon

            const actionInput2 = newInput.querySelector(".actioninput2");
            const deleteBtn = newInput.querySelector(".deleteinputbtn");


            const sectionInput = newInput.querySelector(".sectioninput");
            const actionInput3 = newInput.querySelector(".actioninput3");
            const deleteBtn2 = newInput.querySelector(".deleteinputbtn2");


            const questionInput = newInput.querySelector(".questioninput");
            const actionInput4 = newInput.querySelector(".actioninput4");
            const deleteBtn3 = newInput.querySelector(".deleteinputbtn3");



            const hideSectionInput = newInput.querySelector(".hidesectioninput");
            const actionInput5 = newInput.querySelector(".actioninput5")
            const deleteBtn4 = newInput.querySelector(".deleteinputbtn4");


            const hideQuestionInput = newInput.querySelector(".hidequestioninput");
            const actionInput6 = newInput.querySelector(".actioninput6")
            const deleteBtn5 = newInput.querySelector(".deleteinputbtn5")
            const showHideqstnToggle = newInput.querySelector(".showhideqstntoggle");
            const hideQuestionLabel = newInput.querySelector(".hidequestionlabel")



            hideQuestionInput.style.display = "block";
            actionInput6.style.display = "block";
            deleteBtn5.style.display = "block";
            showHideqstnToggle.style.display = "block";
            hideQuestionLabel.style.display = "block";


            hideSectionInput.style.display = "none";
            actionInput5.style.display = "none";
            deleteBtn4.style.display = "none";
            sectionInput.style.display = "none";
            actionInput2.style.display = "none";
            deleteBtn.style.display = "none";
            actionInput3.style.display = "none";
            deleteBtn2.style.display = "none";
            questionInput.style.display = "none";
            actionInput4.style.display = "none";
            deleteBtn3.style.display = "none";

            toggleBtn.style.display = "block";
            toggleBtn.style.top = "-43px"
            toggleBtn.style.left = "256px"

          });


          // for showing question list
          const actionInput6 = newInput.querySelector(".actioninput6");
          const hideQuestionList = newInput.querySelector(".hidequestionlist");
          actionInput6.addEventListener("click", () => {
            hideQuestionList.style.display = hideQuestionList.style.display === "none" ? "block" : "none";
          })



          // // Hide question DELETE

          // Add event listener for the third delete button
          const deleteBtn5 = newInput.querySelector(".deleteinputbtn5");
          const showHideqstnToggle = newInput.querySelector(".showhideqstntoggle");
          const hideQuestionLabel = newInput.querySelector(".hidequestionlabel")

          let click5Count = 0;

          deleteBtn5.addEventListener("click", function () {
            // Hide the section input field and delete icon
            click5Count++;
            if (click3Count === 1) {
              // first click, change background color
              deleteBtn5.style.backgroundColor = "red";
              deleteBtn5.style.color = "white";
            } else if (click5Count === 2) {
              // second click, perform delete action
              actionInput.value = "";
              const actionInput6 = newInput.querySelector(".actioninput4");
              if (actionInput6) {
                actionInput6.value = "";
                // do something with actionInput2
              }
              newInput.style.display = "none";
              // button click counter and remove red background color
              click5Count = 0;
              deleteBtn5.style.backgroundColor = "";
            }
          });

          // hide actioninput2 initially
          if (actionInput6) {
            actionInput6.style.display = "none";
          }

          // add event listener to toggle display of actioninput2
          actionUpBtn.addEventListener("click", () => {
            if (actionInput6) {
              actionInput2.style.display = "block";
              deleteInputBtn.style.display = "block";
              actionInput4.style.display = "none";
              deleteBtn5.style.display = "none";
              showHideqstnToggle.style.display = "none";
              hideQuestionLabel.style.display = "none";
              actionInput2.value = "";
            }
          });


          // Add search functionality to actioninput5
          actionInput6.addEventListener("input", function () {
            const filter = actionInput5.value.toUpperCase();
            const hideQuestionList = newInput.querySelector(".hidequestionlist");
            const hideQuestionListitems = hideQuestionList.querySelectorAll("li");
            hideQuestionListitems.forEach(function (item) {
              const text = item.textContent.toUpperCase();
              if (text.indexOf(filter) > -1) {
                item.style.display = "";
              } else {
                item.style.display = "none";
              }
            });
          });


          // // for displaying the selected list value in input6

          const hidequestionlistitems = newInput.querySelectorAll(".hidequestionlist li");
          hidequestionlistitems.forEach(function (item) {
            item.addEventListener("click", function () {
              const actionInput6 = newInput.querySelector(".actioninput6");
              actionInput6.value = item.textContent;
              const hideQuestionList = newInput.querySelector(".hidequestionlist");
              hideQuestionList.style.display = "none";
            });
          });


          actionInput6.addEventListener("keydown", (event) => {
            const hideQuestionList = newInput.querySelector(".hidequestionlist");
            if (event.keyCode === 13) {
              const visibleItem = hideQuestionList.querySelector("li:not([style*='display: none'])");
              if (visibleItem) {

                actionInput6.value = visibleItem.textContent;
                hideQuestionList.style.display = "none";
              }
            }
          });



          // Show placeholder when clicked outside of input and list
          window.addEventListener("click", (event) => {
            if (!actionInput6.contains(event.target) && !hideQuestionList.contains(event.target)) {
              hideQuestionList.style.display = "none";
            }
          });
          // ---------------------------------------------------------------------------------


          newActionDiv.appendChild(newInput);
          actionsDiv.appendChild(addActionBtn);
          actionsContainer.appendChild(newActionDiv);
          actionCount++;

        });


        newCondition.appendChild(actionsDiv);
        newRule.appendChild(newCondition);

        // ************************************* ** */ action end*************************************************************************








        // newRule.appendChild(newCondition);

        const conditionBtn = newCondition.querySelector(".conditionbtn");
        const inputsDiv = newCondition.querySelector(".inputs");
        const dropdownBtn = newCondition.querySelector(".droppbtn");
        const dropdownContentt = newCondition.querySelector(".dropdown-contentt");
        const listInput = newCondition.querySelector(".listinput");
        const conditionInput = newCondition.querySelector(".conditioninput");
        const listItems = dropdownContentt.querySelectorAll("li");
        const whenFieldsDiv = newCondition.querySelector(".when-fields");
        const complexField1 = document.querySelector(".complex-field1");
        const dropDown = document.querySelector(".dropdown");


        // condition1.1 , when and complex field visibility

        const complexFieldsDiv = newCondition.querySelector(".complex-fields"); // select the .when-fields div
        let isDropdownVisible = false;  // flag to keep track of the dropdown visibility state
        let isWhenFieldsVisible = false;
        let iscomplexFieldsVisible = false; // flag to keep track of the dropdown visibility state

        conditionBtn.addEventListener("click", () => {
          inputsDiv.style.display = inputsDiv.style.display === "none" ? "block" : "none";
          dropdownContentt.style.display = "none";
          whenFieldsDiv.style.display = "none";
          complexFieldsDiv.style.display = "none"; // hide the .when-fields div
          isDropdownVisible = false;
          isWhenFieldsVisible = false;
          iscomplexFieldsVisible = false;


          // button the flag value for .when-fields div
        });





        dropdownBtn.addEventListener("click", () => {
          whenFieldsDiv.style.display = "none";
          complexFieldsDiv.style.display = "none"; // hide the .when-fields div
          dropdownContentt.style.display = isDropdownVisible ? "none" : "block";
          isDropdownVisible = !isDropdownVisible;
          iscomplexFieldsVisible = false; // button the flag value for .when-fields div
        });

        // Set the value of listinput and conditioninput to "Always"
        listInput.value = "Always";
        conditionInput.value = "Always";

        // when field visibility

        listItems.forEach((item) => {
          item.addEventListener("click", () => {
            const selectedItem = item.textContent.trim();
            listInput.value = selectedItem;
            conditionInput.value = selectedItem;
            dropdownContentt.style.display = "none";
            isDropdownVisible = false;

            if (selectedItem === "When") {
              whenFieldsDiv.style.display = "block";
              isWhenFieldsVisible = true;
            } else {
              whenFieldsDiv.style.display = "none";
              isWhenFieldsVisible = false;
            }
          });
        });



        //  when question values 

        const questValueInput = newCondition.querySelector("#questvalue");
        const whenFields = document.querySelector(".when-fields");
        // const whenlist = newInput.querySelector(".whenlist");
        const whenList = newCondition.querySelector(".whenlist");
        questValueInput.addEventListener("click", () => {
          whenList.style.display = whenList.style.display === "none" ? "block" : "none";
          // questValueInput.style.height="41%"
       });

       whenFields.appendChild(whenList);


        whenList.addEventListener("click", (event) => {
          const selectedItem = event.target;
          if (selectedItem.tagName === "LI") {
            questValueInput.value = selectedItem.textContent;
            whenList.style.display = "none";
          }
        });


        // click on window condition dropdown open   // 

        document.addEventListener("click", (event) => {
          if (event.target !== dropdownBtn && event.target !== dropdownContentt && !dropdownContentt.contains(event.target)) {
            dropdownContentt.style.display = "none";
            isDropdownVisible = false;
          }
        });




        // operat list of when 
        const operatorInput = newCondition.querySelector("#operator");
        const OperatorList = newCondition.querySelector(".operatorlist");
        // const operLabel = newCondition.querySelector("#oper");
        operatorInput.addEventListener("click", () => {
          OperatorList.style.display = OperatorList.style.display === "none" ? "block" : "none";

        });

        whenFields.appendChild(OperatorList);

        // selction list items on input

        OperatorList.addEventListener("click", (event) => {
          const selectedItemoperate = event.target;
          if (selectedItemoperate.tagName === "LI") {
            operatorInput.value = selectedItemoperate.textContent;
            OperatorList.style.display = "none";
          }
        });


        // search
        operatorInput.addEventListener("input", () => {
          const filterValue = operatorInput.value.toUpperCase();
          OperatorList.querySelectorAll("li").forEach((item2) => {
            if (item2.textContent.toUpperCase().indexOf(filterValue) > -1) {
              item2.style.display = "block";
            } else {
              item2.style.display = "none";
            }
          });
        });

        // Show placeholder when clicked outside of input and list
        window.addEventListener("click", (event) => {
          if (!operatorInput.contains(event.target) && !OperatorList.contains(event.target)) {
            operatorInput.placeholder = "operator";
            OperatorList.style.display = "none";
          }
        });

        operatorInput.addEventListener("keydown", (event) => {
          if (event.keyCode === 13) {
            const visibleItem = OperatorList.querySelector("li:not([style*='display: none'])");
            if (visibleItem) {
              operatorInput.value = visibleItem.textContent;
              OperatorList.style.display = "none";
            }
          }
        });


        // click on windows of question or values condition dropdown (when)  

        document.addEventListener("click", (event) => {
          if (event.target !== operatorInput && event.target !== OperatorList && !OperatorList.contains(event.target)) {
            OperatorList.style.display = "none";
            isDropdownVisible = false;
          }
        });

        //  click on windows of question or values condition dropdown

        document.addEventListener("click", (event) => {
          if (event.target !== questValueInput && event.target !== whenList && !whenList.contains(event.target)) {
            whenList.style.display = "none";
            isDropdownVisible = false;
          }
        });

        // ************************************************ADD EXPRESSION **********************************************************************************************************


        // Get all sections and loop through them
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
          // Get all rules for the current section and loop through them
          const rules = section.querySelectorAll(".rule");
          rules.forEach((rule, index) => {
            // Find the "addExpression" button for the current rule and add a click event listener
            const addExpButton = rule.querySelector("#addExpression");
            addExpButton.addEventListener("click", () => {
              // Find the condition element for the current rule
              const condition = rule.querySelector(".condition");

              const inputFields = `
             <div class="expression">
             <div class="custom-selectdropEXP11">
            
<input type="text" placeholder="EXPRESSION OPERATOR" id="sh-input">
<span for="sh-input" id="sh-labelEXP">EXPRESSION OPERATOR</span>
<ul id="sh-dropdown" class="dropdown-contentEXP1">
  <li>AND</li>
  <li>OR</li>
  
</ul>

<i id="sh-toggle" class="fa fa-chevron-down"></i>

</div>


<div class="custom-dropdownEXP12">

  <input type="text" placeholder="QUESTIONORVALUE" id="ra-input">
  <span for="ra-input" id="ra-labelEXP">QUESTIONORVALUE</span>

  <ul id="ra-list"  class="dropdown-contentEXP12">
    <li>Question</li>
    <li>Answer</li>
  </ul>
  <i id="ra-toggle" class="fa fa-chevron-down"></i>
</div>

<div class="custom-dropdownEXP13">
<input type="text" placeholder="OPERATOR" id="va-input">
<span for="va-input" id="va-labelEXP">OPERATOR</span>
<ul class="va-list" id="dropdown-contentEXP13">
<li><</li>
<li><=</li>
<li>></li>
<li>>=</li>
<li >BETWEEN</li>
<li><</li>
<li><=</li>
<li>></li>
<li>>=</li>
<li >BETWEEN</li>
</ul>
<i id="va-toggle" class="fa fa-chevron-down"></i>
</div>

<input type="text" placeholder="VALUE" id="na">
<span for="na-input" id="na-labelEXP">VALUE</span>
             <button class="deleteEXP" ><i class="fa fa-trash" aria-hidden="true"></i></button>
               </div>
             `;
              const addExpDiv = document.getElementById("addexp");
              const expressionDiv = document.createElement("div");
              expressionDiv.innerHTML = inputFields;


              // Add event listener to delete button
              const deleteButton = expressionDiv.querySelector(".deleteEXP");
              deleteButton.addEventListener("click", () => {
                if (deleteButton.classList.contains("highlightedEXP")) {
                  expressionDiv.remove();
                } else {
                  deleteButton.classList.add("highlightedEXP");
                }
              });
              // Add event listener to shToggle
              const shInput = expressionDiv.querySelector("#sh-input");
              const shDropdown = expressionDiv.querySelector("#sh-dropdown");
              const shToggle = expressionDiv.querySelector("#sh-toggle");

              // Toggle dropdown list
              shToggle.addEventListener("click", function () {
                if (shDropdown.style.display === "none") {
                  shDropdown.style.display = "block";
                  shToggle.classList.remove("fa-chevron-down");
                  shToggle.classList.add("fa-chevron-up");
                } else {
                  shDropdown.style.display = "none";
                  shToggle.classList.remove("fa-chevron-up");
                  shToggle.classList.add("fa-chevron-down");
                }
              });

              // Select dropdown option
              shDropdown.addEventListener("click", function (event) {
                const selectedOption = event.target.textContent;
                shInput.value = selectedOption;
                shInput.placeholder = "";
                shDropdown.style.display = "none";
                shToggle.classList.remove("fa-chevron-up");
                shToggle.classList.add("fa-chevron-down");
              });

              // Show dropdown list when input is clicked
              shInput.addEventListener("click", function () {
                shToggle.click();
              });

              // Search for dropdown options
              shInput.addEventListener("input", function () {
                const filterValue = shInput.value.toUpperCase();
                const options = shDropdown.querySelectorAll("li");
                for (let i = 0; i < options.length; i++) {
                  const option = options[i];
                  const optionText = option.textContent.toUpperCase();
                  if (optionText.includes(filterValue)) {
                    option.style.display = "";
                  } else {
                    option.style.display = "none";
                  }
                }
              });

              // Hide dropdown list when clicking outside
              window.addEventListener("click", function (event) {
                if (!shDropdown.contains(event.target) && event.target !== shInput && event.target !== shToggle) {
                  shDropdown.style.display = "none";
                  shToggle.classList.remove("fa-chevron-up");
                  shToggle.classList.add("fa-chevron-down");
                }
              });




              // Add event listener to raToggle
              const raInput = expressionDiv.querySelector("#ra-input");
              const raToggle = expressionDiv.querySelector("#ra-toggle");
              const raList = expressionDiv.querySelector("#ra-list");

              raToggle.addEventListener("click", function () {
                if (raList.style.display === "none") {
                  raList.style.display = "block";
                  raToggle.classList.remove("fa-chevron-down");
                  raToggle.classList.add("fa-chevron-up");
                } else {
                  raList.style.display = "none";
                  raToggle.classList.remove("fa-chevron-up");
                  raToggle.classList.add("fa-chevron-down");
                }
              });

              // Add event listener to raList
              raList.addEventListener("click", function (event) {
                const selectedOption = event.target.textContent;
                raInput.value = selectedOption;
                raList.style.display = "none";
                raToggle.classList.remove("fa-chevron-up");
                raToggle.classList.add("fa-chevron-down");
              });

              // Add event listener to raInput
              raInput.addEventListener("click", function () {
                raToggle.click();
              });

              // Add event listener to raInput
              raInput.addEventListener("input", function () {
                const filterValue = raInput.value.toUpperCase();
                const options = raList.querySelectorAll("li");
                for (let i = 0; i < options.length; i++) {
                  const option = options[i];
                  const optionText = option.textContent.toUpperCase();
                  if (optionText.includes(filterValue)) {
                    option.style.display = " ";
                  } else {
                    option.style.display = "none";
                  }
                }
              });
              // Add event listener to window
              window.addEventListener("click", function (event) {
                if (!event.target.matches("#ra-input") && !event.target.matches("#ra-toggle")) {
                  raList.style.display = "none";
                  raToggle.classList.remove("fa-chevron-up");
                  raToggle.classList.add("fa-chevron-down");
                }
              });

              const vaInput = expressionDiv.querySelector("#va-input");
              const vaToggle = expressionDiv.querySelector("#va-toggle");
              const vaList = expressionDiv.querySelector(".va-list");
              vaList.style.display = "none";

              // Toggle dropdown list
              vaToggle.addEventListener("click", function () {
                if (vaList.style.display === "none") {
                  vaList.style.display = "block";
                  vaToggle.classList.remove("fa-chevron-down");
                  vaToggle.classList.add("fa-chevron-up");
                } else {
                  vaList.style.display = "none";
                  vaToggle.classList.remove("fa-chevron-up");
                  vaToggle.classList.add("fa-chevron-down");
                }
              });

              // Select dropdown option
              vaList.addEventListener("click", function (event) {
                const selectedOption = event.target.textContent;
                vaInput.value = selectedOption;
                vaInput.placeholder = "";
                vaList.style.display = "none";
                vaToggle.classList.remove("fa-chevron-up");
                vaToggle.classList.add("fa-chevron-down");
              });

              // Show dropdown list when input is clicked
              vaInput.addEventListener("click", function () {
                vaToggle.click();
              });

              // Search for dropdown options
              vaInput.addEventListener("input", function () {
                const filterValue = vaInput.value.toUpperCase();
                const options = vaList.querySelectorAll("li");
                for (let i = 0; i < options.length; i++) {
                  const option = options[i];
                  const optionText = option.textContent.toUpperCase();
                  if (optionText.includes(filterValue)) {
                    option.style.display = "";
                  } else {
                    option.style.display = "none";
                  }
                }
              });

              // Add event listener to window
              window.addEventListener("click", function (event) {
                if (!event.target.matches("#va-input") && !event.target.matches("#va-toggle")) {
                  vaList.style.display = "none";
                  vaToggle.classList.remove("fa-chevron-up");
                  vaToggle.classList.add("fa-chevron-down");
                }
              });

              addExpDiv.parentNode.insertBefore(expressionDiv, addExpDiv);
              // Insert the new expression before the addExpButton for the current rule
              const addExpParent = addExpButton.parentNode;
              const ruleIndex = index + 1; // Rules are 1-indexed
              const expressionIndex = addExpParent.children.length - 1; // Subtract 1 for the addExpButton
              const targetIndex = ruleIndex * expressionIndex;
              addExpParent.insertBefore(expressionDiv, addExpParent.children[targetIndex]);
            });

            document.addEventListener("click", (event) => {
              const deleteButton = document.querySelector(".highlightedEXP");
              if (deleteButton && !deleteButton.contains(event.target)) {
                deleteButton.classList.remove("highlightedEXP");
              }

            });

          });

        });

        // *****************************************ADD EXPRESSION END ***************************************************************************************************
        // *****************************************ADD Group start***************************************************************************************************



        let ruleCounter = 0;
        // Function to add a new group
        function addGroup(container) {
          const ruleID = `rule-${ruleCounter}`;
          const inputFields = `
    <div class="group" id="${ruleID}">
      <div class="expressionsgroups">
        <div class="expressiongroup">
        <div class="custom-selectdropGRP111">
        <input type="text" placeholder="GROUP OPERATOR" class="ba-input">
        <span for="ba-input" id="ba-labelGRP">GROUP OPERATOR</span>
        <ul id="ba-dropdown" class="dropdown-contentGRP111">
          <li>AND</li>
          <li>OR</li>
          
        </ul>
        
        <i id="ba-toggle" class="fa fa-chevron-down"></i>
        
        </div>
          

        <div class="custom-selectdropGRP112">
        <input type="text" placeholder="ANSWER OR QUESTION" class="sa-input">
        <span for="sa-input" id="sa-labelGRP">ANSWER OR QUESTION</span>
        <ul id="sa-dropdown" class="dropdown-contentGRP112">
          <li>Equal to</li>
          <li>Not equal to</li>
         
        </ul>
        
        <i id="sa-toggle" class="fa fa-chevron-down"></i>
        
        </div>
          
        <div class="custom-selectdropGRP113">
        <input type="text" placeholder="OPERATOR" class="ja-input">
        <span for="ja-input" id="ja-labelGRP">OPERATOR</span>
        <ul id="ja-dropdown" class="dropdown-contentGRP113">
        <li><</li>
        <li><=</li>
        <li>></li>
        <li>>=</li>
        <li >BETWEEN</li>
        <li><</li>
        <li><=</li>
        <li>></li>
        <li>>=</li>
        <li >BETWEEN</li>
        </ul>
        
        <i id="ja-toggle" class="fa fa-chevron-down"></i>
        
        </div>
        <input type="text" placeholder="VALUE" class="ro-input">
        <span for="ro-input" id="ro-labelGRP">VALUE</span>
         
          <button class="delete-group"><i class="fa fa-trash"></i></button>
        </div>
        <div>
          <button class="add-expression" style="margin-top: 10px;">ADD EXPRESSION</button>
        </div>
      </div>
    </div>
  `;

          const groupDiv = document.createElement("div");
          groupDiv.innerHTML = inputFields;

          // Add event listener to delete group button
          const deleteGroupButton = groupDiv.querySelector(".delete-group");
          deleteGroupButton.addEventListener("click", () => {
            if (deleteGroupButton.classList.contains("highlightedGRP")) {
              groupDiv.remove();
            } else {
              deleteGroupButton.classList.add("highlightedGRP");
            }
          });
          // const expressionsGroupDiv = groupDiv.previousElementSibling.querySelector(".expressionsgroups");
          // expressionsGroupDiv.appendChild(groupDiv);
          // Add event listener to shToggle
          // const groupDiv1 = document.querySelector(".custom-selectdropGRP113");

          const baInput = groupDiv.querySelector(".ba-input");
          const baDropdown = groupDiv.querySelector("#ba-dropdown");
          const baToggle = groupDiv.querySelector("#ba-toggle");

          // Toggle dropdown list
          baToggle.addEventListener("click", function () {
            if (baDropdown.style.display === "none") {
              baDropdown.style.display = "block";
              baToggle.classList.remove("fa-chevron-down");
              baToggle.classList.add("fa-chevron-up");
            } else {
              baDropdown.style.display = "none";
              baToggle.classList.remove("fa-chevron-up");
              baToggle.classList.add("fa-chevron-down");
            }
          });

          // Select dropdown option
          baDropdown.addEventListener("click", function (event) {
            const selectedOption = event.target.textContent;
            baInput.value = selectedOption;
            baInput.placeholder = "";
            baDropdown.style.display = "none";
            baToggle.classList.remove("fa-chevron-up");
            baToggle.classList.add("fa-chevron-down");
          });

          // Show dropdown list when input is clicked
          baInput.addEventListener("click", function () {
            baToggle.click();
          });

          // Search for dropdown options
          baInput.addEventListener("input", function () {
            const filterValue = baInput.value.toUpperCase();
            const options = baDropdown.querySelectorAll("li");
            for (let i = 0; i < options.length; i++) {
              const option = options[i];
              const optionText = option.textContent.toUpperCase();
              if (optionText.includes(filterValue)) {
                option.style.display = "";
              } else {
                option.style.display = "none";
              }
            }
          });

          // Hide dropdown list when clicking outside
          window.addEventListener("click", function (event) {
            if (!baDropdown.contains(event.target) && event.target !== baInput && event.target !== baToggle) {
              baDropdown.style.display = "none";
              baToggle.classList.remove("fa-chevron-up");
              baToggle.classList.add("fa-chevron-down");
            }
          });

          // Add event listener to raToggle
          const saInput = groupDiv.querySelector(".sa-input");
          const saToggle = groupDiv.querySelector("#sa-toggle");
          const sadropdown = groupDiv.querySelector("#sa-dropdown");

          saToggle.addEventListener("click", function () {
            if (sadropdown.style.display === "none") {
              sadropdown.style.display = "block";
              saToggle.classList.remove("fa-chevron-down");
              saToggle.classList.add("fa-chevron-up");
            } else {
              sadropdown.style.display = "none";
              saToggle.classList.remove("fa-chevron-up");
              saToggle.classList.add("fa-chevron-down");
            }
          });
          // Add event listener to raList
          sadropdown.addEventListener("click", function (event) {
            const selectedOption = event.target.textContent;
            saInput.value = selectedOption;
            sadropdown.style.display = "none";
            saToggle.classList.remove("fa-chevron-up");
            saToggle.classList.add("fa-chevron-down");
          });

          // Add event listener to raInput
          saInput.addEventListener("click", function () {
            saToggle.click();
          });

          // Add event listener to raInput
          saInput.addEventListener("input", function () {
            const filterValue = saInput.value.toUpperCase();
            const options = sadropdown.querySelectorAll("li");
            for (let i = 0; i < options.length; i++) {
              const option = options[i];
              const optionText = option.textContent.toUpperCase();
              if (optionText.includes(filterValue)) {
                option.style.display = " ";
              } else {
                option.style.display = "none";
              }
            }
          });
          // Add event listener to window
          window.addEventListener("click", function (event) {
            if (!event.target.matches(".sa-input") && !event.target.matches("#sa-toggle")) {
              sadropdown.style.display = "none";
              saToggle.classList.remove("fa-chevron-up");
              saToggle.classList.add("fa-chevron-down");
            }
          });
          // ************************************************************************************************

          const jaInput = groupDiv.querySelector(".ja-input");
          const jaToggle = groupDiv.querySelector("#ja-toggle");
          const jadrodown = groupDiv.querySelector("#ja-dropdown");
          // jaList.style.display = "none";

          // Toggle dropdown list
          jaToggle.addEventListener("click", function () {
            if (jadrodown.style.display === "none") {
              jadrodown.style.display = "block";
              jaToggle.classList.remove("fa-chevron-down");
              jaToggle.classList.add("fa-chevron-up");
            } else {
              jadrodown.style.display = "none";
              jaToggle.classList.remove("fa-chevron-up");
              jaToggle.classList.add("fa-chevron-down");
            }
          });

          // Select dropdown option
          jadrodown.addEventListener("click", function (event) {
            const selectedOption = event.target.textContent;
            jaInput.value = selectedOption;
            jaInput.placeholder = "";
            jadrodown.style.display = "none";
            jaToggle.classList.remove("fa-chevron-up");
            jaToggle.classList.add("fa-chevron-down");
          });

          // Show dropdown list when input is clicked
          jaInput.addEventListener("click", function () {
            jaToggle.click();
          });

          // Search for dropdown options
          jaInput.addEventListener("input", function () {
            const filterValue = jaInput.value.toUpperCase();
            const options = jadrodown.querySelectorAll("li");
            for (let i = 0; i < options.length; i++) {
              const option = options[i];
              const optionText = option.textContent.toUpperCase();
              if (optionText.includes(filterValue)) {
                option.style.display = "";
              } else {
                option.style.display = "none";
              }
            }
          });

          // Add event listener to window
          window.addEventListener("click", function (event) {
            if (!event.target.matches(".ja-input") && !event.target.matches("#ja-toggle")) {
              jadrodown.style.display = "none";
              jaToggle.classList.remove("fa-chevron-up");
              jaToggle.classList.add("fa-chevron-down");
            }
          });






          // Add event listener to add expression button
          const addExpressionButton = groupDiv.querySelector(".add-expression");
          addExpressionButton.addEventListener("click", () => {
            addExpression(addExpressionButton);
          });

          container.insertBefore(groupDiv, event.target); // Insert the groupDiv above the "addGroup" button



          groupContainer.insertBefore(addExpressionButton, groupDiv); // Insert the addExpressionButton above the groupDiv

          // Add the group to the container

          container.appendChild(groupDiv);
        }


        // Function to add a new expression
        function addExpression(addExpressionButton) {
          const expressionFields = `
    <div class="expressiongroup3333">
    <div class="custom-selectdropEXPTWO11">
    <input type="text" placeholder="EXPRESSION OPERATOR" id="pr-input">
    <span for="pr-input" id="pr-labelGRP">EXPRESSION OPERATOR</span>
    <ul id="pr-dropdown" class="dropdown-contentEXPTWO11">
      <li>AND</li>
      <li>OR</li>
    </ul>
    <i id="pr-toggle" class="fa fa-chevron-down"></i>
    </div>
    
    
    <div class="custom-selectdropEXPTWO12">
    <input type="text" placeholder="QUESTION OR ANSWER" id="qr-input">
    <span for="qr-input" id="qr-labelGRP">QUESTION OR ANSWER</span>
   <ul id="qr-dropdown" class="dropdown-contentEXPTWO12">
      <li>AND</li>
      <li>OR</li>
    </ul>
    <i id="qr-toggle" class="fa fa-chevron-down"></i>
    </div>
    
    
    <div class="custom-selectdropEXPTWO13">
    <input type="text" placeholder="OPERATOR" id="opr-input">
    <span for="opr-input" id="opr-labelGRP">OPERATOR</span>
   <ul id="opr-dropdown" class="dropdown-contentEXPTWO13">
   <li><</li>
   <li><=</li>
   <li>></li>
   <li>>=</li>
   <li >BETWEEN</li>
   <li><</li>
   <li><=</li>
   <li>></li>
   <li>>=</li>
    <li >BETWEEN</li>
    </ul>
    <i id="opr-toggle" class="fa fa-chevron-down"></i>
    </div>
      
      
      <input type="text" placeholder="VALUE" id="nasik">
      <span for="nasik-input" id="nasik-labelGRP">VALUE</span>
      <button class="delete-expression"><i class="fa fa-trash"></i></button>
    </div>
  `;

          const expressionGroupDiv = document.createElement("div");
          expressionGroupDiv.classList.add("expressiongroup");
          expressionGroupDiv.innerHTML = expressionFields;

          // Add event listener to delete expression button
          const deleteExpressionButton = expressionGroupDiv.querySelector(".delete-expression");
          deleteExpressionButton.addEventListener("click", () => {
            if (deleteExpressionButton.classList.contains("highlightedEXP2")) {
              expressionGroupDiv.remove();
            } else {
              deleteExpressionButton.classList.add("highlightedEXP2");
            }
          });



          const prInput = expressionGroupDiv.querySelector("#pr-input");
          const prDropdown = expressionGroupDiv.querySelector("#pr-dropdown");
          const prToggle = expressionGroupDiv.querySelector("#pr-toggle");

          // Toggle dropdown list
          prToggle.addEventListener("click", function () {
            if (prDropdown.style.display === "none") {
              prDropdown.style.display = "block";
              prToggle.classList.remove("fa-chevron-down");
              prToggle.classList.add("fa-chevron-up");
            } else {
              prDropdown.style.display = "none";
              prToggle.classList.remove("fa-chevron-up");
              prToggle.classList.add("fa-chevron-down");
            }
          });

          // Select dropdown option
          prDropdown.addEventListener("click", function (event) {
            const selectedOption = event.target.textContent;
            prInput.value = selectedOption;
            prInput.placeholder = "";
            prDropdown.style.display = "none";
            prToggle.classList.remove("fa-chevron-up");
            prToggle.classList.add("fa-chevron-down");
          });

          // Show dropdown list when input is clicked
          prInput.addEventListener("click", function () {
            prToggle.click();
          });

          // Search for dropdown options
          prInput.addEventListener("input", function () {
            const filterValue = prInput.value.toUpperCase();
            const options = prDropdown.querySelectorAll("li");
            for (let i = 0; i < options.length; i++) {
              const option = options[i];
              const optionText = option.textContent.toUpperCase();
              if (optionText.includes(filterValue)) {
                option.style.display = "";
              } else {
                option.style.display = "none";
              }
            }
          });

          // Hide dropdown list when clicking outside
          window.addEventListener("click", function (event) {
            if (!prDropdown.contains(event.target) && event.target !== prInput && event.target !== prToggle) {
              prDropdown.style.display = "none";
              prToggle.classList.remove("fa-chevron-up");
              prToggle.classList.add("fa-chevron-down");
            }
          });

          // Add event listener to raToggle
          const qrInput = expressionGroupDiv.querySelector("#qr-input");
          const qrToggle = expressionGroupDiv.querySelector("#qr-toggle");
          const qrdropdown = expressionGroupDiv.querySelector("#qr-dropdown");

          qrToggle.addEventListener("click", function () {
            if (qrdropdown.style.display === "none") {
              qrdropdown.style.display = "block";
              qrToggle.classList.remove("fa-chevron-down");
              qrToggle.classList.add("fa-chevron-up");
            } else {
              qrdropdown.style.display = "none";
              qrToggle.classList.remove("fa-chevron-up");
              qrToggle.classList.add("fa-chevron-down");
            }
          });
          // Add event listener to raList
          qrdropdown.addEventListener("click", function (event) {
            const selectedOption = event.target.textContent;
            qrInput.value = selectedOption;
            qrdropdown.style.display = "none";
            qrToggle.classList.remove("fa-chevron-up");
            qrToggle.classList.add("fa-chevron-down");
          });

          // Add event listener to raInput
          qrInput.addEventListener("click", function () {
            qrToggle.click();
          });

          // Add event listener to raInput
          qrInput.addEventListener("input", function () {
            const filterValue = qrInput.value.toUpperCase();
            const options = qrdropdown.querySelectorAll("li");
            for (let i = 0; i < options.length; i++) {
              const option = options[i];
              const optionText = option.textContent.toUpperCase();
              if (optionText.includes(filterValue)) {
                option.style.display = " ";
              } else {
                option.style.display = "none";
              }
            }
          });
          // Add event listener to window
          window.addEventListener("click", function (event) {
            if (!event.target.matches("#qr-input") && !event.target.matches("#qr-toggle")) {
              qrdropdown.style.display = "none";
              qrToggle.classList.remove("fa-chevron-up");
              qrToggle.classList.add("fa-chevron-down");
            }
          });
          // ************************************************************************************************

          const oprInput = expressionGroupDiv.querySelector("#opr-input");
          const oprToggle = expressionGroupDiv.querySelector("#opr-toggle");
          const oprdrodown = expressionGroupDiv.querySelector("#opr-dropdown");
          // jaList.style.display = "none";

          // Toggle dropdown list
          oprToggle.addEventListener("click", function () {
            if (oprdrodown.style.display === "none") {
              oprdrodown.style.display = "block";
              oprToggle.classList.remove("fa-chevron-down");
              oprToggle.classList.add("fa-chevron-up");
            } else {
              oprdrodown.style.display = "none";
              oprToggle.classList.remove("fa-chevron-up");
              oprToggle.classList.add("fa-chevron-down");
            }
          });

          // Select dropdown option
          oprdrodown.addEventListener("click", function (event) {
            const selectedOption = event.target.textContent;
            oprInput.value = selectedOption;
            oprInput.placeholder = "";
            oprdrodown.style.display = "none";
            oprToggle.classList.remove("fa-chevron-up");
            oprToggle.classList.add("fa-chevron-down");
          });

          // Show dropdown list when input is clicked
          oprInput.addEventListener("click", function () {
            oprToggle.click();
          });

          // Search for dropdown options
          oprInput.addEventListener("input", function () {
            const filterValue = oprInput.value.toUpperCase();
            const options = oprdrodown.querySelectorAll("li");
            for (let i = 0; i < options.length; i++) {
              const option = options[i];
              const optionText = option.textContent.toUpperCase();
              if (optionText.includes(filterValue)) {
                option.style.display = "";
              } else {
                option.style.display = "none";
              }
            }
          });

          // Add event listener to window
          window.addEventListener("click", function (event) {
            if (!event.target.matches("#opr-input") && !event.target.matches("#opr-toggle")) {
              oprdrodown.style.display = "none";
              oprToggle.classList.remove("fa-chevron-up");
              oprToggle.classList.add("fa-chevron-down");
            }
          });

          // Add the expression before the addExpressionButton
          addExpressionButton.parentNode.insertBefore(expressionGroupDiv, addExpressionButton);

          // Add event listener to remove highlighting from delete button when clicking outside of it
          document.addEventListener("click", (event) => {
            const deleteButton = document.querySelector(".highlightedEXP2");
            if (deleteButton && !deleteButton.contains(event.target)) {
              deleteButton.classList.remove("highlightedEXP2");
            }
          });



        }

        function addGroupButtonClickHandler(event) {
          const groupContainer = event.target.closest(".container");
          if (groupContainer) {
            addGroup(groupContainer);
          }
        }

        // Add event listener to existing addGroupButton
        const addGroupButton = document.getElementById("addGroup");
        addGroupButton.addEventListener("click", addGroupButtonClickHandler);

        // Add event delegation to dynamically created addGroupButton elements
        document.addEventListener("click", function (event) {
          if (event.target && event.target.classList.contains("add-group")) {
            addGroupButtonClickHandler(event);
          }
        });


        // *****************************************ADD GROUP  END ***************************************************************************************************


        //      complex field 1

        const compQuestValue = document.querySelector("#compquestvalue");
        const complexList = document.querySelector(".complexlist");
        const complexfields = document.querySelector(".complex-fields");

        complexField1.addEventListener("click", () => {
          complexList.style.display = complexList.style.display === "none" ? "block" : "none";
        });
        // class="complex-fields"
        complexfields.appendChild(complexList);



        const complexListItems = document.querySelectorAll(".complexlist li");
        complexListItems.forEach((item) => {
          item.addEventListener("click", () => {
            compQuestValue.value = item.textContent.trim();
            complexList.style.display = "block";
          });
        });




        // copmlex question or value
        document.addEventListener("click", (event) => {
          if (event.target !== compQuestValue && event.target !== complexList && !complexList.contains(event.target)) {
            complexList.style.display = "none";
            isDropdownVisible = false;
          }
        });




        // complex operation 
        document.addEventListener("click", (event) => {
          if (event.target !== compoperator && event.target !== compOperatorList && !compOperatorList.contains(event.target)) {
            compOperatorList.style.display = "none";
            isDropdownVisible = false;
          }
        });

        const compoperator = document.querySelector('#compoperator');
        const compOperatorList = document.querySelector('.compoperatorlist');


        compoperator.addEventListener('click', () => {
          compOperatorList.style.display = compOperatorList.style.display === 'none' ? 'block' : 'none';
        });
        complexfields.appendChild(compOperatorList);



        const compOperatorListItems = document.querySelectorAll('.compoperatorlist li');

        compOperatorListItems.forEach((item) => {
          item.addEventListener('click', () => {
            compoperator.value = item.textContent.trim();
            compOperatorList.style.display = 'none';
          });
        });

        // complex question value open

        const complexListItem = newCondition.querySelector(".complex");
        complexListItem.addEventListener("click", () => {
          complexFieldsDiv.style.display = iscomplexFieldsVisible ? "none" : "block"; // toggle the visibility of the .when-fields div
          dropdownContentt.style.display = "none"; // hide the dropdown
          iscomplexFieldsVisible = !iscomplexFieldsVisible; // toggle the flag value for .when-fields div
          isDropdownVisible = false; // button the flag value for dropdown
        });

        // complex operator 

        // const compQuestValue = document.getElementById("compquestvalue");

        // hide the placeholder text when the input element is focused
        compQuestValue.addEventListener("focus", () => {
          compQuestValue.placeholder = "";
        });

        // show the placeholder text when the input element is blurred and the value is blank
        compQuestValue.addEventListener("blur", () => {
          if (compQuestValue.value === "") {
            compQuestValue.placeholder = "Answer To Question";
          }
        });

        // const compoperator = document.querySelector('#compoperator');
        // const compOperatorList = document.querySelector('.compoperatorlist');

        // hide the placeholder text when the input element is focused
        compoperator.addEventListener("focus", () => {
          compoperator.placeholder = "";
        });

        // show the placeholder text when the input element is blurred and the value is blank
        compoperator.addEventListener("blur", () => {
          if (compoperator.value === "") {
            compoperator.placeholder = "Answer To Question";
          }
        });


















        // ------------------------------------------------------- condition --------------------------------------------------------
        //  condition button angle up and angle down

        conditionBtn.addEventListener("click", () => {
          // const inputsDiv = newRule.querySelector(".inputs");

          if (dropDown.style.display === "none") {
            dropDown.style.display = "block";
            conditionBtn.querySelector("i").classList.remove("fa-angle-up");
            conditionBtn.querySelector("i").classList.add("fa-angle-down")
          } else {
            dropDown.style.display = "none";
            conditionBtn.querySelector("i").classList.remove("fa-angle-down");
            conditionBtn.querySelector("i").classList.add("fa-angle-up");
          }
        });
        //  const angleDown = newCondition.querySelector(".fa-angle-down")

      } else {
        if (condition.style.display === "none") {
          condition.style.display = "block";
          angleUpBtn.querySelector("i").classList.remove("fa-angle-up");
          angleUpBtn.querySelector("i").classList.add("fa-angle-down");
        } else {
          condition.style.display = "none";
          angleUpBtn.querySelector("i").classList.remove("fa-angle-down");
          angleUpBtn.querySelector("i").classList.add("fa-angle-up");
        }
      }
    });


    // ------------------------------------------------------- condition --------------------------------------------------------

    // const newAction = document.querySelector(".action");



    const c = document.querySelector('.ruleDiv');

    newRuleDiv.appendChild(newRule);



    newSection.appendChild(addRuleBtn);

    // newSection.appendChild(document.createElement('br')); // Insert line break


    // Update the rule numbering
    updateRuleNumbering(newSection);


    // newSection.querySelector(".section-content").appendChild(addRuleBtn);

    // // Increment the section count for the next section
    sectionCount = 1;



    function updateRuleNumbering(section) {
      const rules = section.querySelectorAll(".rule");
      const sectionNumber = Array.from(section.parentElement.children).indexOf(section) + 1;

      for (let i = 0; i < rules.length; i++) {
        const ruleName = rules[i].querySelector(".rule-name");
        ruleName.innerText = `Rule${sectionNumber}.${i + 1}`;

        const conditions = rules[i].querySelectorAll(".conditionname");
        for (let j = 0; j < conditions.length; j++) {
          conditions[j].innerText = `Condition ${sectionNumber}.${i + 1}`;
        }

        const actionName = rules[i].querySelectorAll(".actionname");
        for (let j = 0; j < actionName.length; j++) {
          actionName[j].innerText = `actionName ${sectionNumber}.${i + 1}`;
        }
      }
    }
  });












  // ....................Rule End......................................................................



  // ....................Question and Rule Hidden JS........................

  function sectionHideShow() {
    const element = document.getElementById(elementId);
    const addId = document.getElementById(addQuestionId);
    const ruleId = document.getElementById(addRuleId);


    if (element.style.display === 'none' && addId.style.display === "none" && ruleId.style.display === "none") {
      element.style.display = 'block';
      addId.style.display = 'block';
      ruleId.style.display = 'none';
      sectionIcon.innerHTML = `<i class="fa fa-angle-up"> </i>`;
    } else {
      element.style.display = 'none';
      addId.style.display = 'none';
      ruleId.style.display = 'none';
      sectionIcon.innerHTML = `<i class="fa fa-angle-down"> </i>`;
    }
  }

  sectionTitle.addEventListener("click", sectionHideShow);
  sectionIcon.addEventListener("click", sectionHideShow);


  newSection.appendChild(questionRule);
  questionRule.appendChild(qbtn);
  qbtn.appendChild(questionBtn);
  qbtn.appendChild(ruleBtn);
  questionRule.appendChild(questionsContainer)
  newSection.appendChild(addQuestionBtn);
  newSection.appendChild(newRuleDiv);
  newSection.appendChild(addRuleBtn);

});

sectionsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && event.target.innerText === "+ADD QUESTION") {

    var total_questions = document.getElementById('total_questions').value
    total_questions = parseInt(total_questions) + 1;
    document.getElementById('total_questions').value = total_questions;


    // Add question logic
    const section = event.target.parentNode;
    const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, section) + 1;
    const questionsContainer = section.querySelector(".questions-container");
    const questionCount = questionsContainer.children.length;
    questionCounts[sectionIndex] = questionCount;

    const newQuestion = document.createElement("div");
    var inputSectionTemplate = document.getElementById("inputSectionTemplate");
    // inputSectionTemplate.querySelector('.questionSelect').setAttribute("name","questionstoggle["+sectionIndex+"]["+(questionCount + 1)+"]");
    var newSection = inputSectionTemplate.innerHTML;
    console.log(newSection);
    // newSection.setAttribute("name","questionstoggle["+sectionIndex+"]["+(questionCount + 1)+"]")
    newQuestion.classList.add("question");
    newQuestion.innerHTML = `
    <input type="hidden" name="questionscount[${sectionIndex}][${questionCount + 1}]" value="${sectionIndex}.${questionCount + 1}"/>
          <span class="subSection">
          ${sectionIndex}.${questionCount + 1}</span>
          <input type="text" name="questionsname[${sectionIndex}][${questionCount + 1}]" placeholder="Enter your question" />
          <button  type="button" class="infoicon-btn"><i class="fa fa-info-circle"></i></button>
          <label>
            <input type="checkbox"  name="questionsrequired[${sectionIndex}][${questionCount + 1}]"/>
            <span style="font-size:11px;">Required</span>
          </label>
          `+newSection+`
          <button  type="button" class="copyicon-btn"><i class="far fa-copy"></i></button>
          <button  type="button" id="delbtn" class="delete-btn"><i class="far fa-trash-alt" id="qDel"></i></button>
        `;

       const staticlookup = newQuestion.querySelector('select').setAttribute("name","questionstoggle["+sectionIndex+"]["+(questionCount + 1)+"]");

       const informationSection = document.createElement('div');
       informationSection.classList.add('information-section');
       informationSection.setAttribute("id","inf");
       informationSection.style.display = 'none';
       informationSection.innerHTML = `
           <div> <input id="infoinput1" type="text" placeholder="" /><label Id="infonote">NOTE</label></div>
           <div><input id="infoinput2" type="text" placeholder="" /><label Id="infocategory">CATEGORY</label></div>
           <div> <input id="infoinput3" type="text" placeholder="" /><label Id="infoid">EXTERNAL REFERENCE ID</label></div>
         `;
  
       const ifq = newQuestion.querySelector('.infoicon-btn');
       newQuestion.querySelector('.infoicon-btn').addEventListener('click', function () {
           if (informationSection.style.display === 'none') {
               informationSection.style.display = 'grid';
               informationSection.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
               ifq.style.color = 'green';
           } else {
               informationSection.style.display = 'none';
               informationSection.style.gridTemplateColumns='2fr 1fr 1fr';
               ifq.style.color = '#216c98';
           }
       });
       newQuestion.querySelector('.questionSelect').addEventListener('change', function() {
           const selectedOption = this.value;
           const additionalInput = informationSection.querySelector('.additional-input');
           if (selectedOption === 'childLookup') {
               informationSection.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
               if (additionalInput) {
                   additionalInput.style.display = 'grid';
                   informationSection.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
      
               } else {
                   const newAdditionalInput = document.createElement('div');
                   newAdditionalInput.classList.add('additional-input');
                   newAdditionalInput.innerHTML = `
                       <div><select id="infoinput4" type="text" placeholder="" >
                       <option value="toggle">ABC Company</option>
                       <option value="childLookup">Accenture</option>
                       <option value="countries">ABB AG</option>
                       <option value="yes/no">Abbott</option>
                       </select><label Id="infoid">LINK TO QUESTION</label></div>
                     `;
                   informationSection.appendChild(newAdditionalInput);
               }
            } else {
                 if (additionalInput) {
                     additionalInput.style.display = 'none';
                     informationSection.style.gridTemplateColumns='2fr 1fr 1fr';
                 }
           }
       });

    document.addEventListener("click", (event) => {
      const qDel = document.querySelectorAll("#qDel");
      qDel.forEach((i) => {
        if (i !== event.target) {
          i.classList.remove("highlighted");
        }
      });
    });

    // ---------moveup and movedown in question section---------------

    const questionUpBtn = document.createElement("span");
    questionUpBtn.setAttribute("id", "section-up-btn");
    questionUpBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    questionUpBtn.addEventListener("click", () => {
      const prevQuestion = newQuestion.previousSibling;
      if (prevQuestion) {
        questionsContainer.insertBefore(newQuestion, prevQuestion);
        //  updateSectionNumbers();
        updateQuestionNumbers();
      }
    });

    const questionDownBtn = document.createElement("span");
    questionDownBtn.setAttribute("id", "section-down-btn");
    questionDownBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
    questionDownBtn.addEventListener("click", () => {
      const nextQuestion = newQuestion.nextSibling;
      if (nextQuestion) {
        questionsContainer.insertBefore(nextQuestion, newQuestion);
        //  updateSectionNumbers();
        updateQuestionNumbers();
      }
    });

    function updateSectionNumbers() {
      const sections = sectionsContainer.querySelectorAll(".section");
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        section.querySelector("h3").innerHTML = `${i + 1}`;
      }
    }

    function updateQuestionNumbers() {
      const sections = sectionsContainer.querySelectorAll(".section");
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const questionsContainer = section.querySelector(".questions-container");
        const questions = questionsContainer.querySelectorAll(".question");
        for (let j = 0; j < questions.length; j++) {
          const question = questions[j];
          question.querySelector("span").innerText = `${i + 1}.${j + 1}`;
        }
      }
    }

    updateSectionNumbers();
    updateQuestionNumbers();

    // -------------------------------------------------------------
    newQuestion.appendChild(questionUpBtn)
    newQuestion.appendChild(questionDownBtn)
    questionsContainer.appendChild(newQuestion);

    questionsContainer.appendChild(informationSection);


    document.addEventListener("click", (event) => {
      const qDel = document.querySelectorAll("#qDel");
      qDel.forEach((i) => {
        if (i !== event.target) {
          i.classList.remove("highlighted");
        }
      });
    });

    // Update question numbers for subsequent questions in the same section
    for (let i = questionCount; i < questionsContainer.children.length; i++) {
      const question = questionsContainer.children[i];
      question.querySelector("span").innerText = `${sectionIndex}.${i + 1}`;
    }
  } else if (event.target.closest(".delete-btn")) {
    const question = event.target.closest(".question");
    const section = event.target.closest(".section");
    const deleteButton = event.target;


    if (deleteButton.classList.contains("highlighted")) {
      // If the delete button is already highlighted, remove the question
      const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, section);
      question.remove();
      questionCounts[sectionIndex]--;
      const questionsContainer = section.querySelector(".questions-container");
      const questions = questionsContainer.querySelectorAll(".question");
      for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        question.querySelector("span").innerText = `${sectionIndex + 1}.${i + 1}`;
      }
      deleteButton.classList.remove("highlighted");
    } else {
      // If the delete button is not highlighted, add the "highlighted" class
      deleteButton.classList.add("highlighted");
    }
  }
});
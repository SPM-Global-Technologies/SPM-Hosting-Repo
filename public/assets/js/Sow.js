// OpenPopUP Js Function

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popupContainer = document.getElementById("popupContainer");
openBtn.addEventListener("click", () => {
    popupContainer.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    popupContainer.style.display = "none";
});  

// Js Search-Bar & Filter Function

function myFunctionSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu1");
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


// Sow New Button Show and hide  textArea section js

  // Function to add a new section
  function addSection() {
    var sectionContainer = document.getElementById('section-container');
    var newSection = document.createElement('div');
    newSection.classList.add('section');
    var newEditor = document.createElement('textarea');
    newEditor.classList.add('editor');
    newSection.appendChild(newEditor);
    var deleteSectionBtn = document.createElement('button');
    deleteSectionBtn.innerText = 'Delete';
    deleteSectionBtn.classList.add('delete-section-btn');
  
    newSection.appendChild(deleteSectionBtn);
    sectionContainer.appendChild(newSection);

    tinymce.init({
        selector: '.editor:last-of-type',
        plugins: 'advlist autolink lists link image charmap print preview anchor table code fullscreen emoticons spellchecker',
        toolbar: 'undo redo | bold italic underline strikethrough | bullist numlist | link image | table | code | fullscreen | emoticons | spellchecker',
        menubar: false,
        statusbar: false,
        container: false
    });
}


// Delete section when delete button is clicked
var sectionContainer = document.getElementById('section-container');
sectionContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-section-btn')) {
        var section = event.target.closest('.section');
        section.remove();
    }
});

// Bind addSection function to add section button
var addSectionBtn = document.getElementById('add-section-btn');
addSectionBtn.addEventListener('click', addSection);
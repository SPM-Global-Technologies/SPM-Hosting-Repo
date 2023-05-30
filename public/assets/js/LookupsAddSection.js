const toggleButton = document.getElementById("toggleButton");
const inputWrapper = document.getElementById("inputWrapper");
const inputSectionTemplate = document.getElementById("inputSectionTemplate");

let sectionCount = 0;

toggleButton.addEventListener("click", function () {
    addNewSection();
});

function addNewSection() {
    sectionCount++;
    const newSection = inputSectionTemplate.content.cloneNode(true);
    newSection.querySelector("input[type='text']").value = '';
    var copy_select = document.querySelector('#copyparentlookup')
    newSection.querySelector("#parentlookup").innerHTML = copy_select.innerHTML;
    inputWrapper.appendChild(newSection);

    const deleteBtn = newSection.querySelector("i");
    deleteBtn.addEventListener("click", function () {
        inputWrapper.removeChild(newSection);
        sectionCount--;

        // Hide "Add Section" button if there is only one section
        if (sectionCount === 1) {
            const addSectionBtn = document.querySelector(".addSection");
            addSectionBtn.style.display = "none";
        }
    });

    // Show "Add Section" button if there is more than one section
    if (sectionCount > 1) {
        const addSectionBtn = document.querySelector(".addSection");
        addSectionBtn.style.display = "flex";
    }
}

// Add event listener to all delete buttons
inputWrapper.addEventListener("click", function (e) {
    if (e.target && e.target.matches("i.fa-solid.fa-xmark")) {
        const section = e.target.closest(".inputSection");
        inputWrapper.removeChild(section);
        sectionCount--;

        // Hide "Add Section" button if there is only one section
        if (sectionCount === 1) {
            const addSectionBtn = document.querySelector(".addSection");
            addSectionBtn.style.display = "none";
        }
    }
});
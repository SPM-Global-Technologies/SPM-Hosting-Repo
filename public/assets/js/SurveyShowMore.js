function myFunctionSurvey() {
    var dots = document.getElementById("dotssurvey");
    var moreText = document.getElementById("moresurvey");
    var btnText = document.getElementById("myBTNsurvey");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "VIEW MORE";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "VIEW LESS";
        moreText.style.display = "inline";
    }
}


// <!-- js for dropdown -->
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function openClose(){
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");
  
    if(sidebar.style.width === "250px"){
      sidebar.style.width = "0";
      main.style.marginRight = "0px";
    }else{
      sidebar.style.width = "250px";
      main.style.marginRight = "250px";
    }
  }

// files upload in sidebar files section

function displayFileName() {
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];



        // Create list item to hold file name, download button, check button, and delete button
        const li = document.createElement('li');
        li.id = "savedFileList";



        // Create link to download the file
        const downloadLink = document.createElement('a');
        downloadLink.id = "downloadFile";
        downloadLink.setAttribute('href', window.URL.createObjectURL(file));
        downloadLink.setAttribute('download', file.name);
        downloadLink.textContent = file.name;
        li.appendChild(downloadLink);



        // Create check button to mark file for deletion
        const checkIcon = document.createElement('i');
        checkIcon.classList.add('fa', 'fa-check', 'file-check-icon');
        checkIcon.id = 'checkFile';
        li.appendChild(checkIcon);



        const downloadIcon = document.createElement('i');
        // downloadIcon.classList.add('fa', 'fa-download', 'file-download-icon');
        downloadIcon.id = 'downloadFile';
        downloadIcon.addEventListener('click', () => {
            const url = window.URL.createObjectURL(file);
            const a = document.createElement('a');
            a.href = url;
            a.download = file.name; // Set the download attribute
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        });
        li.appendChild(downloadIcon);

        const deleteIcon = document.createElement('i');
        // deleteIcon.classList.add('fa', 'fa-trash', 'file-delete-icon');
        deleteIcon.id = "deleteFile";
        li.appendChild(deleteIcon);
        fileList.appendChild(li);
        // Set up event listener for the check icon
        checkIcon.addEventListener('click', () => {
            if (checkIcon.classList.contains('fa-check')) {
                checkIcon.classList.remove('fa-check');
                checkIcon.classList.add('fa-times');
                checkIcon.style.color = "red";
            } else {
                fileList.removeChild(li);
            }
        });

        // Clear the file input
        fileInput.value = '';
    }
}


let titleCounter = 1;
const plusIcon = document.querySelector('.titleSurvey');

plusIcon.addEventListener('click', () => {
    const inputTitle = document.querySelector('.inputTitle');
    inputTitle.value = `*New Survey*(${titleCounter})`;
    titleCounter++;
});




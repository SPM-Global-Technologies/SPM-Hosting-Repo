function myFunction3People(){
    var dots=document.getElementById("dotspeople");
    var moreText=document.getElementById("morepeople");
    var btnText=document.getElementById("myBTNpeople");

    if(dots.style.display==="none"){
       dots.style.display="inline";
       btnText.innerHTML="VIEW MORE";
       moreText.style.display="none";
    }
    else{
        dots.style.display="none";
        btnText.innerHTML="VIEW LESS";
        moreText.style.display="inline";
    }
}

// People Sidebar Js


function openClosePeople(){
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");
    let avataricon = document.getElementById('avatarposition');
  
    if(sidebar.style.width === "250px"){
      sidebar.style.width = "0";
      main.style.marginRight = "0px";
      avataricon.style.marginLeft="33%"; 
    }else{
        avataricon.style.marginLeft="24%";  
      sidebar.style.width = "250px";
      main.style.marginRight = "250px";
      avataricon.style.transition = "0.5s";
    }
  }

//   Js Function to display Roles & Skills
  let dropContainerroles = document.getElementById('dcRoles');
  dropContainerroles.style.display="none"

 function showRoles(){
    if(dropContainerroles.style.display==="none"){
        dropContainerroles.style.display="block";
    }
    else{
        dropContainerroles.style.display="none"
    }
 }


 let dropContainerSkills = document.getElementById('dcSkills');
 dropContainerSkills.style.display="none"

 function showSkills(){
    if(dropContainerSkills.style.display==="none"){
        dropContainerSkills.style.display="block";
    }
    else{
        dropContainerSkills.style.display="none"
    }
 }
function myFunctionpopupSurvey(){
    var dots=document.getElementById("dotspopupsurvey");
    var moreText=document.getElementById("morepopupsurvey");
    var btnText=document.getElementById("myBTNpopupsurvey");

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

function myFunctionpopupSurvey1() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearchpopupsurvey");
    filter = input.value.toUpperCase();
    ul = document.getElementById("surveyName");
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
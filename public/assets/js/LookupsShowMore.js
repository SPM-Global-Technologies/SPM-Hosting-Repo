function myFunctionlookups(){
    var dots=document.getElementById("dotslookups");
    var moreText=document.getElementById("morelookups");
    var btnText=document.getElementById("myBTNlookups");

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
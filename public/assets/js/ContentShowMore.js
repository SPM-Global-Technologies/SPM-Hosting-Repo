function myFunctionContent(){
    var dots=document.getElementById("dotscontent");
    var moreText=document.getElementById("morecontent");
    var btnText=document.getElementById("myBTNcontent");

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
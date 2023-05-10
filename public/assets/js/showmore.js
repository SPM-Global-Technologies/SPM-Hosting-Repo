function myFunction3(){
    var dots=document.getElementById("dots");
    var moreText=document.getElementById("more");
    var btnText=document.getElementById("myBTN");

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
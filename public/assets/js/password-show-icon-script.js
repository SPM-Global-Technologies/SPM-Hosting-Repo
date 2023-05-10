var a;
function pass(){
    if(a==1){
        document.getElementById('password').type='password';
        document.getElementById('pass-icon').src='./assets/images/pass-hide.png';
        a=0;
    }
    else
    {
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').src='./assets/images/pass-show.png';   
        a=1;
    }
}

// function confirm(){
//     alert("Registration Successfull Plz Login!!!");
// }
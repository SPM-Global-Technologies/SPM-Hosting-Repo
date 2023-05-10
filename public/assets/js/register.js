form.addEventListener("submit", () => {
    const register = {
        email: email.value,
        password: password.value,
        first_name: fname.value,
        last_name: lname.value,
        phone_number: number.value
    }
    if(password.value != confirm_password.value){
      alert("invalid password");
      return;
    }
    fetch("/api/register", {
        method :"POST",
        body: JSON.stringify(register),
        headers : {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
       .then(data => {
        console.log(data);

        if(data.status == "error"){
          alert(data.error)
          // console.log(data.error);

          // success.style.display = "none"  
          // error.style.display = "block" 
          // error.innerText = data.error
        } else{
          alert(data.error)
          // console.log(data.error);

        }
       })

    
})






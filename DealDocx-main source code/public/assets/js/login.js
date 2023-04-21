form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login", {
        method :"POST",
        body: JSON.stringify(login),
        headers : {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
       .then(data => {
        if(data.status == "error"){
          alert(data.error)
          // console.log(data.error);

          // success.style.display = "none"  
          // error.style.display = "block" 
          // error.innerText = data.error
        } else{
          alert(data.success);
          window.location.href="/";
          // console.log(data.error);

        }
       })

    
})






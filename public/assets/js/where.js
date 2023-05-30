
  
  function abc() {
    const myDropdown1 = document.getElementById("myDropdown1");
        myDropdown1.style.display = "block";
        // myDropdown1.style.zIndex=1;

  };

  function def() {
    const hover = document.getElementById('myDropdown1');
    const firstInline = document.getElementById("firstInline");
    if (firstInline.style.display === "none") {
        firstInline.style.display = "block";
        // firstInline.style.zIndex=1;
    }
    else {
        firstInline.style.display = "block";
        hover.style.display = "none";
    }
  
  };


  function  pqr(){

    // const tagul = document.getElementById('myMenu');
    const dropdown3 = document.getElementById('dropdown3');
    const firstInline = document.getElementById('firstInline');
    const myBtn3=document.getElementById('myBtn3')

    if(firstInline.style.display==="block"){

      firstInline.style.display="none";
      //    myBtn3.style.display="block";
      dropdown3.style.display = "block";
     
    }
    else{
      firstInline.style.display="block";
    }

  }

// account

function account() {
  const myBtna1 = document.getElementById("myBtna1");
  const myDropdownacc1 = document.getElementById("myDropdownacc1");
  if (myDropdownacc1.style.display === "none") {
      myDropdownacc1.style.display = "block";
      // myDropdown1.style.zIndex=1;
  }
  else {
      myDropdownacc1.style.display = "none";
  }
};

function acc1() {
  const myBtn1 = document.getElementById("myBtnacc1");
  const hover = document.getElementById('myDropdownacc1');
  const firstInlineacc = document.getElementById("firstInlineacc");
  if (firstInlineacc.style.display === "none") {
      firstInlineacc.style.display = "block";
      // firstInline.style.zIndex=1;
      
  }
  else {
      firstInlineacc.style.display = "block";
      hover.style.display = "none";
  }

};

// function openNav(){
//     document.getElementById("mySidebar").style.width="250px";
//     document.getElementById("main").style.marginLeft="250px";
// }
// function closeNav(){
//     document.getElementById("mySidebar").style.width="0";
//     document.getElementById("main").style.marginLeft="0";
// }

function openClose() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginRight = "0px";
    } else {
        sidebar.style.width = "250px";
        main.style.marginRight = "250px";
    }

}



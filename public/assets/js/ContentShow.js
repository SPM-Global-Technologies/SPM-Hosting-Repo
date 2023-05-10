
function showContent() {
    
    var div = document.getElementById("createcontent");
    var head = document.getElementById("headercontent");
    if (div.style.display === "none") {
        
        div.style.display = "block";
        head.style.marginTop="70px";
    } else {
        div.style.display = "none";
    }
}
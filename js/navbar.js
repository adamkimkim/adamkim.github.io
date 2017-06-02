
function menu(){
    var nav = document.getElementById("nav");
    if (nav.className === "navbar") {
        nav.className += " responsive";
    }
    else {
        nav.className = "navbar";
    }
}

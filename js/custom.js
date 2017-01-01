function openNav() {
    var x = document.getElementById("menu");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

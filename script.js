function myFunction() {
    var x = document.getElementById("JsMenuTop");
    if (x.className === "MenuTop") {
        x.className += " responsive";

    } else {
        x.className = "MenuTop";
    }
}

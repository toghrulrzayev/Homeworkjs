function myFunct() {
    let size = document.getElementsByTagName("li");
    let i;
    for (i = 0; i < size.length; i++) {
        size[i].style.fontSize = "25px";
    }
}

function myFunction() {
    var li = document.getElementsByClassName("lists");
    var i;
    for (i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "red";
    }
}

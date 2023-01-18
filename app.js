var i = 0;
var images = [];
var time = 3000;

images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';

function changeImg() {
    document.drag.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}


function scrollDivs() {
    var parentDiv = document.querySelector(".event-panel")
    var childDivs = document.querySelectorAll(".event-panel-links");

    var i = 0;

    setInterval(function () {
        parentDiv.scrollTop = childDivs[i].offsetTop;
        i++;
        if (i === childDivs.length) {
            i = 0;
        }
    }, 2000)

    console.log("error not");
    console.log(childDivs);
}

function btnclick1() {
    var x = document.getElementById("link-list1");
    var y = document.getElementById("link-list2");
    var z = document.getElementById("link-list3");
    var a = document.getElementById("list-link");
    a.style.display = "none"
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    var m = document.getElementById("announ");
    m.style.backgroundColor = "#5BC0DE";
    var n = document.getElementById("vacan");
    n.style.backgroundColor = "white";
    n.style.color = "black";
}

function btnclick2() {
    var x = document.getElementById("link-list1");
    var y = document.getElementById("link-list2");
    var z = document.getElementById("link-list3");
    var a = document.getElementById("list-link");
    a.style.display = "none"
    x.style.display = "none";
    z.style.display = "none";
    y.style.display = "block";
    var m = document.getElementById("vacan");
    m.style.backgroundColor = "#5BC0DE";
    m.style.color = "white";
    var n = document.getElementById("announ");
    n.style.backgroundColor = "white";
    n.style.color = "black";
}
function btnclick3() {
    var x = document.getElementById("link-list1");
    var y = document.getElementById("link-list2");
    var z = document.getElementById("link-list3");
    var a = document.getElementById("list-link");
    a.style.display = "none"
    x.style.display = "none";
    z.style.display = "block";
    y.style.display = "none";
}

window.onload = function () {
    changeImg();
    mediaimages();
}


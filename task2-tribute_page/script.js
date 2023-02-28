var a = document.getElementById("star1");
var b = document.getElementById("star2");
var c = document.getElementById("star3");
var d = document.getElementById("star4");
var e = document.getElementById("star5");
var f = document.getElementById("star6");

setInterval(move, 100);

console.log("Hello");

function move() {
    var x = Math.random() * 1500;
    var y = Math.random() * 900;
    a.style.left = x + "px";
    a.style.top = y + "px";
    var x = Math.random() * 1500;
    var y = Math.random() * 900;
    b.style.left = x + "px";
    b.style.top = y + "px";
    var x = Math.random() * 1500;
    var y = Math.random() * 900;
    c.style.left = x + "px";
    c.style.top = y + "px";
    var x = Math.random() * 1500;
    var y = Math.random() * 900;
    d.style.left = x + "px";
    d.style.top = y + "px";
    var x = Math.random() * 1500;
    var y = Math.random() * 900;
    e.style.left = x + "px";
    e.style.top = y + "px";
    var x = Math.random() * 1500;
    var y = Math.random() * 900;
    f.style.left = x + "px";
    f.style.top = y + "px";
}
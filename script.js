var line1 = document.querySelector("#line1");
var elem1 = document.querySelector("#elem1");
var cur = document.querySelector("#cursor");

// Update cursor position
document.addEventListener("mousemove", function (dets) {
    cur.style.top = `${dets.clientY}px`;
    cur.style.left = `${dets.clientX}px`;
});

// Line 1 hover effects
line1.addEventListener("mouseenter", function () {
    cur.style.width = "140px";
    cur.style.height = "140px";
    cur.innerHTML = "See Profile";
    elem1.style.opacity = 1;

    // Trigger hover style for h1
    line1.querySelector("h1").style.fontSize = "5vw";
});

line1.addEventListener("mouseleave", function () {
    cur.style.width = "0px";
    cur.style.height = "0px";
    cur.innerHTML = "";
    elem1.style.opacity = 0;

    // Reset h1 font size
    line1.querySelector("h1").style.fontSize = "3vw";
});

// Similar adjustments for other lines
["line2", "line3", "line4", "line5", "line6"].forEach((lineId, idx) => {
    const line = document.querySelector(`#${lineId}`);
    const elem = document.querySelector(`#elem${idx + 2}`);

    line.addEventListener("mouseenter", function () {
        cur.style.width = "140px";
        cur.style.height = "140px";
        cur.innerHTML = "See Profile";
        elem.style.opacity = 1;

        line.querySelector("h1").style.fontSize = "5vw";
    });

    line.addEventListener("mouseleave", function () {
        cur.style.width = "0px";
        cur.style.height = "0px";
        cur.innerHTML = "";
        elem.style.opacity = 0;

        line.querySelector("h1").style.fontSize = "3vw";
    });
});

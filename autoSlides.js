/*eslint-env browser*/

setImages();

function setImages() {
    var i;
    var left_pos = 0;
    var src = document.getElementById("background-slideshow");
    
    for (i = 1; i <= 10; i++) {
        var img = document.createElement("img");
        img.setAttribute("class", "first");
        img.src = "images/banner/slides-" + i % 5 + ".jpg";
        img.style.left = left_pos + "px";
        left_pos += 455;
        src.appendChild(img);
    }
}


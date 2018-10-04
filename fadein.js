/*eslint-env browser*/
/*globals $:false */

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + 700;
    var tags = $("#who-is-she");
    
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
})
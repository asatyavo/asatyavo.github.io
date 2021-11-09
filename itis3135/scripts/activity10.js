$(document).ready(function() {


    // preload the image for each link
    $("#image_list a").each(function () {

        var preload = new Image();
        preload.src = $(this).attr("href");
    });
    // set up the event handlers for each link
    $("#image_list a").click(function (evt) {
            // get the image URL and caption for each image and animate the caption

            var img = $(this).attr("href");
            var cap = $(this).attr("title");

            $("#caption").fadeOut(3000, function () {
                $("#caption").text(cap).fadeIn(3000);
            });

            $("#image").fadeOut(3000, function () {
                $("#image").attr("src", img).fadeIn(3000);
                $("#caption").animate({"font-size": "2em"},3000);
            });

            // cancel the default action of each link
            evt.preventDefault();
    });
    // move the focus to the first link
    $("#image_list a").first().focus();
});// end ready
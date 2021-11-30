$(document).ready(function() {

    var pics = [
        "images/lorelai.jpg",
        "images/abed.jpg",
        "images/katara.jpg",
        "images/jim.jpg",
        "images/leslie.jpg",
        "images/love.jpg"
    ]

        $("#images a").each(function() { 
            var gameImage = new Image(); 
            gameImage.src = $(this).attr("href"); 
        });

        $("#images a").click(function(evt){
            var imageHref = $(this).attr("href"); 
            $("#main_image").attr("src", imageHref);

            evt.preventDefault();
        });
        


});
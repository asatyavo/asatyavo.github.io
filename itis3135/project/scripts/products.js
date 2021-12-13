$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "products.json",
        beforeSend: function() {
            $("#pictures").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#pictures").html("");
            var html="";
            $.each(data, function() {
                $.each(this, function(key, value) {

                        html += "<a data-lightbox="+'"imageset"'+" href=" + value.image +">"
                        + "<img src=" +'"'+ value.image +'"'+ "width='200'" +">"
                        + "</a>";

                    $('#pictures').html(html);
                });
            });
        }
    });
});
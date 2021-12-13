$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "Aarushi.json",
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
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $('#pictures').append(
                        "<img src= ' " + value.image + " '> </img>"
                    );
                });
            });
        }
    });
});
$(document).ready(function () {
	$("#nav_list li").click(function() {
		var title = $(this).children("a").attr("title");
		var filename = "json_files/"+title+".json";
		consumeJSON(filename);
	});
});

function consumeJSON(jsonfile) {
	$.ajax({
		url: jsonfile,
		dataType: "text",
		success: function (data) {
			var json = $.parseJSON(data);
			$("main > h1").html(json.speakers[0].title);
			$("main > h2").html(json.speakers[0].month);
			$("main > h3").html(json.speakers[0].speaker)
			$("main > img").attr("src", json.speakers[0].image);
			$("main > p").html(json.speakers[0].text);
		}
	});
}
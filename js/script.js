
$('.bxslider').bxSlider({
       auto: true,
       // autoControls: true,
       stopAutoOnClick: true,
       slideWidth: 800,
       speed: 500,
       mode: "horizontal",
});
$(document).ready(function(){

var books = $("#catalogue")
console.log(catalog[1]["name"]);

for (var i = 0; i < catalog.length; i++) {

              var div = $("<div>");
              $(div).addClass("col-12 col-md-6");
              var article = $("<article>");
              var img = $("<img>");
              $(img).addClass("img-fluid");
              $(img).attr("src", catalog[i]["pictures"])
              var title = $("<h3>");
              $(title).text(catalog[i]["name"]);
              var description = $("<p>");
              $(description).text(catalog[i]["description"]);
              var link = $("<a>");
              $(link).attr("href", "page_produit.html")
              var button = $("<button>");
              $(button).addClass("btn btn-secondary");
              $(button).text("view more");
              $(books).append(div);
              $(div).append(article);
              $(article).append(img);
              $(article).append(title);
              $(article).append(description);
              $(article).append(link);
              $(link).append(button);
};


});

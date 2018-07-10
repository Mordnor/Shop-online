$(document).ready(function() {


    var books = $("#catalogue")

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
        $(link).attr("href", "page_produit.html?page_produit_id=" + i)
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

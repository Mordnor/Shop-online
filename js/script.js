$('.bxslider').bxSlider({
    auto: true,
    // autoControls: true,
    stopAutoOnClick: true,
    slideWidth: 800,
    speed: 500,
    mode: "horizontal",
});
$(document).ready(function() {

    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

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
    var i = GET_PARAM("page_produit_id");
    var myproduct = catalog[i];


    $(".article_produit h2").text(myproduct["name"]);
    $(".article_produit h3").text("Price : "+myproduct["price"]+"€");
    $(".article_produit p").text(myproduct["description"]);
    $(".article_produit img").attr("src", myproduct["pictures"]);


    for (var j = 0; j < myproduct["quantity"]; j++) {
        var optionQuantite = $("<option>");
        $("#quantite").append(optionQuantite);
        $(optionQuantite).text(j);
    }

    $("#ajout_panier").click(addToCart);

    function addToCart(){
        var li = $("<li>");
        $("#cart ul").append(li)
        $(li).addClass("list-group-item");
        var nbProduct = $("#quantite").val()
        $(li).text(nbProduct + " " +myproduct["name"]+ " : "+ " " + myproduct["price"]+"€")
    };
});

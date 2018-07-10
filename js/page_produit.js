$(document).ready(function() {

    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    var i = GET_PARAM("page_produit_id");
    var myproduct = catalog[i];


    $(".article_produit h2").text(myproduct["name"]);
    $(".article_produit h3").text("Price : " + myproduct["price"] + "€");
    $(".article_produit p").text(myproduct["description"]);
    $(".article_produit img").attr("src", myproduct["pictures"]);
    $("#ajout_panier").attr("value", "${i}")

    console.log(i);

    for (var j = 0; j < myproduct["quantity"]; j++) {
        var optionQuantite = $("<option>");
        $("#quantite").append(optionQuantite);
        $(optionQuantite).text(j);
    }




});

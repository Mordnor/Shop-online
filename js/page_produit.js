

$(document).ready(function() {
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    var i = GET_PARAM("page_produit_id");
    var myproduct = catalog[i];


    $(".article_produit h2").text(myproduct["name"]);
    $(".article_produit h3").text("Price : "+myproduct["price"]+"€");
    $(".article_produit p").text(myproduct["description"]);
    $(".article_produit img").attr("src", myproduct["pictures"]);

    var cart = {};

    for (var j = 0; j < myproduct["quantity"]; j++) {
        var optionQuantite = $("<option>");
        $("#quantite").append(optionQuantite);
        $(optionQuantite).text(j);
    }

    for(var i=0;i<catalog.length;i++){
    var product = catalog[i]
    $("#catalog").append(`
        <div class="col-3 mb-5">
            <h3>${product.name}</h3>
            <h4>${product.price}€</h4>
            <button class="add2Cart" type="button" value="${i}">Ajouter</button>
        </div>
    `)
}

    function saveCart(){
        var cart_json = JSON.stringify(cart);
        localStorage.setItem("product", cart_json)
    }
    function loadCart(){
        var cart_json = localStorage.getItem("cart");
        cart = JSON.parse(cart_json);
    }

    function displayCart(){
        $("#cart").html("")
        for (i in cart) {
             $("#cart").append($(`<li>${catalog[i].name} x ${cart[i]}</li>`))
         }
    }

    loadCart()
    displayCart()

    $("#ajout_panier").click(addToCart);
    function addToCart(){
        // var li = $("<li>");
        // $("#cart ul").append(li)
        // $(li).addClass("list-group-item");
        // var nbProduct = $("#quantite").val()
        // $(li).text(nbProduct + " " +myproduct["name"]+ " : "+ " " + myproduct["price"]+"€")
        var productID = $(this).val()
        if (cart[productID]) {
            cart[productID] = 1;
        }else {
            cart[productID]++;
        }
         if (cart[i] == myproduct["quantity"]) {
            alert("stop")
            $("#ajout_panier").prop("disabled", true);
        }
        saveCart()
        loadCart()
    };

});

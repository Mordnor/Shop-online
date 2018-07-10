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

    var i = GET_PARAM("page_produit_id");
    var myproduct = catalog[i];

    var cart = {};
    function saveCart() {
        var cart_json = JSON.stringify(cart);
        localStorage.setItem("product", cart_json);
    }

    function loadCart() {
        var cart_json = localStorage.getItem("product");
        cart = JSON.parse(cart_json)||{};
    }

    function displayCart() {
        $("#cart ul").html("")
        for (var i in cart) {
            $("#cart ul").append($(`<li class="list-group-item">${catalog[i].name} x ${cart[i]} | ${catalog[i].price + '€'} = ${catalog[i].price * cart[i]}<button type="button" class="plus" value="${i}">+</button><button type="button" class="moins" value="${i}"></button></li>`));

        }
        $(".plus").click(plus)
        function plus() {
            var productId = $(this).val()
            cart[productId]++;
            saveCart()
            displayCart()
        };
        $(".moins").click(moins)
        function moins() {
            var productId = $(this).val()
            cart[productId]--;
            saveCart()
            displayCart()
    }

    loadCart()
    displayCart()

    $("#ajout_panier").click(function() {
        var productId = i

        if (cart[productId]) {
            cart[productId]++
        } else {
            cart[productId] = 1
        }
        saveCart()
        displayCart()
        countTotal();
    })

    function countTotal() {
        var total = myproduct['price'] * cart[i];


    }
    countTotal();


    $(".remove").click(remove)
    function remove() {
        $(this).parents('li').remove()

    };



    // function deleteData(){
    //     var cart_json = localStorage.removeItem("product");
    //
    // }
    // deleteData()

});

var inicioPerfil = $("#perfil").offset().top;
//alert(inicioPerfil);

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= inicioPerfil - 52) {
        $("nav").addClass("fixed");
        $(".nome").fadeIn(500);
    } else {
        $("nav").removeClass("fixed");
        $(".nome").fadeOut(500);
    }
});

$("nav li a").click(function() {
    var clickBt = $(this).attr("class").split("-");
    $('html,body').animate({
        scrollTop: $('#'+clickBt[1]).offset().top - 52
    });

});

var user = "thiago-mendes";
var getUrl = "https://api.github.com/search/repositories?q=%20+fork:true+user:" + user;

$.ajax({
    method: 'GET',
    url: getUrl,
    success: function(data) {
        var resultado = data.items;
        for (i in data.items) {
            $("#resultado").append("<div class='col-3'> <p> <a href='"+ data.items[i].html_url +"' target='_blank'>" + data.items[i].name + "</a></p></div>");
        }
    }
});


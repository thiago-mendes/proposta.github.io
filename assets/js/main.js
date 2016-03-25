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

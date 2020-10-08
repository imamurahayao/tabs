//jQuery UI　tabs
$(function () {
    $('#tabs').tabs({
        beforeLoad: function (event, ui) {
            ui.jqXHR.error(function () {
                ui.panel.html("このタブのコンテンツのロードに失敗しました。");
            });
        }
    });
});

//jQuery slick
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    prevArrow: '<img src="image/left.png" class="arrow prev">', // <の画像を入れる
    nextArrow: '<img src="image/right.png" class="arrow next">', // >の画像を入れる

});

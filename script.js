$(document).ready(function(){
    $("#greeting").delay(1500).fadeTo(2500, 1 );
    $("#invitation").delay(3000).fadeTo(3500, 1 );
    $('.upper_menu_item, .menu_list_item, #settings_block').hover(function() {
        $(this).stop().animate({ backgroundColor: "#A9A9A9"}, 400);
    },function() {
        $(this).stop().animate({ backgroundColor: "#D3D3D3" }, 800);
    });
    $("#menu").click(function() {
        $("#menu_list").each(function(index) {
            $(this).delay(600 * index).fadeIn(600);
        });
    });
    $("#settings").click(function(){
        $("#settings_block").fadeIn(600);
    });
    $("#settings").mouseleave(function() {
        $("#settings_block").fadeOut(600);
    });
    $("#menu").mouseleave(function() {
        $("#menu_list").each(function(index) {
            $(this).delay(600 * index).fadeOut(600);
        });
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>60) {
            $("#text_block").fadeTo(3000, 0.8);
            $("#greeting, #invitation").delay(3000).fadeOut(600);
            $("#contact_block").delay(3000).fadeTo(3000, 0.8);
        }
        });
    });
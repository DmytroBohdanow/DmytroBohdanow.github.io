$(document).ready(function(){
    $('.upper_menu_item, .menu_list_item').hover(function() {
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
    });
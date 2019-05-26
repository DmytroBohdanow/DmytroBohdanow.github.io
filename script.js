$(document).ready(function(){
    $("#greeting").delay(1000).fadeTo(2500, 1);
    $("#greeting").delay(2000).fadeOut(2000);
    $("#text_block").delay(4000).fadeTo(2000, 1);
    $('.upper_menu_item, .menu_list_item, #settings_block, #contact_block').hover(function() {
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

    $("#contact").click(function(){
        $("#contact_block").fadeIn(600);
    });
    $("#contact").mouseleave(function(){
        $("#contact_block").fadeOut(600);
    });

    $("#menu").mouseleave(function() {
        $("#menu_list").each(function(index) {
            $(this).delay(600 * index).fadeOut(600);
        });
    });
    $(window).scroll(function(){
            if($(window).scrollTop()>200){
            $("#skills_block").delay(500).fadeTo(2000, 1);
            $("#language_block").delay(1000).fadeTo(2000, 1);
            $("#experience_block").delay(1500).fadeTo(2000, 1);
        
            }
        });
    });
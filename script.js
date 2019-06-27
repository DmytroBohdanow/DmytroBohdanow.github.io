$(document).ready(function(){
    $("#greeting, #first_slide").delay(1000).fadeTo(2500, 1);
    $("#add_to_foto").delay(5000).fadeTo(3000, 0.5);
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

    $("#menu").mouseleave(function(){
        $("#menu_list").each(function(index) {
            $(this).delay(600 * index).fadeOut(600);
        });
    });
    $(window).scroll(function(){
            if($(window).scrollTop()>200){
                $("#skills_block").delay(500).fadeTo(2000, 1);
                $("#learn_block").delay(1000).fadeTo(2000, 1);
                $("#language_block").delay(1500).fadeTo(2000, 1);
                $("#experience_block").delay(2000).fadeTo(2000, 1);
            }
            if($(window).scrollTop()>900){
                $("#projects_block").delay(500).fadeTo(2000, 1);
            }
        });

    $(".menu_list_item").click(function() {
            let elementClick = $(this).attr("href");
            let destination = $(elementClick).offset().top - 100;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
        });
    let slider_number = 1;
    $("#arrow_right").click(function() {
        slider_number = slider_number + 1;
        if (slider_number == 2) {
            $("#first_slide").fadeOut(400);
            $("#second_slide").delay(1200).fadeTo(800,1);
        }
        else if (slider_number == 3) {
            $("#second_slide").fadeOut(400);
            $("#third_slide").delay(1200).fadeTo(800,1);
        }
        else if (slider_number == 4) {
            $("#third_slide").fadeOut(400);
            $("#first_slide").delay(1200).fadeTo(800,1);
            slider_number = 1;
        }
    });
        $("#arrow_left").click(function() {
            slider_number = slider_number - 1;
            if (slider_number == 0) {
                $("#first_slide").fadeOut(400);
                $("#third_slide").delay(1200).fadeTo(800,1);
                slider_number = 3;
            }
            else if (slider_number == 1) {
                $("#second_slide").fadeOut(400);
                $("#first_slide").delay(1200).fadeTo(800,1);
            }
            else if (slider_number == 2) {
                $("#third_slide").fadeOut(400);
                $("#second_slide").delay(1200).fadeTo(800,1);
            }
    });
    
    });
$(document).ready(function() {
    $("#heading").hover(function() {
        $("#wiki").fadeIn(1500);
    });
    $("#heading, #wiki").mouseleave(function() {
        $("#wiki").fadeOut(3000);
    });

    $(".action_block").hover(function() {
        $(this).stop().animate({ backgroundColor: "#A9A9A9"}, 400);
    },function() {
        $(this).stop().animate({ backgroundColor: "#D3D3D3" }, 800);
    });

    $("#encode_button").click(function() {
        $("#result_area").fadeIn(1500);
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    $("#repeat_button").click(function() {
        $("#result_area").fadeOut(1500);
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    $("#copy_button").click(function() {
        $("#copy_result").fadeIn(1500);
        setTimeout(() => {
            $("#copy_result").fadeOut(3000);
        }, 3000)
    });
})

$(document).ready(function() {
    
    AOS.init();

    $('.course-item p, .view-course-2').hide();

    $(window).scroll(function() { 
		let scrolling = $(window).scrollTop();
		if(scrolling  > 50) {
            $(".main-menu").addClass('header-padding');
		} else {
            $(".main-menu").removeClass('header-padding');
        }
	});
    
    $('.item-1').on('click','.btn-1', function() {

        $('.item-1').addClass('course-item-expanded');
        $('.item-1 p').toggle(500);
        $('#open-1').toggle();
        $('#close-1').toggle();
    });

    $('.item-2').on('click','.btn-2', function() {

        $('.item-2').addClass('course-item-expanded');
        $('.item-2 p').toggle(500);
        $('#open-2').toggle();
        $('#close-2').toggle();
    });

    $('.item-3').on('click','.btn-3', function() {

        $('.item-3').addClass('course-item-expanded');
        $('.item-3 p').toggle(500);
        $('#open-3').toggle();
        $('#close-3').toggle();
    });

    $('.item-4').on('click','.btn-4', function() {

        $('.item-4').addClass('course-item-expanded');
        $('.item-4 p').toggle(500);
        $('#open-4').toggle();
        $('#close-4').toggle();
    });

    $('.item-5').on('click','.btn-5', function() {

        $('.item-5').addClass('course-item-expanded');
        $('.item-5 p').toggle(500);
        $('#open-5').toggle();
        $('#close-5').toggle();
    });

    $('.item-6').on('click','.btn-6', function() {

        $('.item-6').addClass('course-item-expanded');
        $('.item-6 p').toggle(500);
        $('#open-6').toggle();
        $('#close-6').toggle();
    });
});
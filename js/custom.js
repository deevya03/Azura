(function($) {
  "use strict";
  $(function() {
/*
$(window).load(function(){
      $(".loader").fadeOut("slow");
    });
*/
$('#mid_container_wrapper').animate({opacity:1},0);
if  ($().isotope){
  var tempvar = "all";
  $(window).load(function(){
  $(function (){
  var isotopeContainer = $('.isotope-container'),
  isotopeFilter = $('#filter'),
  isotopeLink = isotopeFilter.find('a');
  isotopeContainer.isotope({
  itemSelector : '.isotope-item',
  //layoutMode : 'fitRows',
  filter : '.' +tempvar,
  masonry:  {
  columnWidth:    1,
  isAnimated:     true,
  isFitWidth:     true
  },
  onLayout: function() {
  $('.isotope li').addClass('isotope-ready');
  }

  });
  isotopeLink.click(function(){
  var selector = $(this).attr('data-category');
  isotopeContainer.isotope({
  filter : '.' + selector,
  itemSelector : '.isotope-item',
  //layoutMode : 'fitRows',
  animationEngine : 'best-available'
  });
  isotopeLink.removeClass('active');
  $(this).addClass('active');
  return false;
  });
  });
  $("#filter ul li a").removeClass('active');
  $("#filter ul li."+tempvar+ " a").addClass('active');
  });
}

// Scroll Top
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scroll_top').fadeIn();
  } else {
  $('.scroll_top').fadeOut();
  }
});
$('.scroll_top').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

//navigation hover code

$("header").hover(function() {       
$('.nav_menu_container').stop(true,true).animate({ 'margin-left': '0' }, 600);
console.log();
}, function() {       
$('.nav_menu_container').stop(true,true).animate({ 'margin-left': '-300' }, 600);
});
//mobile slide toggle code

$('.gallery-item a').attr('data-gal', 'prettyPhoto[gallery]');
// Portfolio Hover
$('.portfolio_item_content').css('opacity',0); 
$('#relatedposts .owl-item, .pf_taxonomy_gallery li').hover(function(){
  $(this).find('img').stop(true, true).fadeTo(500,0.3);
  $(this).find('.link_to_image, .link_to_video').css({'left':'-50px','display':'block'}).stop(true, true).animate({'left':'30%', opacity:1},600);
  $(this).find('.link_to_post').css({'right':'-50px','display':'block'}).stop(true, true).animate({'right':'30%'  ,opacity:1},600);
  $(this).find('.portfolio_item_content').stop(true, true).fadeTo(500,1);
},function(){
  $(this).find('img').stop(true, true).fadeTo(500,1);
  $(this).find('.link_to_image, .link_to_video').css({'left':'50','display':'block'}).stop(true, true).animate({'left':'-30%',opacity:0},600);
  $(this).find('.link_to_post').css({'right':'50px','display':'block'}).stop(true, true).animate({'right':'-30%',opacity:0},600);
  $(this).find('.portfolio_item_content').stop(true, true).fadeTo(500,0);
});

$('.widget_kaya-bg-slider .portfolio_items li, .widget_kaya-bg-slider .owl_item_content').hover(function(){
  $(this).find('img').stop(true, true).fadeTo(500,0.3);
  $(this).find('.link_to_image, .link_to_video').css({'left':'-100px','display':'block'}).stop(true, true).animate({'left':'35%', opacity:1},600);
  $(this).find('.link_to_post').css({'right':'-100px','display':'block'}).stop(true, true).animate({'right':'35%',opacity:1},600);
  $(this).find('.portfolio_item_content').stop(true, true).fadeTo(500,1);
},function(){
  $(this).find('img').stop(true, true).fadeTo(500,1);
  $(this).find('.link_to_image, .link_to_video').css({'left':'100','display':'block'}).stop(true, true).animate({'left':'-35%',opacity:0},600);
  $(this).find('.link_to_post').css({'right':'100px','display':'block'}).stop(true, true).animate({'right':'-35%',opacity:0},600);
  $(this).find('.portfolio_item_content').stop(true, true).fadeTo(500,0);
}); 

//Skillbar 
$('.skillbar').each(function(){
  $(this).find('.skillbar-bar').animate({
  width:$(this).attr('data-percent')
  },2000);
  $(this).find('.skill-bar-percent, .left_arrow').animate({
  left : $(this).attr('data-percent')
  },2000);
});

//aboutus hover social-icon code
$('.team_social_icon').css('display','none');
$('.widget_kaya-team_widget').hover(
function () {
  $(this).find('.team_social_icon').fadeIn("slow");
}, 
function () {
  $(this).find('.team_social_icon').fadeOut("slow");
});

// Responsive Mobile Section
 $('.mobile_nav_icon i').click(function(){    
      $('.nav_menu_container').slideToggle(300);
  });
function checkWidth() {
    if ($(window).width() <= 750) {
        
        $('#myslidemenu').removeClass('menu');
        $('#myslidemenu').addClass('mobile_menu');
        $('.mobile_menu').parent().parent().parent().parent().removeClass('toggle_off');
    } else {

        $('#myslidemenu').removeClass('mobile_menu');
        $('#myslidemenu').addClass('menu');
        $('.menu').parent().parent().parent().parent().addClass('toggle_off');
    }
}
checkWidth();
$(window).resize(checkWidth);
$("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});


function background_resize(){
$('.widget_kaya-bg-slider').parent().parent().addClass('fullscreen_portfolio_bg');
$('.fullscreen_portfolio_bg:first-child').parents().find('#mid_container_wrapper').css({'padding-top':'0'}); 
$('.fullscreen_portfolio_bg:last-child').parents().find('#mid_container_wrapper').css({'padding-bottom':'0'}); 
$('.widget_kaya-bg-slider').parents().find('.sub_header_wrapper').css({'float':'none'}).children('.sub_header').removeClass('container');
$('.fluid_portfolio_wrapper').width($(window).width()-60);
var $container_fluid = Math.ceil( (( ($(window).width() )  - parseInt($('.container').css('width'))) / 2) - 30 );
$('.fluid_portfolio_wrapper').css({
'margin-left' : -$container_fluid,
});
// Window Height
$('.fluid_owl_slider').css({'height': $( window ).height()});
}          
background_resize();
$(window).resize(function() {
background_resize();
}); 



});
})(jQuery);
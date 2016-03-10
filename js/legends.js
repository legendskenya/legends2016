// The hamburger menu script
$('.cross').hide();
$('#menu').hide();
$('.hamburger').click(function() {
  $('#menu').slideToggle("slow", function() {
    $('.hamburger').hide();
    $('.cross').show();
  });
});

$('.cross').click(function() {
  $('#menu').slideToggle("slow", function() {
    $('.cross').hide();
    $('.hamburger').show();
  });
});

 $('li').mouseenter(function(){
    $(this).animate({height: '+=15px'}, 100);
});
$('li').mouseleave(function(){
    $(this).animate({height: '-=15px'}, 100);
});
//Hamburger menu script ENDS HERE


// Scroll to function
$(function(){
  $('.todoing').click(function(){
    $('#doing').ScrollTo({
      duration: 2000,
      durationMode: 'all'
    });
  });
  $('.topeople').click(function(){
    $('#people').ScrollTo({
      duration: 2000,
      durationMode: 'all'
    });
  });
  $('.toword').click(function(){
    $('#word').ScrollTo({
      duration: 2000,
      durationMode: 'all'
    });
  });

// Hover effects on profile pictures
  $('.profile').mouseenter(function(){
    $(this).animate({height: '+=80px',width: '+=80px'}, 400);
  });
  $('.profile').mouseleave(function(){
    $(this).animate({height: '-=80px', width: '-=80px'}, 400);
  });
});


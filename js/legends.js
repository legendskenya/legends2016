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

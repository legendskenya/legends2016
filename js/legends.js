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
});

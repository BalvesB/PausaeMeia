$( document ).ready(function() {
  
  // Folder on click
  $('.folder').on( "click", function() {
    
      console.log( "Drill down" );
      $('.leve-up').removeClass('level-up');
      $('.level-current').addClass('level-up');
      $('.level-current').removeClass('level-current');       
      $('.level-down').addClass('level-current');
      $('.level-down').removeClass('level-down').next().addClass('level-down');
    
  });

  $('.folder2').on( "click", function() {
    
    console.log( "Drill down2" );
    $('.level-up').removeClass('level-up');
    $('.level-current').addClass('level-up');
    $('.level-current').removeClass('level-current');       
    $('.level-down2').addClass('level-current');
    $('.level-down2').removeClass('level-down2').next().addClass('level-down2');
  
    
  });

  $('.folder3').on( "click", function() {
    
    console.log( "Drill down3" );
    $('.level-up').removeClass('level-up');
    $('.level-current').addClass('level-up');
    $('.level-current').removeClass('level-current');       
    $('.level-down3').addClass('level-current');
    $('.level-down3').removeClass('level-down3').next().addClass('level-down3');
  
  });


    
  // Back on Click
  $('.back').on( "click", function() {
    if(
      $('.level-current').is(':first-child')){
       console.log( "Current is top" );
    } 
    else {
      console.log( "Drill back up" );
      $('.level-down').removeClass('level-down')
      $('.level-current').addClass('level-down');
      $('.level-current').removeClass('level-current');
      $('.level-up').addClass('level-current');
      $('.level-up').removeClass('level-up').prev().addClass('level-up');
    }
    
  });
  
  
  
  
  
});
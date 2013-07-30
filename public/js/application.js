$(document).ready(function() {
  
  // $('a#sign-out').on("click", function (e) {
  //   e.preventDefault();
  //   var request = $.ajax({ 
  //     url: $(this).attr('href'), 
  //     type: 'delete' 
  //   });
  //   request.done(function () { window.location = "/"; });
  // });
gif.hide();
  $('button').on("click", function (e) {
    // console.log('shitbirds');
    $.ajax({
      url: '/shitbird',
      method: 'post'
    }).done(function(response){

    });

  });

 });

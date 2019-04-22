$(document).ready(function() {

  $("#editprofile").on("click", handleEdit);

})

function handleEdit() 
{
  var inputs = $(".profile-about input");
  $.each(inputs, function(key, input) {
    if ($(input).hasClass("readonly")) {
      $(input).prop('readonly', false);
      $(input).removeClass("readonly");
    } else {
      $(input).prop('readonly', true);
      $(input).addClass("readonly");
    }  
  })
}
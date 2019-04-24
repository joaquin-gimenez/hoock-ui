$(document).ready(function() {

  $("#editprofile").on("click", handleEdit);
  $("#cancelprofile").on("click", cancelEdit);

})

function handleEdit() 
{
  var inputs = $(".profile-about input[type=text]");
  var button = $(".profile-about input[type=submit]");
  $.each(inputs, function(key, input) {
    $(input).prop('readonly', false);
    $(input).removeClass("readonly");
  });
  $(button).removeClass('display-none');
  $("#editprofile").addClass("display-none");
  $("#cancelprofile").removeClass("display-none");
}

function cancelEdit() {
  var inputs = $(".profile-about input[type=text]");
  var button = $(".profile-about input[type=submit]");
  $.each(inputs, function(key, input) {
    $(input).prop('readonly', true);
    $(input).addClass("readonly");
  });
  $(button).addClass('display-none');
  $("#editprofile").removeClass("display-none");
  $("#cancelprofile").addClass("display-none");
}
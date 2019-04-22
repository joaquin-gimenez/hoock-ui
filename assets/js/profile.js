$(document).ready(function() {

  $("#editprofile").on("click", handleEdit);
  $("#cancelprofile").on("click", cancelEdit);

})

function handleEdit() 
{
  var inputs = $(".profile-about input");
  $.each(inputs, function(key, input) {
    $(input).prop('readonly', false);
    $(input).removeClass("readonly");
  });
  $("#editprofile").addClass("display-none");
  $("#cancelprofile").removeClass("display-none");
}

function cancelEdit() {
  var inputs = $(".profile-about input");
  $.each(inputs, function(key, input) {
    $(input).prop('readonly', true);
    $(input).addClass("readonly");
  });
  $("#editprofile").removeClass("display-none");
  $("#cancelprofile").addClass("display-none");
}
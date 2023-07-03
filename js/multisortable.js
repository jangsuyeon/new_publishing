$(function () {
  $(".connectedSortable").multisortable({
    selectedClass: "highlight"
  });
  // $('#sortable1').sortable({
  //   connectWith: '#sortable2',
  // });
  $("#sortable2 tbody").sortable({
    connectWith: "#sortable1",
  });
});
// Search field
$(document).ready(function () {
  $("html").click(function (e) {
    if ($(e.target).parents(".container").length < 1) {
      $(".list-group-item").removeClass("highlight");
    }
  });
});

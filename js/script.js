$(document).ready(function() {

  $(".show_menu").hover(
    function() {
       $(this).next(".show_menu_list").fadeToggle(1500);
    }
  )

});

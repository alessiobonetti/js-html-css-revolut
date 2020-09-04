$(document).ready(function() {
  $(".show_menu").hover(
    function() {
       $(this).children(".show_menu_list").fadeToggle(500);
    }
  )
});

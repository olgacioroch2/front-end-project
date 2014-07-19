/* ==========================================================================

    Project: front-end project
    Author: 
    Last updated: Fri Jul 18 2014 13:48:11

   ========================================================================== */

$(document).ready(function() {
  //Examples of how to assign the ColorBox event to elements
  $("a[rel='cbox']").colorbox({
    open: true
  });
  $(document).bind('cbox_complete', function() {
    setTimeout($.colorbox.next, 500);
    setTimeout($.colorbox.close, 2000);
  });
});

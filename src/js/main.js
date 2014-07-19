/* ==========================================================================

    Project: front-end project
    Author: 
    Last updated: @@timestamp

   ========================================================================== */

$(document).ready(function () {
	$("a[rel='cbox']").colorbox({open:true, current:false});
	$(document).bind('cbox_complete', function(){
		setTimeout($.colorbox.next, 500);
		setTimeout($.colorbox.close, 2000);
	});	
});

 
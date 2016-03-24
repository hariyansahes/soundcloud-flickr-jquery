jQuery(document).ready(function($) {

jQuery("a.soundcloud").live("click", function(){
		var scURL = jQuery(this).attr("href");
		var scID = jQuery(this).attr("id");
		/*var datakirim = 'data='+scID;
		jQuery.ajax({
				type: "POST",
				url: "save_played.php",
				data: datakirim,
				cache: false,
			});*/

		var myArray = scID.split('|');
		var embedinfo="<p><div class='no1'>Now playing:</div><br><div class='no2'>"+myArray[2]+"</div><br><div class='no3'>"+myArray[1]+"</div></p>";


		var embedAudio = embedinfo+"<iframe width=\"100%\" height=\"18\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url="+scURL+"&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false\"></iframe>";
		jQuery(".playing").html(embedAudio);
		//jQuery(".info").html(embedinfo);
		jQuery("#results").hide();
		return false;
});

var timer = null;
jQuery("#keyword").keyup(function() {

if(timer) {
    clearTimeout(timer);
  }
timer = setTimeout(function() {
		var sc_keyword = jQuery("#keyword").val();
		var obj = jQuery(this);
		
		if(sc_keyword != '') {

			jQuery(".ajax_indi").show();
			var str = jQuery("#fb_expand").serialize();
			jQuery.ajax({
				type: "POST",
				url: "fetch_soundcloud.php",
				data: str,
				cache: false,
				success: function(htmlresp){
					jQuery("#results").show();
					jQuery('#results').html(htmlresp);
					jQuery(".ajax_indi").hide();
				}
			});

		
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  			$.getJSON( flickerAPI, {
   			 tags: sc_keyword,
   			 tagmode: "any",
   			 format: "json"
  				})
			    .done(function( data ) {
			    	$("#images").html("");
			      $.each( data.items, function( i, item ) {
			      	var ganti = item.media.m;
			      	var replace = ganti.split('_'); 
			      	var baru = replace[0]+"_"+replace[1]+"_h.jpg";
			        var images = baru;
			        var image = $('#slideit');
			      	image.css('background', "url('"+images+"') no-repeat center center fixed");
			        if ( i === 1 ) {
			          return false;
			        }
			      });
			        

			    });
			
		} else {
			jQuery("#keyword").focus();
		}
}, 500);

});

});
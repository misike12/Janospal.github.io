jQuery( document ).ready( function( $ ) {
    // $() will work as an alias for jQuery() inside of this function
    acf.add_filter('select2_ajax_results', function( json, params, instance ){

		// console.log(json);
		// console.log(params);
		// console.log(instance);
		
		// console.log(instance.cid);
		var lelki_mezok = ['acf71','acf72','acf73'];
		if	($.inArray( instance.cid, lelki_mezok ) >= 0){
			var jelenlegi = String( acf.getField('field_613b2a47268fe').val());
			var opcio1 =  String( acf.getField('field_613b3d1e5a02a').val());
			var opcio2 =  String( acf.getField('field_613b4cf9bc0c0').val());
			var opcio3 =  String( acf.getField('field_613b4cfcbc0c1').val());
			var kivalasztottak = [jelenlegi,opcio1,opcio2,opcio3];
			// console.log(kivalasztottak);
			var talalat = [];
			for (var i=json.results.length - 1 ; i >= 0 ; i--){
				// console.log(json.results[i]);
				
				if ($.inArray( json.results[i].id, kivalasztottak) >= 0) {
					json.results.splice(i,1);
					
				}
			}
		}
		// return
		return json;

	});
} );
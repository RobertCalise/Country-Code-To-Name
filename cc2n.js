var cc2n_countries;

jQuery.getJSON("iso3166-1.json", {}, function(data) {

	cc2n_countries = data.countries;

});

function cc2n(code) {

	var name = "Country not found.";

	jQuery.map(cc2n_countries, function(obj) {

		if(obj.alpha2 === code)
			name = obj.name;

	});
	
	return name;

}
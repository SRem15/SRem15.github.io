function checkPlaces(){

var locales = [];

	if (document.getElementById("antelope").checked)
	{
		
		locales.push("Antelope Canyon");
		locales.toString();
		document.getElementById("localeDisplay").innerHTML = locales;
		
	}
	else
	{
	
		locales.slice("Antelope Canyon");
		locales.toString();
		document.getElementById("localeDisplay").innerHTML = locales;
	
	}

}

document.getElementById("submit").onclick = checkPlaces;
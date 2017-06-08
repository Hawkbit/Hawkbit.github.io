  // Get template data from HTML
  var template = $('#handlebars-demo').html();
  //Compile template in function
  var templateScript = Handlebars.compile(template);

  //Define data object
  var context = {
    "name" : "Shawn",
    "occupation" : "Web Developer",
    "technology" : "HandlebarsJS"
  };

  // html "My name is Dave Dave. I am a baker."
  var html = templateScript(context);

  // Insert template to page
  $(document.body).append(html);



function showDate()
{
	var now = new Date();
	var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
	function fourdigits(number)
	{
		return (number < 1000) ? number + 1900 : number;
	}

	tnow=new Date();
	thour=now.getHours();
	tmin=now.getMinutes();
	tsec=now.getSeconds();

	if (tmin<=9) { tmin="0"+tmin; }
	if (tsec<=9) { tsec="0"+tsec; }
	if (thour<10) { thour="0"+thour; }

	today = days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + ", " + (fourdigits(now.getYear())) + " - " + thour + ":" + tmin +":"+ tsec;

	document.getElementById("clock").innerHTML = today;
}
setInterval("showDate()", 1000);

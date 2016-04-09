$(document).ready(function () {
    var time = new Date();
    var day = time.getDate();
    var month = time.getMonth()+1;
    var hour = time.getHours();
    var date = month + "/" + day;
	var year = time.getFullYear().toString();
	var myage = year.slice(2); // Being born in 2000 has its benefits
	    
	var holidays = {
		"1/1": "Happy New Year!",
		"2/14": "Happy Valentine's Day!",
		"3/21": "Today is my " + myage + "th birthday!",
		"4/1": "April Fools!",
		"10/31": "Trick or Treat!",
		"12/25": "Merry Christmas!"
	}
        
    function get_greeting() {
		greeting = ""
		
		if (date in holidays) {
			greeting = holidays[date];
		} 
		else if (hour >= 18) {
			greeting = "Good evening.";
		}
		else if (hour >= 12) {
			greeting = "Good afternoon.";
		}
		else {
			greeting = "Good morning.";
		}
		
		return greeting;
	}

	function set_greeting() {
		greeting = get_greeting();
		$("#greeting").text(greeting);
	}    
	
	set_greeting();
});
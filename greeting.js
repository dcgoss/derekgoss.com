/*
Yo bro you lost or somethin? That's cool b. While you're here, check out this sweet script I made homie. 
Hit me up with that email if you like it dawg.
#madewithmadskillz
@author Derek Goss <dgoss@derekgoss.com>
*/
$(document).ready(function () {
    var time = new Date();
    var day = time.getDate();
    var month = time.getMonth()+1;
    var hour = time.getHours();
    var date = month + "/" + day;
	var year = time.getFullYear().toString();
	var myage = year.slice(2);
	var match = false;
    var holidaylist = {
        "holidaydates" : ["1/1", "2/14", "3/21", "4/1", "10/31", "12/25"],
        "holidaynames" : ["Happy New Year!", "Happy Valentines Day!", "Today is my " + myage + "th birthday!", "April Fool's!", "Trick or Treat!", "Merry Christmas!"]
    };
        
    function holidaycheck(){
    for (var x in holidaylist.holidaydates){
        if (holidaylist.holidaydates[x] == date){
			match = holidaylist.holidaynames[x];
			$("#greeting").text(match);
        }
    }
    }
    
    function timeofday(){
    if (hour < 12){
        $("#greeting").text("Good morning.");
    } else if (hour >= 12 && hour < 18){
        $("#greeting").text("Good afternoon.");
    } else if (hour >= 18){
        $("#greeting").text("Good evening.");
    }
    }
    
    
    holidaycheck();
    if (match == false){
        timeofday();
    }
    
});
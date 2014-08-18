$(document).ready(function() {
	
	var count = 0;
	var looper = setInterval(function() {
		 adjectives(count);
		 count++;
		 if(count==8)
		 {
		 	count=0;
		 }
		 }, 3000);
	
});

function adjectives(i) {
	var words = ["plays lacrosse.", "made this website from scratch.", "loves sailing.", "is an app developer.", "plays percussion.", "just moved to PA.", "always wears bowties.", "runs cross-country."];

		$("#fillin").fadeOut(500, function() {
			$(this).text(words[i]).fadeIn(500);
			
		});	
}

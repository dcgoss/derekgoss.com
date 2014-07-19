$(document).ready(function() {
	
	var count = 0;
	var looper = setInterval(function() {
		 adjectives(count);
		 count++;
		 if(count==11)
		 {
		 	count=0;
		 }
		 }, 3000);
	
});

function adjectives(i) {
	var words = ["plays lacrosse.", "made this website from scratch.", "is a sauce aficionado.", "is fluent in Python.", "loves sailing.", "always has a new product idea.", "wants to found a startup.", "plays percussion.", "just moved to Philadelphia.", "always wears bowties.", "runs cross-country."];

		$("#fillin").fadeOut(500, function() {
			$(this).text(words[i]).fadeIn(500);
			
		});	
}

$( document ).ready(function() {
	
	$('#numChoice').on('click', function() {
		$('#showNums').empty();
		$('#perfectList').empty();
		var guess = parseInt($('input').val());
		var perfects = [];
		for (n = 2; n <= guess; n++) {
			var sum = 1;
			for (x = 2; x <= n/2; x++) {
				if (n % x === 0) {
					sum += x;
				}
			}
			if (sum === n) {
				perfects.push(n);
				}
		}
		$('#showNums')
			.text("We have found " + perfects.length + " perfect numbers in " + guess);
		$.each(perfects, function(number) {
			$('#perfectList')
			.append($("<li></li>")
			.text(perfects[number]));
			})
	})
});
$(document).ready(function(){
	const firstLessonCode = 142; // wizme code of book lesson 121
	const lastLessonCode  = 211; // wizme code of book review 10
	
	var lessonNumber = 121;
	var reviewNumber = 1;
	var lessonName   = ''; // usage: 'Lesson 133' or 'Review 7'
	var color = '';

	for (var lessonCode = firstLessonCode; lessonCode <= lastLessonCode; lessonCode++) {
	
		// Multiples of 7, plus 1, are reviews
		var remainder = (lessonCode - 1) % 7; // 'lessonCode - 1' is just an ajust
		if (remainder == 0){ // Is review
			lessonName = `Review ${reviewNumber}`;	
			color = 'list-group-item-success';	
			reviewNumber++;
		} else { // Is not review, is lesson
			lessonName = `Lesson ${lessonNumber}`;
			if (lessonNumber % 2 === 0) { // even
				color = 'list-group-item-primary';
			} else { // odd
				color = 'list-group-item-danger';
			}
			lessonNumber++;
		}

		// Creating html element
		$('<a/>', {
		    class:	`list-group-item ${color}`,
		    href:	`https://me.wizard.com.br/courses/map/12/lesson/${lessonCode}/select/`,
		    text:	lessonName
		}).appendTo('#list');	
	}
});



	


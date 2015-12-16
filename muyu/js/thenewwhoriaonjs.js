
	$(".navSlideDown").slideUp();
	$(".navBlock").mouseover(function(){
		$(".navSlideDown").stop(true, false).slideDown();
	});
	$(".navBlock").mouseout(function(){
		$(".navSlideDown").stop(true, false).slideUp();
	});
	$(".navSlideDown").mouseover(function(){
		$(".navSlideDown").stop(true, false).slideDown();
	});
	$(".navSlideDown").mouseout(function(){
		$(".navSlideDown").stop(true, false).slideUp();
	});

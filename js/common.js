$(document).ready(function() {

//filter
function filter() {	
	var el = $('.js-filter');
	var btn = $('.js-filter-btn');
	var all = $('.js-filter-all');
	var text_1 = 'Все фильтры';
	var text_2 = 'Скрыть фильтр';
	btn.click(function() {
		if (!$(this).hasClass('is-open')) {
			all.slideDown();
			el.addClass('is-open');
			$(this).addClass('is-open');
			$(this).text(text_2);
		} else {
			all.slideUp();
			el.removeClass('is-open');
			$(this).removeClass('is-open');
			$(this).text(text_1);
		}
	});		
}
filter();

});
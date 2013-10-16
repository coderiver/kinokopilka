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

//comments
function comments() {
	var btn_view = $('.js-comm-view');
	btn_view.click(function() {
		$(this).parent().parent().removeClass('is-hidden');
		$(this).hide();
	});
	var btn_spoiler = $('.js-comm-spoiler');
	btn_spoiler.click(function() {
		$(this).parent().parent().removeClass('is-spoiler');
		$(this).parent().hide();
	});
	var btn_all = $('.js-comm-all');
	btn_all.click(function() {		
		$(this).parent().find('.is-hidden .js-comm-view').hide();
		$(this).parent().find('.is-hidden').removeClass('is-hidden');
		$(this).parent().removeClass('is-rolled');
		$(this).hide();
	});
}
comments();

function torrent() {
	var btn_more = $('.js-torrent-more');
	btn_more.click(function() {
		if ($(this).hasClass('is-open')) {
			$(this).parent().parent().next().children().hide();
			$(this).removeClass('is-open');
		}
		else {
			$(this).parent().parent().next().children().show();
			$(this).addClass('is-open');
		}
	});
}
torrent();

//
$('.btn, .js-tooltip').tooltip();
$('.carousel').carousel();

});
$(document).ready(function(){ 
	$('a.accordion-toggle').click(function() {
		var el = $(this);
  		if (el.text() == el.data("text-swap")) {
    		el.text(el.data("text-original"));
  		} else {
    		el.data("text-original", el.text());
    		el.text(el.data("text-swap"));
  		}
	});
	$('.accordion-toggle').first().trigger('click');
});
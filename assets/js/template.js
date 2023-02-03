(function($)
{
	$(document).ready(function()
	{
			$('.control-group').addClass('form-group');
            $('.control-group input[type=text]').addClass('form-control');
            $('.control-group input[type=email]').addClass('form-control');
            $('.control-group input[type=password]').addClass('form-control');
            $('.control-group input[type=search]').addClass('form-control');
            $('.control-group input[type=url]').addClass('form-control');
            $('.control-group input[type=tel]').addClass('form-control');
            $('.control-group input[type=number]').addClass('form-control');
            $('.control-group input[type=date]').addClass('form-control');
            $('.control-group input[type=datetime-local]').addClass('form-control');
            $('.control-group input[type=month]').addClass('form-control');
            $('.control-group input[type=week]').addClass('form-control');
            $('.control-group input[type=time]').addClass('form-control');
            $('.control-group input[type=color]').addClass('form-control');
            $('.control-group select').addClass('form-control');
            $('.control-group textarea').addClass('form-control');
            $('.control-group input[type=file]').addClass('form-control-file');
            $('.control-group input[type=checkbox]').addClass('form-check-input');
			$('.form-check input[type=checkbox]').addClass('form-check-input');
            $('.form-group input').addClass('form-control');
            $('.form-group textarea').addClass('form-control');
			$('.form-inline select').addClass('form-control form-control-sm');
            $('table').addClass('table');
            $('.label').addClass('badge');
            $('.label-warning').addClass('badge-warning');
            $('.login input').addClass('form-control');
	})
})(jQuery);
jQuery('.navbar-nav .dropdown-toggle').click(function() {
    location.href = this.href;
});
jQuery(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

	

jQuery(".price-diploma").on("click","a", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
			top = $(id).offset().top;
		jQuery('body,html').animate({scrollTop: top}, 1500);
	});
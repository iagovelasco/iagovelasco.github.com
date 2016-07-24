/* Navigation
	-----------------------------------------------------*/
	
	$('#page-content section').waypoint(function(direction) {
	  if(direction=='down') {
		  
		  var sectionName = '#'+$(this).attr('id');
		  var menuLink = $('.me-nav li').children('a').attr('href');
		  var activeLink = $('.me-nav li.active');
		  
		  var newLink = $('li.menu-item a[href="'+sectionName+'"]');
		  
		  $(activeLink).removeClass('active');
		  $(newLink).parent('li').addClass('active');
		  
	  }
	},{ offset: 1 });
	
	$('#page-content section').waypoint(function(direction) {
	  if(direction=='up') {
		  
		  var sectionName = '#'+$(this).attr('id');
		  var menuLink = $('.me-nav li').children('a').attr('href');
		  var activeLink = $('.me-nav li.active');
		  
		  var newLink = $('li.menu-item a[href="'+sectionName+'"]');
		  
		  $(activeLink).removeClass('active');
		  $(newLink).parent('li').addClass('active');
		  
	  }
	},{ offset: function() {
		  return -$(this).height()+1;
		}
	  });
	
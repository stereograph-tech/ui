// main javascript

$(document).ready(function() {

	var PORTRAIT_WIDTH = 1024;
	var isPortraitMode = checkPortraitMode($(window).width());
	var isNavDropdownVisible = false;
	
	$('<div>').load('head.html', function() {
		$('head').prepend($(this).html());
		$('#loadingScreen').fadeOut(1000, function() {
			console.log('fade out loading screen');
		});
	});
	
	//$('body').load('pageNavButtons.html');
	$('#pageInfo').load('nav.html', function() {
		/* device width indicator */
		$('#deviceWidth').html($(window).width());
		$('#deviceHeight').html($(window).height());
		generateNavList();
		processSourceLines();
	});
	
	$('body').delegate('#navIcon', 'click', function() {
		$('#navDropdown').show();
		$('#viewSourceDropdown:visible').hide();
		$('#deviceDimDropdown:visible').hide();
		$('#dropdownUnderlay').show();
	});
	
	$('body').delegate('#viewSourceIcon', 'click', function() {
		$('#viewSourceDropdown').show();
		$('#navDropdown:visible').hide();
		$('#deviceDimDropdown:visible').hide();
		$('#dropdownUnderlay').show();
	});
	
	$('body').delegate('#deviceDim', 'click', function() {
		$('#deviceDimDropdown').show();
		$('#viewSourceDropdown:visible').hide();
		$('#navDropdown:visible').hide();
		$('#dropdownUnderlay').show();
	});
	
	$('body').delegate('#dropdownUnderlay', 'click', function() {
		$('.dropdown').hide();
		$('#dropdownUnderlay').hide();
	});
	
	$('body').delegate('#fontSizeSelect', 'change', function() {
		var fontSize = $('#fontSizeSelect').val();
		//console.log('font size: ', fontSize);
		$('body').attr('style', 'font-size: ' + fontSize + ';');
	});
	
	
	$('body').delegate('#gridMode', 'click', function() {
		$('.gridOverlay').toggle();
	});
	
	$(window).resize(function() {
		var width = $(window).width();
		var height = $(window).height();
		//console.log(width); 
		$('#deviceWidth').html(width);
		$('#deviceHeight').html(height);
		
		checkPortraitMode(width);
	});
	
	$('.disclaimer').click(function() {
		$(this).toggleClass('disclaimerMin');
	});
	
	/* listview / card toggle */
	$('#cardToggle').click(function() {
		$('#cardView').toggleClass('hide');
		$('#listView').toggleClass('hide');
	});
	$('#listToggle').click(function() {
		$('#cardView').toggleClass('hide');
		$('#listView').toggleClass('hide');
	});
	
	function generateNavList() {
		//console.log('generating list of nav links...');
		var currentPage = document.location.href.match(/[^\/]+$/);
		if(!currentPage) {
			currentPage = "index.html";
		} else {
			currentPage = currentPage[0];
		}
		var pages = [];
		$('#navDropdown a').each(function(index) {
			var pageHref = $(this).attr('href');
			//console.log(pageHref);
			pages.push(pageHref);
		});
		var currentPageIndex = pages.indexOf(currentPage);
		//console.log('index of current page: ', currentPageIndex);
		
		var nextIndex = currentPageIndex < pages.length - 1 ? currentPageIndex + 1 : 0;
		var prevIndex = currentPageIndex > 0 ? currentPageIndex - 1 : pages.length - 1;
		console.log('next page: ', pages[nextIndex]);
		console.log('current page: ', currentPage);
		console.log('prev page: ', pages[prevIndex]);
		$('#pageNavPrev').attr('title', pages[prevIndex]);
		$('#pageNavPrev').attr('href', pages[prevIndex]);
		$('#pageNavNext').attr('title', pages[nextIndex]);
		$('#pageNavNext').attr('href', pages[nextIndex]);		
	}
	
	function checkPortraitMode(width) {
		if(width < PORTRAIT_WIDTH) {
			showPortraitNotification();
		} else {
			hidePortraitNotification();
		}
	}
	
	function showPortraitNotification() {
		$('#portraitNotification').show();
		isPortraitMode = true;
	}
	
	function hidePortraitNotification() {
		$('#portraitNotification').hide();
		isPortraitMode = false;
	}
	
	function processSourceLines() {
 	
		var html = $('.fragment').html();
		if(!html) {
			return;
		}
		html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
		
		var lines = html.split('\n');
		
		var i = 0;
		while(i < lines.length - 1) {
			//console.log('trim: ', lines[i]);
			if($.trim(lines[i]) == '') {
				//console.log('remove index: ', i);
				lines.splice(i, 1);
			} else {
				i++;
			}
		}
		
		var firstLine = lines[0];
		//console.log('first line: ', firstLine);
		var initTabsCount = (firstLine.match(/\t/g) || []).length;
		//console.log('# tabs first line: ', initTabsCount);
		
		var str = '';
		for(var j = 0; j < lines.length - 1; j++) {
			//console.log(lines[j]);
			var line = lines[j].substring(initTabsCount).replace(/\t/g, '    ');
			//console.log(line);
			str += line + '\n';
		}
		//console.log(str);
		$('#viewSourceDropdown pre').append(str);
		prettyPrint();
	}

	function generateGrid() {
		var w = $(window).width();
		var h = $(window).height();
		console.log(w, h);
		var rHtml = '';
		for(var r = 0; r < h / 10; r++) {
			rHtml += '<div class="row height1">';
			for(var c = 0; c < w / 10; c++) {
				rHtml += '<div class="col height1 width1"></div>';
			}	
			rHtml += '</div>';
		}
		/* grid overlay image */
		$('.gridOverlay').empty().remove();
		$('body').prepend('<div class="gridOverlay">' + rHtml + '</div>');
		rHtml = '';
	}
	//generateGrid();
	$(window).resize(function() {
		//generateGrid();
	});
	
});
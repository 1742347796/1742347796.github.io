$(function () {

	//加载fullpage
	$('#dowebok').fullpage({
		sectionsColor: ['#4dd0e1', '#22c3aa', '#26B1B6', '#fb6d7e', '#4dd0e1', '#e8b118'],
		navigation: true,
		afterLoad: loadAnimation,
		onLeave: leaveAnimation,
	});
	
	$("#page1-model").click(function () {
		$('.model').fadeIn();
		$('.model ul li').slideDown();
		event.stopPropagation();
	});
	
//	$('.page2 ul').on('click', 'h4', function () {
//		console.log($(event.target).html());
//		$('.page2 .model').fadeIn();
//		event.stopPropagation();
//	});
	
	$(document).click(function(){  
       $('.model').fadeOut();
       $('.model ul li').slideUp();
    });  
    
	$('.page1 .container img').delay(800).animate({'opacity': '1'}, 500);
	$('.page1 .container p, .page1 .container h1').animate({'margin-top': '20px'}, 800);
	$('.page1 .container h3').animate({'margin-top': '5px'}, 800);
	//加载动画
	function loadAnimation (anchorLink, index) {
		
	}
	
	function leaveAnimation (anchorLink, index) {
		var time = 1200;
			
		if (index === 2) {
			
			$('.skill h4').eq(0).animate({'width': '100%'}, time);
			$('.skill h4').eq(1).animate({'width': '90%'}, time);
			$('.skill h4').eq(2).animate({'width': '80%'}, time);
			$('.skill h4').eq(3).animate({'width': '75%'}, time);
			$('.skill h4').eq(4).animate({'width': '65%'}, time);
			$('.skill h4').eq(5).animate({'width': '50%'}, time);
		}
		
		if (index === 3) {
			$('.page3 .skycol').animate({'height': '100%'}, 200);
			$('.page3 .an-left').animate({'margin-left': '0%'}, time);
			$('.page3 .an-right').animate({'margin-right': '0%'}, time);
		}
		
		if (index === 4) {
			$('.page4 .an-down').animate({'margin-top': '0%'}, time);
		}
		
		if (index === 5) {
			var s = $('.page5 .an-hide');
			for (var i = 0; i < s.length; i ++) {
				var random = parseInt(3000 * Math.random());
				$(s[i]).animate({'opacity': '1'}, random);
				$('.page5 .an-down').animate({'margin-top': '0%'}, random);
			}
			
		}
		
		if (index === 6) {
			
			$('.page6 .an-down').animate({'margin-top': '0%'}, time);
			$('.page6 .an-hide').delay(time).animate({'opacity': '1'}, 100);
			shake($('.page6 .an-hide'));
		}
		return ;
	}
	
	
});

//抖动效果
function shake (dom) {
		
	var timeShake = 100;
		
	$(dom).animate({'margin': '5px 40px 0 0'}, timeShake);
	$(dom).animate({'margin': '5px 0 0 40px'}, timeShake);
	$(dom).animate({'margin': '5px 50px 0 0'}, timeShake);
	$(dom).animate({'margin': '5px 0 0 50px'}, timeShake);
	$(dom).animate({'margin': '5px 40px 0 0'}, timeShake);
	$(dom).animate({'margin': '5px 0 0 40px'}, timeShake);
	$(dom).animate({'margin': '5px 30px 0 0'}, timeShake);
	$(dom).animate({'margin': '5px 0 0 30px'}, timeShake);
	$(dom).animate({'margin': '5px 15px 0 0'}, timeShake);
	$(dom).animate({'margin': '5px 0 0 15px'}, timeShake);
	$(dom).animate({'margin': '5px 5px 0 0'}, timeShake);
	$(dom).animate({'margin': '5px 0 0 0'}, timeShake);	
}

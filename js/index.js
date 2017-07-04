$(function () {
	//加载fullpage
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#F4F4F4', '#26B1B6', '#fb6d7e', '#4dd0e1', '#e8b118'],
		navigation: true,
		afterLoad: loadAnimation,
		onLeave: leaveAnimation,
	});
	
	
	
	$('.page1 .container img').delay(800).animate({'opacity': '1'}, 500);
	$('.page1 .container p, .page1 .container h1, .page1 .container h3').animate({'margin-top': '20px'}, 800);

	//加载动画
	function loadAnimation (anchorLink, index) {
		let time = 1200;
			
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
			let s = $('.page5 .an-hide');
			for (let i = 0; i < s.length; i ++) {
				let random = parseInt(1500 * Math.random());
				$(s[i]).animate({'opacity': '1'}, random);
			}
		}
		
		if (index === 6) {
			
			$('.page6 .an-down').animate({'margin-top': '0%'}, time);
			$('.page6 .an-hide').delay(time).animate({'opacity': '1'}, 100);
			shake($('.page6 .an-hide'));
		}
		return ;
	}
	
	function leaveAnimation (anchorLink, index) {
	}
	
	
});

//抖动效果
function shake (dom) {
		
	let timeShake = 100;
		
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
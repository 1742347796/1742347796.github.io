$(function () {
	
	//加载fullpage
	$('#dowebok').fullpage({
		sectionsColor: ['#4dd0e1', '#22c3aa', '#26B1B6', '#fb6d7e', '#4dd0e1', '#e8b118'],
		navigation: true,
		afterLoad: loadAnimation,
		onLeave: leaveAnimation,
	});
	//第一页弹框
	$("#page1-button").click(function () {
		$('.model').fadeIn();
		$('.model ul li').slideDown();
		event.stopPropagation();
	});
	//第二页弹框
	$('.page2 ul li').click(function () {
		showModel($(this));
	});
	//清除弹框
	$(document).click(function(){  
		hideModel();
    });  
    
	$('.page1 .container img').delay(800).animate({'opacity': '1'}, 500);
	$('.page1 .container p, .page1 .container h1').animate({'margin-top': '20px'}, 800);
	$('.page1 .container h3').animate({'margin-top': '5px'}, 800);
	//加载动画
	function loadAnimation (anchorLink, index) {
		
	}
	
	function leaveAnimation (anchorLink, index) {
		var time = 1200;
		
		hideModel('fast');
		
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
				var random = parseInt(Math.random() * (3000 - 500) + 500);
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

//展示第二页弹窗
function showModel (target) {
	
	var skill = [['能使用合理的结构和样式编写兼容主流浏览器的页面;', '能适当运用CSS3提升页面的体验效果', '能熟练运用Chrome开发者工具进行页面调试'],
		['熟悉原生js，可完成常见的数据处理、页面交互等工作', '熟悉闭包、原型链，熟悉ES6新特性', '能运用模块化、面向对象的思想编程'],
		['能编写低耦合、复用性高的vue组件', '熟悉组件数据处理、通信。能利用vuex进行状态管理'],
		['能运用jQuery完成高效、清晰的前端开发', '能根据需要编写实用的插件'],
		['能完成兼容PC端、移动端的响应式设计', '能合理运用Bootstrap样式和布局提升页面效果'],
		['了解JavaWeb后端开发，MVC设计模式，SHH框架','编写过基于Hibernate，Struts等技术的后端模块','熟悉面向对象编程思想，开发过飞行棋、CSV文件处理等Java小程序']],	
		
		index = target.index();
	
	if ($('.page2 .model').css('display') !== 'block') {
		$('.page2 .model ul li').html('&nbsp;');
		for (var i = 0; i < skill[index].length; i ++) {
			$('.page2 .model ul li').eq(i).html(skill[index][i]); 
		}
		$('.page2 .model').fadeIn();
		$('.model ul li').slideDown();
		event.stopPropagation();
	}
	
}

//隐藏第二页弹窗
function hideModel (type) {
	if (type || type === 'fast') {
		$('.model').hide();
	} else {
		$('.model').fadeOut();
	}
	
    $('.model ul li').slideUp();
}

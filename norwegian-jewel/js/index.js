// JavaScript Document
$(function(){

//==========================在岸上---淡入淡出效果===================================================
	
	$(".map > li").hover(function(){
		$(this).children("img,div").css('display','block');
		/*$(this).children("").fadeIn();*/
	},function(){
		$(this).children("img,div").css('display','none');
		/*$(this).children("div").fadeOut();*/
	});
//==========================在船上---tab标签页切换效果===================================================
	$(".tabDiv > ul li").mouseover(function(){
		$(this).addClass("highlight").siblings().removeClass("highlight")
		.parent().siblings(".tab-content").children("div").eq($(this).index()).fadeIn().siblings().css("display","none");
	});

//==========================推荐航线---淡入淡出效果===================================================
		
		$(".goSite > span:has('em')").hover(function(){
			$(this).children("em").fadeIn();
		},function(){
			$(this).children("em").fadeOut();
		});


});

//==================跳转到对应的产品链接==========================================================================
	function oProduct01() 
	{
		window.open("https://www.ylly.com/packages/12314800/");
	}

	function oProduct02() 
	{
		window.open("https://www.ylly.com/packages/12005850/");
	}
	function oProduct03() 
	{
		window.open("https://www.ylly.com/packages/12007135/");
	}

//==================获取产品价格==========================================================================
	$(function(){
		var packagesApi = new yllyAPI();

				packagesApi.access([
		      {
		        url : 'https://www.ylly.com:443/api/v1/packages/search/?package_id=12314800',//12314800
		        success : function(res) {
		             $(".proList01 .bigTxt").html(res.results[0].price.substr(1));
		        }
		    },
		    {
		        url : 'https://www.ylly.com:443/api/v1/packages/search/?package_id=12005850',//12005850
		        success : function(res) {
		             $(".proList02 .bigTxt").html(res.results[0].price.substr(1));
		        }
		    },
		    {
		        url : 'https://www.ylly.com:443/api/v1/packages/search/?package_id=12007135',//12007135
		        success : function(res) {
		             $(".proList03 .bigTxt").html(res.results[0].price.substr(1));
		        }
		    }
		]);		
	});

//==================侧导航效果=============================================================
	

	$(window).scroll(function(){
			if($(document).scrollTop()>$(".list_01").height()-300){
				$(".list_nav").fadeIn();
			}else{
				$(".list_nav").fadeOut();
			}
		});
	$(function() {
		$(".list_nav a").click(function(event){
			var name=$(this).attr("name");
			var top=$("#"+name).offset().top;
			//console.log(name);
			$("html,body").animate({
					scrollTop : top-100
				}, 600)
		});
		

        $(".gotoTop").bind("click", function() {
				$("html,body").animate({
					scrollTop : 0
				}, 600)
			});
        $(window).scroll(function(){   //监听滚动条滚动事件；
			var oScrollTop = $(document).scrollTop();//滚动条距离顶部的距离；
			var oNav=$("#NavDiv");
			var items=$("#content").find(".item");//找到所有包含item类的div；通过id筛选要比通过class筛选效果高很多；
			var currentId="";//当前所在的版块id；
			items.each(function (){
				var m=$(this);//把this存到一个变量里，这是一个好习惯哦；
				var itemTop=m.offset().top;//获取到每一个item的top；
				//console.log(itemTop);
				if (oScrollTop > itemTop-300) 
					{
						currentId=m.attr("id");
					}
				else{
					return false;
				};
				//给相应版块的a设置highLight，取消其他a的highLight；
			var currentLink=oNav.find(".highLight");

			if (currentId && currentLink.attr("name") !=currentId)
			{
				currentLink.removeClass("highLight");
				oNav.find("[name="+currentId+"]").addClass("highLight");
			};
			});
		
		});

        });



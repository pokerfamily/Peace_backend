/*$(document).ready(function(){
	var member = $(".member_wrapper"),
		name = $(".member_name"),
		work = $(".member_work"),
		previous = $('.previous'),
		next = $('.next'),
		i = 0,
		n = 0;
	while(n<2){
		member[n] =[ member[i],member[i+1],member[i+2],member[i+3],member[i+4],member[i+5] ];
		n++;
		i=i+6;
		console.log(i);
	}
	member.splice(2,10)
	console.log(member);
})*/
$(document).ready(function(){
	var member = $(".member_wrapper"),
		name = $(".member_name"),
		work = $(".member_work"),
		previous = $('.previous'),
		next = $('.next'),
		flag = 0,
		amount = (member.length)/6,
		pages = $('.pager');
		console.log(amount);
	next.bind('click',function(){
		
		if(flag == 0){
			for(var i =0;i<18;i++){
				$(member[i]).addClass('none');
			}
			for(var i = 6;i<12;i++){
				$(member[i]).removeClass('none');
			}
			flag++;
		}else if(flag == 1){
			for(var i =0;i<18;i++){
				$(member[i]).addClass('none');
			}
			for(var i = 12;i<18;i++){
				$(member[i]).removeClass('none');
			}
			flag++;
		}else if(flag == amount-1){
			pages.prepend("<p style='text-align:center;'>已是最后一页</p>");
		}
		console.log("flag"+flag);
			console.log('amount'+amount);
		
	})
	previous.bind('click',function(){
		if(flag == 0){
			pages.prepend("<p style='text-align:center;'>已是第一页</p>");
		}else if(flag == 1){
			for(var i =0;i<18;i++){
				$(member[i]).addClass('none');
			}
			for(var i = 0;i<6;i++){
				$(member[i]).removeClass('none');
			}
			flag--;
		}else if(flag == amount-1){
			for(var i =0;i<18;i++){
				$(member[i]).addClass('none');
			}
			for(var i = 6;i<12;i++){
				$(member[i]).removeClass('none');
			}
			flag--;
		}
		console.log("flag"+flag);
		console.log('amount'+amount);
	})
})
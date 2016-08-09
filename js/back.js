$(document).ready(function(){
	var new_pwd = $('.new_pwd'),
		old_pwd = $('.old_pwd'),
		repeat_pwd = $('.repeat_pwd'),

		confirm = $('.password_validate .confirm_btn'),
		tips = $('.password_validate .tips');

	$(repeat_pwd).bind('keyup',function(){
		if(repeat_pwd.val()!= new_pwd.val()){
			$(tips).text("*第二次密码与第一次输入不符!");
		}else{
			$(tips).text("");
		}
	})
	$(confirm).bind('click',function(){
		if(repeat_pwd.val() == new_pwd.val()){
			$(tips).text("");
		}else if(!(new_pwd.val()&&old_pwd.val()&&repeat_pwd.val())){
			$(tips).append("<p>*信息不能为空，请将填信息填写完整!</p>");
		}else{
			$(tips).text("修改密码成功!");
		}
	})
//验证邮箱的正则表达式  
var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
var isPhone=/^(?:13\d|15\d|18\d|17\d)\d{5}(\d{3}|\*{3})$/; //手机号码验证规则  
var isTel=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;   //座机验证规则  
var email = $("#email"),
	tel = $("#tel"),
	card = $("#credit_card")
	info_btn = $(".info_btn");
info_btn.bind("click",function(){
	var p = $(".append_p");
	p.hide();
	if(!reg.test(email.val())){
		email.parent().append('<p class="append_p">*您输入的邮箱格式不正确</p>');
	}
	if( !( isPhone.test(tel.val())&&isTel.test(tel.val()) ) ){
		tel.parent().append('<p class="append_p">*您输入的联系电话不正确</p>');
	}
	/*var str = ValidateIdCard(card);  
	card.parent().append('<p class="append_p">'+str+'</p>');*/
})

 //验证身份证  
/*function ValidateIdCard(sId){  
  var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林",  
        23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽",35: "福建", 36: "江西",   
        37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南",   
        50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃",  
        63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " }  
  
        var iSum = 0;  
       
    //身份证 基本验证（数字或数字＋字母）  
    var reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
           
    //判断是否是有效数字或者数字+X(x)  Error:非法证号
        if (!reg.test(sId)){ return '*您输入的身份证格式不正确';}  
        sId = sId.replace(/x$/i, "a");  
    //验证省份  Error:非法地区
        if (aCity[parseInt(sId.substr(0, 2))] == null) return "*您输入的身份证格式不正确";  
    //获取用户输入的年月日  
        sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));  
    //将用户填写的年月日转换为时间对象  
        var d = new Date(sBirthday.replace(/-/g, "/"))  
    //匹配用户输入的年月日 与 时间对象的年月日  （主要防止用户输入的年月日是无效的：1888-55-77）  Error:非法生日
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "*您输入的身份证格式不正确";  
    //  Error:非法证号
        for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)  
        if (iSum % 11 != 1) return "*您输入的身份证格式不正确";  
        return aCity[parseInt(sId.substr(0, 2))] + "," + sBirthday + "," + (sId.substr(16, 1) % 2 ? "男" : "女")  
} */ 


//手机发验证短信	
var wait=60;
function time(o) {
if (wait == 0) {
o.removeAttribute("disabled");
o.value="获取动态码";
wait = 60;
} else {
o.setAttribute("disabled", true);
o.value="重新发送(" + wait + ")";
wait--;
setTimeout(function() {
time(o)
}, 1000)
}
}
$(".input-register").blur(function(){
	console.log("aa");
	time(btn);
})
// $('.input-code').click(function() {
// var phone = $('.regphone').val();
// $.ajax({
// type: 'post',
// url: "{{ path('zm_member_get_salt') }}",
// data: {
// phone: phone,
// type: 1
// },
// dataType: 'json',
// success: function (result) {
// if (result.flag == 1) {
// // alert('成功');
// time(btn);
// } else {
// alert(result.content);
// }
// }
// });
// });
// 
// 


})
$(document).ready(function(){
	var new_pwd = $('.new_pwd'),
		old_pwd = $('.old_pwd'),
		repeat_pwd = $('.repeat_pwd'),

		confirm = $('.password_validate .confirm_btn'),
		tips = $('.password_validate .tips');

	$(repeat_pwd).bind('keyup',function(){
		if(repeat_pwd.val()!= new_pwd.val()){
			$(tips).text("第二次密码与第一次输入不符!");
		}else{
			$(tips).text("");
		}
	})
	$(confirm).bind('click',function(){
		if(repeat_pwd.val() == new_pwd.val()){
			$(tips).text("");
		}else if(!(new_pwd.val()&&old_pwd.val()&&repeat_pwd.val())){
			$(tips).append("<p>信息不能为空，请将填信息填写完整!</p>");
		}else{
			$(tips).text("修改密码成功!");
		}
	})
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

})
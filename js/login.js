// touch.on($("#login"),"tap",function(){
//     var user = $("#user").text();
//     console.log(user);
// })
// 点击更换到注册页面
touch.on($("#zhu"), "tap", function () {
    location.href = "./regs.html";
})
//验证手机号正则11位
var phonereg = /^1[3-9][0-9]{9}/g;
// 密码长度大于6位的正则表达式
var passreg = /\w{6,12}/;


touch.on($("#login"), "tap", function () {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    phonereg.lastIndex = 0;
    // 验证信息是否符合要求规范
    if (user == "") {
        layer.msg('手机号不能为空');
    } else if (phonereg.test(user) === false) {
        layer.msg('您的手机号不符合规范');
    } else if (pass == "") {
        layer.msg('密码不能为空');
    } else if (passreg.test(pass) == false) {
        layer.msg('您的密码不符合规范');
    } else {
        var resuser = document.getElementById("user").value;
        var respass = document.getElementById("password").value;
        console.log(resuser);
        console.log(respass);
        // 对应的登录请求
        var url = "http://192.168.1.45:3000/users";
        $.post(url, {
            type: "login",
            phone: resuser,
            pass: respass
        }, function (e) {
            console.log(e);
            console.log(e.msg);

            if( e.ok ){
                layer.msg(e.msg);
                setTimeout(function(){
                    location.href="";
                },1000)
            }else{
                layer.msg(e.msg)
            }
        })
        
    }


})
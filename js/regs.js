// 点击更换到登录页面
touch.on($("#back"),"tap",function(){
    location.href="./login.html"; 
})

//验证手机号正则11位
var phonereg = /^1[3-9][0-9]{9}/g;
// 密码长度大于6位的正则表达式
var passreg = /\w{6,12}/;
//验证码的正则表达式6位
var yanzhengreg = /\d{6}/;

touch.on($("#regs1"),"tap",function(){
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var yanzheng = document.getElementById("yanzheng").value;
    phonereg.lastIndex = 0;

    // 判断电话号是否符合要求
    if( phone=="" ){
        layer.msg('手机号不能为空'); 
    }else if( phonereg.test(phone) === false ){
        layer.msg('您的手机号不符合规范');
        //判断验证码
    }else if( yanzheng=="" ){
        layer.msg('验证码不能为空');
    }else if( yanzhengreg.test(yanzheng) == false ){
        layer.msg('您的验证码不符合规范');
    }else if( password=="" ){
        layer.msg('密码不能为空');
    }else if( passreg.test(password) == false ){
        layer.msg('您的密码不符合规范');
    }else{
        layer.msg('注册成功');
        var resphone = document.getElementById("phone").value;
        var respass = document.getElementById("password").value;
        console.log(resphone);
        console.log(respass);
        //向后台传输数据
        var url = "http://192.168.1.45:3000/users";

        $.post(url,{
            type:"register",
            phone:resphone,
            pass:respass
        },function(e){
            console.log(e);

            setTimeout(function(){
                location.href="./login.html";
            },2000)
        })
       
    }

  
})
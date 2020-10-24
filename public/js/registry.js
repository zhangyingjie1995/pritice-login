var userflag = true;
var passflag = true;
var  passflag2 = true;
var emailflag=true
//图片上传
let fileUrl=''
$('.avatar').on('change',function(e){
    const p = new FormData()
    console.log(e)
    p.append('file',e.target.files[0])
    $.ajax({
        type:'post',
        url:"http://localhost:3000/register",
        processData: false,
        contentType: false,
        data:p,
        success(res){
            console.log('res',res)
            fileUrl = 'https://elm.cangdu.org/img/' + res.image_path
        }
    })
    
})

$('.username').on('focus',function(){
 $('p').eq(0).html('设置后不可更改，中英文均可，最长14个英文或7个汉字').css('color','red')
}).on('blur',function(){
   let username=$('.username').val()
   if(username !==''){
    len = this.value.replace(/[\u4e00-\u9fa5]/g, '**').length;
    let reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
    if (len >= 6 && len <= 14) {
        if (reg.test(this.value)) {
            $('p').eq(0).html('√').css('color', 'green')
            userflag = true
        } else {
            $('p').html('用户名格式输入有误').css('color', 'red')
            userflag = false
        }
    } else {
        $('p').eq(0).html('请输入最长14个英文或7个汉字').css('color', 'red')
        userflag = false
    }//同名验证
   }else{
    $('p').eq(0).html('用户名不能为空').css('color','red')
   }
   
})
//密码
$('.password').on('focus', function() {
    $('p').eq(1).html('请输入密码,长度为8-14个字符').css('color', 'red')
}).on('input', function() {
    if (this.value.length >= 8 && this.value.length <= 14) {
        var regnum = /\d+/g;
        var reglower = /[a-z]+/g;
        var regupper = /[A-Z]+/g;
        var other = /[\W\_]+/g;
        var count = 0;


        if (regnum.test(this.value)) {
            count++;
        }

        if (reglower.test(this.value)) {
            count++;
        }

        if (regupper.test(this.value)) {
            count++;
        }

        if (other.test(this.value)) {
            count++;
        }
        switch (count) {
            case 1:
                $('p').eq(1).html('弱').css('color', 'red')
                passflag = false
                break;
            case 2:
            case 3:
                $('p').eq(1).html('中').css('color', 'orange')
                passflag = true
                break
            case 4:
                $('p').eq(1).html('强').css('color', 'green')
                passflag = true
        }
    } else {
        $('p').eq(1).html('请输入为8-14个字符')
               passflag = false
    }
}).on('blur', function() {
    let password = $('.password').val()
    if (password !== '') {
        if (passflag) {
            $('p').eq(1).html('√').css('color', 'green')
            passflag = true
        }
    } else {
        $('p').eq(1).html('密码不能为空')
        passflag = false
    }
})
//再次输入密码
$('.password-t').on('focus', function() {
    $('p').eq(2).html('请再次输入密码').css('color', 'red')
}).on('blur', function() {
    let password_ok = $('.password-t').val()
    if (password_ok !== '') {
        if (password_ok == $('.password').val()) {
            $('p').eq(2).html('√').css('color', 'green')
            passflag2 = true;
        } else {
            $('p').eq(2).html('两次密码不一致').css('color', 'red')
            passflag2 = false;
        }
    } else {
        $('p').eq(2).html('密码不能为空')
        passflag2 = false;
    }
});
//邮箱
$('.email').on('blur', function(){
    let email=$('.email').val()
    if(email!=''){
     let reg= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
     if(reg.test(this.value)){
        $('p').eq(3).html('√').css('color','green') 
        emailflag=true
     }else{
        $('p').eq(3).html('请输入正确的邮箱').css('color','red')
        emailflag=false
     }
    }else{
    $('p').eq(3).html('邮箱不能为空').css('color','red')
       emailflag=false
    }
})
//提交
$('.registry').on('submit', function(e) {
    e.preventDefault()
    console.log(1);
    if ($('.username').val() == '') {
        $('p').eq(0).html('用户名不能为空').css('color', 'red')
        userflag = false;
    }
    if ($('.password').val() == '') {
        $('p').eq(1).html('密码不能为空').css('color', 'red')
        telflag = false;
    }
    if ($('.password-t').val() == '') {
        $('p').eq(2).html('密码不能为空').css('color', 'red')
        passflag2 = false;
    }
    if ($('.email').val() == '') {
        $('p').eq(3).html('邮箱').css('color', 'red')
        emailflag = false;
    }
    if (!userflag || !passflag || !passflag2 || !emailflag) {
        return false
    }
    $.ajax({
        type:'post',
        url: "http://localhost:3000/register",
        data: {
            name: $('.username').val(),
            password:$('.password').val(),
            mail:$('.email').val()
        },
        success: function(data) {
            if (data.state == 0) { 
                alert('用户已经存在')
            }else{
                location.href='http://localhost:3000/'
            }
        }
    })
})
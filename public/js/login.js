$('.btn').on('click',function(){
    $.ajax({
        type:'post',
        url:"http://localhost:3000/login",
        data:{
            username:$('.username').val(),
            password:$('.password').val(),
        },
        success({status,msg,token,email,avatar}){
            switch(status){
                case 0:
                    $('p').eq(0).html(msg)
                    setTimeout(() => {
                        $('p').html('密码错误')
                      },2000)
                break;
                case 1:
                    setCookie('username',$('#username').val(),7)
                    setCookie('phone',phone,7)
                    setCookie('email',email,7)
                    setCookie('token',token,7)
                    setCookie('avatar',avatar,7)
                    case 2:
                        $('p').eq(1).html(msg)
                        setTimeout(() => {
                            $('p').html('账号不存在')
                          },2000)

            };
            
        }

    })
})

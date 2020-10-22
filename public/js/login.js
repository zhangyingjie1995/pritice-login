$('.btn').on('click',function(){
    $.ajax({
        type:'post',
        url:"",
        data:{
            username:$('.username').val(),
            password:$('.password').val(),
        },
        success({status,msg,token,email,avatar}){
            switch(status){
                case 0:
                    $('p').eq(0).html(msg)
                    setTimeout(() => {
                        $('p').html('')
                      },2000)
                break;
                case 1:
                    setCookie('username',$('#username').val(),7)
                    setCookie('phone',phone,7)
                    setCookie('email',email,7)
                    setCookie('token',token,7)
                    setCookie('avatar',avatar,7)
            };
            
        }

    })
})

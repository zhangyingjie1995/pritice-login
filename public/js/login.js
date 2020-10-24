$('.btn').on('click',function(e){
    $.ajax({
        type:'post',
        url:"http://localhost:3000/login",
        data:{
            name:$('.username').val(),
            password:$('.password').val(),
        },
        success({state,msg}){
            console.log({state,msg})
            switch(state){
                case 0:
                    $('p').eq(0).html(msg)
                    setTimeout(() => {
                        $('p').html('')
                      },2000)
                break;
                case 1:
                    // setCookie('username',$('#username').val(),7)
                    // setCookie('phone',phone,7)
                    // setCookie('email',email,7)
                    // setCookie('token',token,7)
                    // setCookie('avatar',avatar,7)
                    location.href = 'http://localhost:3000/'
                break
                case 2 :
                    setTimeout(() => {
                        $('p').html('')
                    },2000)
            };
            
        }

    })
})

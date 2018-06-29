    require.config({
        paths: {
            'config': 'config',
            // 'http': './httpclient'
        },
        shim: {
            'http': ['config'],
        }
    })
    require(['config','jquery', 'http'], function(con,$, http){
        $(function(){
            $('#btn_login').click(function(){
                //ajax
                http.post('User/Login', {
                    username: $('#username').val().trim(),
                    password: $('#password').val().trim()
                }).then(function(res){
                    console.log(res);
                })
            })
        })
    })

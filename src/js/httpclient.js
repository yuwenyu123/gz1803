require.config({
    paths: {
        'jquery': './jquery'
    }
})

    define(['jquery'], function($){
        // console.log($)
        var baseUrl = "http://api-lybz.jcebing.com:8089/api/";
        function filterUrl(_url){
            if(_url.startsWith('http')){
                return _url;
            }  
            return baseUrl + _url;
        }

        return {
            get: function(_url, _data){
                return new Promise(function(resolve, reject){
                    $.ajax({
                        url: filterUrl(_url),
                        data: _data || {},
                        success: function(res){
                            resolve(res)
                        },
                        error: function(error){
                            reject(error)
                        }
                    })
                })
            },
            post: function(_url, _data){
                return new Promise(function(resolve, reject){
                    $.ajax({
                        url: filterUrl(_url),
                        data: _data || {},
                        type: 'post',
                        success: function(res){
                            resolve(res)
                        },
                        error: function(error){
                            reject(error)
                        }
                    })
                })
            },
        }
    })

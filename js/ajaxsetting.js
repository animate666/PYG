$(function(){
    const commonUrl = 'http://157.122.54.189:9094/api/public/v1/'
    // 使用zepto拦截器 ，让ajax每次请求发送前经过这个函数进行某项操作
    $.ajaxSettings.beforeSend = function(xhr,obj) {
        // console.log(obj);       //是一个对象
        // console.log(obj.url);   // 未拼接前的obj.url是所有url的最后部分 如：home/swiperdata
        // 当前要把每次的请求路径优化
        obj.url = commonUrl + obj.url
    }
    $.ajaxSettings.complete = function() {

    }
})
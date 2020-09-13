// 注意： 每次调用$.get()和$.post()何ajax()的时候
// 会调用ajaxPrefilter这个函数
// 在这个函数中 可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options){
    // 在发起真正的ajax请求之前 我们统一请求根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    // console.log(options.url);
    if(options.url.indexOf('/my/') !== -1) {
        options.headers ={
            Authorization: localStorage.getItem('token') || ''
        }   
    }
    // 全局挂载complete回调函数
 
    options.complete =function(res){
        // console.log('执行了complete回调');
        // console.log(res);
        if(res.responseJSON.status === 1 && res.responseJSON.message ==='身份认证失败！'){
        //     // 1强制清空 token
            localStorage.removeItem('token')
        //     // 2强制跳转登录页面
            location.href ='/login.html'
        }
    } 
})
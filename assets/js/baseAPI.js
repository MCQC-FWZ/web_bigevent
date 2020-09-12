// 注意： 每次调用$.get()和$.post()何ajax()的时候
// 会调用ajaxPrefilter这个函数
// 在这个函数中 可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options){
    // 在发起真正的ajax请求之前 我们统一请求根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    console.log(options.url);
})
// 入口函数
$(function () {
    // 调用getUserInfo()获取用户基本信息
    getUserInfo()
    var layer = layui.layer
    // 点击退出
    $('#sign_out').on('click', function () {
        layer.confirm('确定要退出?', {
            icon: 3,
            title: '提示'
        }, function (index) {
            console.log('yes');
            // 1清除本地存储中的 token
            localStorage.removeItem('token')
            // 2重新跳转到新的页面
            location.href ='/login.html';
            
            layer.close(index);
        },function () {
            console.log('no');
        });
    })
})

// 获取用户基本信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            } 
            //调用 renderAvetar 渲染用户头像
            renderAvatar(res.data)
        }
        // 无论成功失败都会调用这个函数
        // complete : function(res){
        //     console.log('执行了complete回调');
        //     console.log(res);
        //     if(res.responseJSON.status === 1 && res.responseJSON.message ==='身份认证失败！'){
        //     //     // 1强制清空 token
        //         localStorage.removeItem('token')
        //     //     // 2强制跳转登录页面
        //         location.href ='/login.html';
        //     }
        // }
    })
}
// 渲染用户头像
function renderAvatar(user) {
    var name = user.nickname || user.username;
    $('#welcome').html('欢迎' + name)
    if (user.user_pic !== null) {
        // 渲染图片头像
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        // 渲染文本头像 
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
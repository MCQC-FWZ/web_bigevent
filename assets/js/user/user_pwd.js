$(function(){
    var form = layui.form
    form.verify({
        pwd :[
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],
          samePwd : function(value){
              if (value === $('[name=oldPwd]').val()){
                  return '两次修改密码一致'
              }
          },
          rwPwd : function(value){
              if (value !== $('[name=newPwd]').val()){
                  return '新密码与确认密码不一致'
              }
          }
    })
    

    $('.layui-form').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            method:'POST',
            url:'/my/updatepwd',
            // 快速获取表单里的信息
            data :$(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg('原密码输入错误！')
                }
                layui.layer.msg('更新密码成功')
                
                // 重置密码
                // 快速获取from表单里DOM元素（通过0来获取dom元素）
                $('.layui-form')[0].reset()
            }
        })
    })
















    // var form = layui.form
    // form.verify({   
    // pwd : [
    //         /^[\S]{6,12}$/
    //         ,'密码必须6到12位，且不能出现空格'
    //       ] ,
    //       samePwd : function(value){
    //         if(value === $('[name=oldPwd]').val()){
    //             // console.log(111);
    //             return '新密码和原密码相同'
    //         }
    //     },
    //     rePwd : function(value){
    //         if(value !== $('[name=newPwd]').val()){
    //             // console.log(111);
    //             return '修改失败 两次修改密码不一致'
    //         }
    //     }
    // })
})

